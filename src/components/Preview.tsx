import { useRef, useCallback, useContext } from 'react';
import { toPng } from 'html-to-image';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';
import Header from 'src/components/preview/Header';
import Upgrades from 'src/components/preview/Upgrades';
import NumericalTrack from 'src/components/preview/NumericalTrack';
import TextTrack from './preview/TextTrack';
import JsonButtons from './preview/JsonButtons';

export default function Preview() {
    const asset: Asset = useContext(AssetContext);
    const ref = useRef(null);

    const saveImage = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true, backgroundColor: 'white' })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-image-name.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    return (
        <div>
            <section
                className={`asset-preview`}
                ref={ref}>
                <Header />
                <Upgrades />
                <div className="asset-track">
                    {asset.numericalTrack.isChecked && <NumericalTrack number={asset.numericalTrack.maxNumber} />}
                    {asset.textTrack.isChecked && asset.textTrack.text && <TextTrack />}
                </div>
            </section>

            <div className="buttons-group">
                <button
                    onClick={saveImage}
                    className="btn btn--primary">
                    Save as PNG
                </button>

                <JsonButtons />
            </div>
        </div>
    );
}
