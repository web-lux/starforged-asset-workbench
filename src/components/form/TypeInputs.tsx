import { useState } from 'react';

export default function TypeInputsGroup() {
    const defaultTypes = ['Command Vehicle', 'Module', 'Support Vehicle', 'Path', 'Companion', 'Deed'];
    const [isTypeCustom, setIsTypeCustom] = useState(false);

    const typeOptions = [...defaultTypes, 'Custom'].map((type, index) => (
        <option
            value={type}
            key={index}>
            {type}
        </option>
    ));

    function changeHue(e) {
        const hue = e.target.dataset.hue;
        updateAsset((draft) => {
            draft.hue = hue;
        });
    }

    function getColorGrid() {
        let colorGrid = [];

        for (let index = 0; index <= 350; index += 25) {
            colorGrid.push(
                <div
                    onClick={changeHue}
                    style={{ backgroundColor: `hsl(${index}, 75%, 55%)` }}
                    data-hue={index}
                    key={index}></div>
            );
        }

        return colorGrid;
    }

    function getCustomTypeNameInput() {
        if (isTypeCustom) {
            return (
                <div>
                    <label htmlFor="customTypeName">Custom Name</label>
                    <input
                        type="text"
                        name="customTypeName"
                        id="customTypeName"
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.type = e.target.value;
                            })
                        }
                    />
                </div>
            );
        }
        return null;
    }

    function handleTypeChange(e) {
        if (defaultTypes.includes(e.target.value)) {
            setIsTypeCustom(false);
        } else setIsTypeCustom(true);
        updateAsset((draft) => {
            draft.type = e.target.value;
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
                        defaultValue={defaultTypes[1]}
                        onChange={(e) => handleTypeChange(e)}>
                        {typeOptions}
                    </select>
                </div>

                {getCustomTypeNameInput()}
            </div>

            <div className="color-grid">{getColorGrid()}</div>
        </>
    );
}
