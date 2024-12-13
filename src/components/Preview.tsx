import { useRef, useCallback, useContext } from 'react';
import { toPng } from 'html-to-image';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';
import Header from 'src/components/preview/Header';
import Upgrades from 'src/components/preview/Upgrades';
import NumericalTrack from 'src/components/preview/NumericalTrack';
import TextTrack from './preview/TextTrack';

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

    function exportJSON() {
        const dataURI = `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(asset))}`;
        const link = document.createElement('a');
        const fileName = asset.title.trim() === '' ? 'starforged-custom-asset' : asset.title.trim();
        link.download = `${fileName}.json`;
        link.href = dataURI;
        link.click();
    }

    function loadJSON() {}

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
                <div className="json-buttons">
                    <button
                        className="btn btn--primary"
                        onClick={exportJSON}>
                        Export as JSON
                    </button>
                    <button className="btn btn--secondary">Load JSON</button>
                </div>
            </div>
        </div>
    );
}
