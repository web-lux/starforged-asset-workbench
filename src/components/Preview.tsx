import "./Preview.scss";
import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import Asset from "../interfaces/Asset";

export default function Preview({ asset }: { asset: Asset }) {
	const ref = useRef(null);

	const saveImage = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true, backgroundColor: "white" })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = "my-image-name.png";
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [ref]);

	function getClassname(type: string) {
		return type
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index === 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, "");
	}

	return (
		<div>
			<section
				className={`asset-preview ${getClassname(asset.type)}`}
				ref={ref}>
				<header>
					<div className="title-container">
						<span className="asset-type">{asset.type}</span>
						<span className="asset-title">
							{asset.title ? asset.title : "Title"}
						</span>
						{asset.description && (
							/* Render the HTML element only if asset.description has content */
							<span className="asset-description">{asset.description}</span>
						)}
						{asset.additionalFields[0]["isChecked"] && (
							/* Render the HTML element only if asset.hasAdditionalField1 returns true */
							<span className={"asset-additional-field"}>
								{asset.additionalFields[0]["text"]
									? asset.additionalFields[0]["text"]
									: "FIELD"}
							</span>
						)}
						{asset.additionalFields[1]["isChecked"] && (
							/* Render the HTML element only if asset.hasAdditionalField2 returns true */
							<span className={"asset-additional-field"}>
								{asset.additionalFields[1]["text"]
									? asset.additionalFields[1]["text"]
									: "FIELD"}
							</span>
						)}
					</div>
					<div className="clip icon-container">
						<div className="clip icon">
							<img
								src={asset.image.path ? asset.image.path : "src/assets/owl.svg"}
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
				</header>
				<ul>
					<li className={asset.upgrades[0]["isChecked"] ? "checked" : null}>
						{asset.upgrades[0]["text"] ? asset.upgrades[0]["text"] : "Text"}
					</li>
					<li className={asset.upgrades[1]["isChecked"] ? "checked" : null}>
						{asset.upgrades[1]["text"] ? asset.upgrades[1]["text"] : "Text"}
					</li>
					<li className={asset.upgrades[2]["isChecked"] ? "checked" : null}>
						{asset.upgrades[2]["text"] ? asset.upgrades[2]["text"] : "Text"}
					</li>
				</ul>
				{asset.track.isChecked && (
					<div className="asset-track">
						{(() => {
							const track = [];

							for (let i = asset.track.maxNumber; i >= 0; i--) {
								track.push(<div className="asset-track-hex">{i}</div>);
							}

							return track;
						})()}
					</div>
				)}
			</section>

			<button onClick={saveImage}>Save as PNG</button>
		</div>
	);
}
