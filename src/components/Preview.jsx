import "./Preview.scss";
import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";

export default function Preview({ form }) {
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

	return (
		<div>
			<section className={`asset-preview ${form.type.className}`} ref={ref}>
				<header>
					<div className="title-container">
						<span className="asset-type">{form.type.name}</span>
						<span className="asset-title">
							{form.title ? form.title : "Title"}
						</span>
						{form.description &&
						/* Render the HTML element only if form.description has content */
							<span className="asset-description">
							{form.description}
							</span>
						}
						{form.additionalFields[0]["hasAdditionalField"] &&
						/* Render the HTML element only if form.hasAdditionalField1 returns true */
							<span className={"asset-additional-field"}>
							{form.additionalFields[0]["text"] ? form.additionalFields[0]["text"] : "FIELD"}
						</span>
						}
						{form.additionalFields[1]["hasAdditionalField"] &&
							/* Render the HTML element only if form.hasAdditionalField2 returns true */
							<span className={"asset-additional-field"}>
							{form.additionalFields[1]["text"] ? form.additionalFields[1]["text"] : "FIELD"}
						</span>
						}
					</div>
					<div className="clip icon-container">
						<div className="clip icon">
							<img
								src={form.image.path ? form.image.path : "src/assets/owl.svg"}
								style={{ width: form.image.size }}
							/>
							<svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
								<clipPath id="svg-hex" clipPathUnits="objectBoundingBox">
									<path d="M0.501,0 L1,0.25 V0.75 L0.501,1 L0.001,0.75 L0.001,0.25 L0.501,0" />
								</clipPath>
							</svg>
						</div>
					</div>
				</header>
				<ul>
					<li className={form.upgrades[0]["ischecked"] ? "checked" : null}>
						{form.upgrades[0]["text"] ? form.upgrades[0]["text"] : "Text"}
					</li>
					<li className={form.upgrades[1]["ischecked"] ? "checked" : null}>
						{form.upgrades[1]["text"] ? form.upgrades[1]["text"] : "Text"}
					</li>
					<li className={form.upgrades[2]["ischecked"] ? "checked" : null}>
						{form.upgrades[2]["text"] ? form.upgrades[2]["text"] : "Text"}
					</li>
				</ul>
				{/*TODO affichage track*/}
				{form.hasTrack &&
					<div class="asset-track">
							{(() => {
								const track = [];

								for (let i = form.track; i >= 0; i--) {
									track.push(<div class="asset-track-hex">{i}</div>);
								}

								return track;
							})()}
					</div>
				}
			</section>

			<button onClick={saveImage}>Save as PNG</button>
		</div>
	);
}
