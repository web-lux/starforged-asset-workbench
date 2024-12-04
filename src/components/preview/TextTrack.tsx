import { useContext } from 'react';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function TextTrack() {
    const asset: Asset = useContext(AssetContext);

    function getTextTrack(formValue: string) {
        const trackContent = formValue.split(',');

        return trackContent.map((text, index) => {
            const formattedText = text.trim();

            return (
                <div
                    className="text-track"
                    key={index}>
                    {formattedText}
                </div>
            );
        });
    }

    return <div className="text-tracks">{getTextTrack(asset.textTrack.text)}</div>;
}
