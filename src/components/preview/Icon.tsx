import { useContext } from 'react';
import { AssetContext } from 'src/services/AssetContext.js';
import Asset from 'src/types/Asset';

export default function Icon() {
    const asset: Asset = useContext(AssetContext);

    return (
        <>
            <div className="clip icon-container">
                <div
                    className="clip icon"
                    style={{ backgroundColor: `hsl(${asset.hue}, 20%, 85%)` }}>
                    <img
                        src={asset.image.path || 'src/assets/owl.svg'}
                        style={{ width: asset.image.size }}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="0"
                        width="0">
                        <clipPath
                            id="svg-hex"
                            clipPathUnits="objectBoundingBox">
                            <path d="M0.501,0 L1,0.25 V0.75 L0.501,1 L0.001,0.75 L0.001,0.25 L0.501,0" />
                        </clipPath>
                    </svg>
                </div>
            </div>

            <svg
                width="62"
                height="72"
                viewBox="0 0 62 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="top-hex">
                <path
                    d="M11.5 44.5L23 51.25V64.7504L11.5 71.5L0 64.7504L5.8046e-07 51.25L11.5 44.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 70%)` }}
                />
                <path
                    d="M50.5 22.5L62 29.25V42.7504L50.5 49.5L39 42.7504V29.25L50.5 22.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 55%)` }}
                />
                <path
                    d="M37 45L48.5 51.75V65.2504L37 72L25.5 65.2504V51.75L37 45Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 55%)` }}
                />
                <path
                    d="M24.5 22.5L36 29.25V42.7504L24.5 49.5L13 42.7504V29.25L24.5 22.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 70%)` }}
                />
                <path
                    d="M11.5 0.5L23 7.25004V20.7504L11.5 27.5L0 20.7504L5.8046e-07 7.25004L11.5 0.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 85%)` }}
                />
                <path
                    d="M37.5 0.5L49 7.25004V20.7504L37.5 27.5L26 20.7504V7.25004L37.5 0.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 85%)` }}
                />
            </svg>

            <svg
                width="62"
                height="72"
                viewBox="0 0 62 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bottom-hex">
                <path
                    d="M50.5 27.5L39 20.75V7.2496L50.5 0.500002L62 7.24961L62 20.75L50.5 27.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 70%)` }}
                />
                <path
                    d="M11.5 49.5L0 42.75L1.18024e-06 29.2496L11.5 22.5L23 29.2496L23 42.75L11.5 49.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 55%)` }}
                />
                <path
                    d="M25 27L13.5 20.25L13.5 6.7496L25 0L36.5 6.7496V20.25L25 27Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 55%)` }}
                />
                <path
                    d="M37.5 49.5L26 42.75L26 29.2496L37.5 22.5L49 29.2496V42.75L37.5 49.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 70%)` }}
                />
                <path
                    d="M50.5 71.5L39 64.75L39 51.2496L50.5 44.5L62 51.2496L62 64.75L50.5 71.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 85%)` }}
                />
                <path
                    d="M24.5 71.5L13 64.75L13 51.2496L24.5 44.5L36 51.2496L36 64.75L24.5 71.5Z"
                    style={{ fill: `hsl(${asset.hue}, 20%, 85%)` }}
                />
            </svg>
        </>
    );
}
