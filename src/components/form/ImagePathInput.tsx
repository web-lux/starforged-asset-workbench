import { useContext } from 'react';
import { Updater } from 'use-immer';
import { UpdateAssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function ImagePathInput() {
    const updateAsset: Updater<Asset> = useContext(UpdateAssetContext);

    return (
        <div>
            <label htmlFor="assetImage">Image</label>
            <input
                type="file"
                name="assetImage"
                id="assetImage"
                accept="image/png, image/jpeg, image/svg+xml"
                onChange={(e) => {
                    const file = e.target.files[0];

                    if (file) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);

                        reader.onload = (e) => {
                            updateAsset((draft) => {
                                draft.image.path = e.target.result.toString();
                            });
                        };
                    }
                }}
            />
        </div>
    );
}
