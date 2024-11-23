import { useContext } from 'react';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';
import Icon from './Icon';
import AdditionalField from './AditionnalField';

export default function Header() {
    const asset: Asset = useContext(AssetContext);

    return (
        <header>
            <div className="title-container">
                <span
                    className="asset-type"
                    style={{ color: `hsl(${asset.hue}, 20%, 55%)` }}>
                    {asset.type}
                </span>
                <span className="asset-title">{asset.title || 'Title'}</span>
                {asset.description && (
                    /* Render the HTML element only if asset.description has content */
                    <span className="asset-description">{asset.description}</span>
                )}

                {asset.additionalFields.map(
                    (field) =>
                        field.isChecked && (
                            <AdditionalField
                                id={field.id}
                                text={field.text}
                            />
                        )
                )}
            </div>

            <Icon />
        </header>
    );
}
