import { useContext } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function CustomTypeInputs() {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);

    function convertHueIntoHSL(hueDegree: Number) {
        return {
            dark: `hsl(${hueDegree}, 40%, 56%)`,
            mid: `hsl(${hueDegree}, 40%, 70%)`,
            light: `hsl(${hueDegree}, 40%, 84%)`,
        };
    }

    function handleHueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const hueDegree = Number(e.target.value);
        updateAsset((draft) => {
            draft.type.hue = convertHueIntoHSL(hueDegree);
        });
    }

    return (
        <>
            <div>
                <label htmlFor="customTypeName">Custom Name</label>
                <input
                    type="text"
                    name="customTypeName"
                    id="customTypeName"
                    onChange={(e) =>
                        updateAsset((draft) => {
                            draft.type.name = e.target.value;
                        })
                    }
                />
            </div>

            <div>
                <label htmlFor="customTypeHue">Custom Color</label>
                <input
                    name="customTypeHue"
                    id="customTypeHue"
                    type="range"
                    defaultValue={0}
                    step={15}
                    min={0}
                    max={360}
                    onChange={(e) => handleHueChange(e)}
                    className="hue-range"
                />
            </div>
        </>
    );
}
