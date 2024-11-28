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
                <div className="upgrade-text-input">
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
            <p className="help">
                The inputs support markdown-like syntax. You can surround text with <mark>**</mark> to <strong>bold</strong>, <mark>__</mark> to{' '}
                <i>italicize</i> and <mark>--</mark> to <u>underline</u>.
            </p>
            {upgradeFields}
        </fieldset>
    );
}
