import { useContext } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext, AssetContext } from 'src/services/AssetContext.js';
import ImagePathInput from 'src/components/form/ImagePathInput';
import Asset from 'src/types/Asset';
import TypeInputs from 'src/components/form/TypeInputs';

export default function InterfaceTab({ tab }: { tab: string }) {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);
    const asset: Asset = useContext(AssetContext);

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
                        checked={asset.additionalFields[i].isChecked}
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
                        value={asset.additionalFields[i].text}
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
                <ImagePathInput />

                <div>
                    <label htmlFor="assetImageSize">Image Size</label>
                    <input
                        type="range"
                        name="assetImageSize"
                        id="assetImageSize"
                        value={asset.image.size}
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
                    <label htmlFor="assetTitle">Title</label>
                    <input
                        type="text"
                        name="assetTitle"
                        id="assetTitle"
                        value={asset.title}
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
                        value={asset.description}
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.description = e.target.value;
                            })
                        }
                    />
                </div>
            </div>

            <TypeInputs />

            <div className="fieldgroup">
                <div>
                    <label htmlFor="assetTrack">Track</label>
                    <input
                        type="checkbox"
                        name="AssetTrackCheck"
                        id="AssetTrackCheck"
                        checked={asset.track.isChecked}
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
                        value={asset.track.maxNumber}
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
