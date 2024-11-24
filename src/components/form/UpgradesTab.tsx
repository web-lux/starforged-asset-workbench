import { useContext } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext, AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function UpgradesTab({ tab }: { tab: string }) {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);
    const asset: Asset = useContext(AssetContext);
    let upgradeFields = [];

    for (let i = 0; i < 3; i++) {
        upgradeFields.push(
            <div
                className="fieldgroup"
                key={i}>
                <div>
                    <label htmlFor={`Upgrade${i}`}>Upgrade {i + 1}</label>
                    <textarea
                        name={`Upgrade${i}`}
                        id={`Upgrade${i}`}
                        value={asset.upgrades[i].text}
                        onChange={(e) =>
                            updateAsset((draft) => {
                                draft.upgrades[i].text = e.target.value;
                            })
                        }></textarea>
                </div>

                <div className="checkboxes">
                    <div>
                        <label htmlFor={`Upgrade${i}check`}>Checked ?</label>
                        <input
                            type="checkbox"
                            name={`Upgrade${i}check`}
                            id={`Upgrade${i}check`}
                            defaultChecked={i === 0 ? true : false}
                            checked={asset.upgrades[i].isChecked}
                            onChange={(e) =>
                                updateAsset((draft) => {
                                    draft.upgrades[i].isChecked = e.target.checked;
                                })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor={`Upgrade${i}check`}>Displayed ?</label>
                        <input
                            type="checkbox"
                            name={`Upgrade${i}display`}
                            id={`Upgrade${i}display`}
                            checked={asset.upgrades[i].isDisplayed}
                            defaultChecked={true}
                            onChange={(e) =>
                                updateAsset((draft) => {
                                    draft.upgrades[i].isDisplayed = e.target.checked;
                                })
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <fieldset className={tab === 'upgrades' ? 'upgrades visible' : null}>
            <legend hidden>Upgrades</legend>
            {upgradeFields}
        </fieldset>
    );
}
