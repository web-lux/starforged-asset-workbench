import "./Preview.scss";
import icon from "../assets/owl.svg";

export default function Preview({ form }) {
	function handleType(type) {
		switch (type) {
			case "commandVehicle":
				return <span className="asset-type commandVehicle">Command Vehicle</span>;
			case "module":
				return <span className="asset-type module">Module</span>;
			case "supportVehicle":
				return <span className="asset-type supportVehicle">Support Vehicle</span>;
			case "path":
				return <span className="asset-type path">Path</span>;
			case "companion": 
				return <span className="asset-type companion">Companion</span>;
			case "deed":
				return <span className="asset-type deed">Deed</span>;
		}
	}
	
	return (
		<section className="asset-preview module">
			<header>
				<div className="title-container">
					{handleType(form.type)}
					<span className="asset-title">{form.title}</span>
				</div>

				<div className="clip icon-container">
					<div className="clip icon">
						<img src={form.imagePath}/>
						<svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
							<clipPath id="svg-hex" clipPathUnits="objectBoundingBox">
								<path d="M0.501,0 L1,0.25 V0.75 L0.501,1 L0.001,0.75 L0.001,0.25 L0.501,0" />
							</clipPath>
						</svg>
					</div>
				</div>
			</header>

			<ul className="description">
				<li className={form.upgrades1.ischecked ? "checked" : null}>{form.upgrades1.text}</li>
				<li className={form.upgrades2.ischecked ? "checked" : null}>{form.upgrades2.text}</li>
				<li className={form.upgrades3.ischecked ? "checked" : null}>{form.upgrades3.text}</li>
			</ul>
		</section>
	);
}
