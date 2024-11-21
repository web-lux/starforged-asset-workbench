import { Updater } from 'use-immer';
import Asset from '../../interfaces/Asset';

interface Props {
    updateAsset: Updater<Asset>;
    tab: string;
}

export default function UpgradesTab({ updateAsset, tab }: Props) {
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
