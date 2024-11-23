import { useContext } from 'react';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function Upgrades() {
    const asset: Asset = useContext(AssetContext);

    function parseMarkdown(string) {
        const mdRegex = {
            bold: /\*\*([\s\S]*?)\*\*/g,
            italic: /_([\s\S]*?)_/g,
            underline: /~~([\s\S]*?)~~/g,
        };

        const htmlTags = {
            bold: '<b>$1</b>',
            italic: '<i>$1</i>',
            underline: '<u>$1</u>',
        };

        string = string.replace(mdRegex.bold, htmlTags.bold).replace(mdRegex.italic, htmlTags.italic).replace(mdRegex.underline, htmlTags.underline);

        return string;
    }

    const upgrades = asset.upgrades.map((upgrade) => {
        if (!upgrade.isDisplayed) return;
        return (
            <li
                className={upgrade.isChecked ? 'checked' : undefined}
                key={upgrade.id}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(upgrade.text) || 'Text' }}></li>
        );
    });

    return <ul>{upgrades}</ul>;
}
