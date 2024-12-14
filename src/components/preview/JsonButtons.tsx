import { useContext } from 'react';
import { Updater } from 'use-immer';
import Ajv from 'ajv/dist/jtd';
import { AssetContext, UpdateAssetContext } from 'src/services/AssetContext.js';
import { assetSchema } from 'src/types/AssetSchema';
import Asset from 'src/types/Asset';

export default function JsonButtons() {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);
    const asset: Asset = useContext(AssetContext);

    function exportJSON() {
        const data = `data:text/json;charset=utf-8, ${JSON.stringify(asset)}`;
        const link = document.createElement('a');
        const fileName = asset.title.trim() === '' ? 'starforged-custom-asset' : asset.title.trim();
        link.download = `${fileName}.json`;
        link.href = data;
        link.click();
    }

    function isJSONValid(json: JSON) {
        const ajv = new Ajv();
        const validate = ajv.compile(assetSchema);
        const valid = validate(json);
        return valid;
    }

    function loadJSON() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/JSON';
        input.onchange = (e: any) => {
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.readAsText(file);

                reader.onload = (e) => {
                    const loadedAssetRaw = e.target.result as string;
                    const loadedAsset = JSON.parse(loadedAssetRaw);

                    if (isJSONValid(loadedAsset)) {
                        updateAsset(loadedAsset);
                    } else {
                        alert("Invalid JSON. Are you sure it's from here?");
                    }
                };
            }
        };
        input.click();
    }

    return (
        <div className="json-buttons">
            <button
                className="btn btn--primary"
                onClick={exportJSON}>
                Export as JSON
            </button>
            <button
                className="btn btn--secondary"
                onClick={loadJSON}>
                Load JSON
            </button>
        </div>
    );
}
