import { useContext } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';
import { useState } from 'react';
import { assetTypesMap } from 'src/assets/data/typesData';
import { TypesIndexes } from 'src/types/Asset';
import CustomTypeInputs from './CustomTypeInputs';

export default function TypeInputs() {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);
    const [isTypeCustom, setIsTypeCustom] = useState(false);

    const getOptions = () => {
        let options = [];
        for (let key of assetTypesMap.keys()) {
            options.push(
                <option
                    value={key}
                    key={key}>
                    {assetTypesMap.get(key).name}
                </option>
            );
        }
        return options;
    };

    function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const optionId = Number(e.target.value);

        if (optionId === TypesIndexes.CUSTOM) setIsTypeCustom(true);
        else setIsTypeCustom(false);
        updateAsset((draft) => {
            draft.type = {
                id: optionId,
                name: assetTypesMap.get(optionId).name,
                hue: assetTypesMap.get(optionId).hue,
            };
        });
    }

    return (
        <>
            <div className="fieldgroup">
                <div>
                    <label htmlFor="assetType">Type (module, path...)</label>
                    <select
                        name="assetType"
                        id="assetType"
                        defaultValue={TypesIndexes.PATH}
                        onChange={(e) => handleTypeChange(e)}>
                        {getOptions()}
                    </select>
                </div>

                {isTypeCustom && <CustomTypeInputs />}
            </div>
        </>
    );
}
