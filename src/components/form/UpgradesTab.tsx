import { useContext, useRef } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext, AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function UpgradesTab({ tab }: { tab: string }) {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);
    const asset: Asset = useContext(AssetContext);
    let upgradeFields = [];
    const textareaRef = useRef(null);

    const shortcuts = {
        bold: {
            key: 'b',
            symbol: '**',
            length: 2,
        },
        italic: {
            key: 'i',
            symbol: '_',
            length: 1,
        },
        underline: {
            key: 'u',
            symbol: '--',
            length: 2,
        },
    };

    const validKeys = new Set(Object.values(shortcuts).map((shortcut) => shortcut.key));

    function isShortcutValid(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        return e.ctrlKey && validKeys.has(e.key);
    }

    function applyStyle(targetStyle: { key: string; symbol: string; length: number }, textarea: HTMLTextAreaElement) {
        const { selectionStart: start, selectionEnd: end, value: text } = textarea;

        if (start !== end) {
            const selectedText = text.substring(start, end);
            const before = text.substring(0, start);
            const after = text.substring(end);

            const isAlreadyStyled = selectedText.startsWith(targetStyle.symbol) && selectedText.endsWith(targetStyle.symbol);

            if (isAlreadyStyled) {
                const newText = selectedText.slice(targetStyle.length, -targetStyle.length);
                textarea.value = `${before}${newText}${after}`;
                textarea.selectionStart = start;
                textarea.selectionEnd = end - targetStyle.length * 2;
            } else {
                textarea.value = `${before}${targetStyle.symbol}${selectedText}${targetStyle.symbol}${after}`;
                textarea.selectionStart = start;
                textarea.selectionEnd = end + targetStyle.length * 2;
            }
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>, upgradeIndex: number) {
        if (isShortcutValid(e)) {
            e.preventDefault();
            const textarea = e.target as HTMLTextAreaElement;
            const matchingShortcut = Object.values(shortcuts).find((shortcut) => shortcut.key === e.key);

            if (matchingShortcut) {
                applyStyle(matchingShortcut, textarea);

                updateAsset((draft) => {
                    draft.upgrades[upgradeIndex].text = textarea.value;
                });
            }
        }
        return;
    }

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
                        }
                        onKeyDown={(e) => {
                            handleKeyDown(e, i);
                        }}
                        ref={textareaRef}></textarea>
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
                <i>italicize</i> and <mark>--</mark> to <u>underline</u>. You can also select text and use the shortcut <b>CTRL + B</b>,{' '}
                <i>CTRL + I </i> and <u>CTRL + U</u> to apply the appropriate style.
            </p>
            {upgradeFields}
        </fieldset>
    );
}
