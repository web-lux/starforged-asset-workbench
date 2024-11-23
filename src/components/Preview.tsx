import { useRef, useCallback, useContext } from 'react';
import { toPng } from 'html-to-image';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';
import Header from './preview/Header';
import Upgrades from './preview/Upgrades';
import Track from './preview/Track';

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
                {asset.track.isChecked && <Track number={asset.track.maxNumber} />}
            </section>

            <button onClick={saveImage}>Save as PNG</button>
        </div>
    );
}
