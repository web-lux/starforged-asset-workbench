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

	function handleType(type) {
		switch (type) {
			case "commandVehicle":
				return (
					<span className="asset-type commandVehicle">Command Vehicle</span>
				);
			case "module":
				return <span className="asset-type module">Module</span>;
			case "supportVehicle":
				return (
					<span className="asset-type supportVehicle">Support Vehicle</span>
				);
			case "path":
				return <span className="asset-type path">Path</span>;
			case "companion":
				return <span className="asset-type companion">Companion</span>;
			case "deed":
				return <span className="asset-type deed">Deed</span>;
		}
	}

	return (
		<div>
			<section className="asset-preview module" ref={ref}>
				<header>
					<div className="title-container">
						{handleType(form.type)}
						<span className="asset-title">
							{form.title ? form.title : "Title"}
						</span>
					</div>
					<div className="clip icon-container">
						<div className="clip icon">
							<img
								src={form.image.path ? form.image.path : "src/assets/owl.svg"}
								style={{width: form.image.size}}
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
			</section>

			<button onClick={saveImage}>Save as PNG</button>
		</div>
	);
}
