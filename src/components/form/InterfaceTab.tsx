import { useState } from 'react';
import hasUpdateAsset from '../../interfaces/HasUpdateAsset';
import ImagePathInput from './ImagePathInput';

interface Props extends hasUpdateAsset {
    tab: string;
}

export default function InterfaceTab({ updateAsset, tab }: Props) {
    const defaultTypes = ['Command Vehicle', 'Module', 'Support Vehicle', 'Path', 'Companion', 'Deed'];
    const [isTypeCustom, setIsTypeCustom] = useState(false);

    const typeOptions = [...defaultTypes, 'Custom'].map((type, index) => (
        <option
            value={type}
            key={index}>
            {type}
        </option>
    ));

    function handleTypeChange(e) {
        if (defaultTypes.includes(e.target.value)) {
            setIsTypeCustom(false);
        } else setIsTypeCustom(true);
        updateAsset((draft) => {
            draft.type = e.target.value;
        });
    }

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

    function getAdditionalFieldInputs() {
        let inputs = [];

        for (let i = 0; i < 2; i++) {
            inputs.push(
                <div key={i}>
                    <label htmlFor="assetAdditionalField1">Additional field {i + 1}</label>
                    <input
                        type="checkbox"
                        name={`AdditionalFieldCheck${i}`}
                        id={`AdditionalFieldCheck${i}`}
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.additionalFields[i].isChecked = e.target.checked;
                            })
                        }
                    />
                    <input
                        type="text"
                        name={`AdditionalFieldField${i}`}
                        id={`AdditionalFieldField${i}`}
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.additionalFields[i].text = e.target.value;
                            })
                        }
                    />
                </div>
            );
        }

        return inputs;
    }

    return (
        <fieldset className={tab === 'interface' ? 'visible' : null}>
            <legend hidden>Interface</legend>

            <div className="fieldgroup">
                <ImagePathInput updateAsset={updateAsset} />

                <div>
                    <label htmlFor="assetImageSize">Image Size</label>
                    <input
                        type="range"
                        name="assetImageSize"
                        id="assetImageSize"
                        onChange={(e) => {
                            updateAsset((draft) => {
                                draft.image.size = Number(e.target.value);
                            });
                        }}
                    />
                </div>
            </div>

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

            <div className="fieldgroup">
                <div>
                    <label htmlFor="assetTitle">Title</label>
                    <input
                        type="text"
                        name="assetTitle"
                        id="assetTitle"
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.title = e.target.value;
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="assetDescription">Description</label>
                    <input
                        type="text"
                        name="assetDescription"
                        id="assetDescription"
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.description = e.target.value;
                            })
                        }
                    />
                </div>
            </div>

            <div className="color-grid">{getColorGrid()}</div>

            <div className="fieldgroup">
                <div>
                    <label htmlFor="assetTrack">Track</label>
                    <input
                        type="checkbox"
                        name="AssetTrackCheck"
                        id="AssetTrackCheck"
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.track.isChecked = e.target.checked;
                            })
                        }
                    />
                    <input
                        type="number"
                        name="assetTrack"
                        id="assetTrack"
                        min="1"
                        max="6"
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.track.maxNumber = Number(e.target.value);
                            })
                        }
                    />
                </div>
            </div>

            <div className="fieldgroup">{getAdditionalFieldInputs()}</div>
        </fieldset>
    );
}
