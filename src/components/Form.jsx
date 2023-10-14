import { useState } from "react";
import "./Form.scss";

export default function Form({ form, setForm }) {
	function handleArr(id, property, value) {
		const newArr = form.upgrades.map((upgrade) => {
			if (upgrade.id === id) {
				return { ...upgrade, [property]: value };
			} else {
				return upgrade;
			}
		});
		setForm({ ...form, upgrades: newArr });
	}

	function handleImageSize(value) {
		const percentage = value + "%";
		setForm({
			...form,
			image: {
				...form.image,
				size: percentage,
			},
		});
	}

	function handleType(value) {
		let newType = {
			className: value,
		};

		switch (value) {
			case "commandVehicle":
				newType = { ...newType, name: "Command Vehicle" };
				break;
			case "module":
				newType = { ...newType, name: "Module" };
				break;
			case "supportVehicle":
				newType = { ...newType, name: "Support Vehicle" };
				break;
			case "path":
				newType = { ...newType, name: "Path" };
				break;
			case "companion":
				newType = { ...newType, name: "Companion" };
				break;
			case "deed":
				newType = { ...newType, name: "Deed" };
				break;
		}

		setForm({ ...form, type: newType });
	}

	const [selection, setSelection] = useState("interface");

	function changePanel(value) {
		setSelection(value);
	}

	return (
		<div className="form">
			<form>
				<nav>
					<ul>
						<li
							onClick={(e) => {
								changePanel("interface");
							}}
							className={selection === "interface" ? "active" : null}
						>
							Interface
						</li>

						<li
							onClick={(e) => {
								changePanel("upgrades");
							}}
							className={selection === "upgrades" ? "active" : null}
						>
							Upgrades
						</li>
					</ul>
				</nav>

				<fieldset className={selection === "interface" ? "visible" : null}>
					<legend hidden>Interface</legend>

					<div className="fieldgroup">
						<div>
							<label htmlFor="assetImage">Image url</label>
							<input
								type="text"
								name="assetImage"
								id="assetImage"
								onChange={(e) => {
									setForm({
										...form,
										image: {
											...form.image,
											path: e.target.value,
										},
									});
								}}
							/>
						</div>

						<div>
							<label htmlFor="assetImageSize">Image Size</label>
							<input
								type="range"
								name="assetImageSize"
								id="assetImageSize"
								onChange={(e) => {
									handleImageSize(e.target.value);
								}}
							/>
						</div>
					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="assetType">Type (module, path...)</label>
							<select
								name="assetType"
								id="assetType"
								onChange={(e) => {
									handleType(e.target.value);
								}}
								defaultValue="module"
							>
								<option value="commandVehicle">Command Vehicle</option>
								<option value="module">Module</option>
								<option value="supportVehicle">Support Vehicle</option>
								<option value="path">Path</option>
								<option value="companion">Companion</option>
								<option value="deed">Deed</option>
							</select>
						</div>

						<div>
							<label htmlFor="assetTitle">Title</label>
							<input
								type="text"
								name="assetTitle"
								id="assetTitle"
								onChange={(e) => setForm({ ...form, title: e.target.value })}
							/>
						</div>
					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="assetDescription">Description</label>
							<input
								type="text"
								name="assetDescription"
								id="assetDescription"
								onChange={(e) => setForm({ ...form, description: e.target.value })}
							/>
						</div>

					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="assetAdditionalField">Additional field</label>
							<input
								type="checkbox"
								name="AdditionalFieldCheck1"
								id="AdditionalFieldCheck1"
								onChange={(e) => {
									setForm({...form, hasAdditionalField1: e.target.checked});
								}}
							/>
							<input
								type="text"
								name="assetAdditionalField1"
								id="assetAdditionalField1"
								onChange={(e) => setForm({...form, additionalField1: e.target.value})}
							/>
						</div>
						<div>
							<label htmlFor="assetAdditionalField">Additional field</label>
							<input
								type="checkbox"
								name="AdditionalFieldCheck2"
								id="AdditionalFieldCheck2"
								onChange={(e) => {
									setForm({...form, hasAdditionalField2: e.target.checked});
								}}
							/>
							<input
								type="text"
								name="assetAdditionalField2"
								id="assetAdditionalField2"
								onChange={(e) => setForm({...form, additionalField2: e.target.value})}
							/>
						</div>
					</div>
					<div>


					</div>
				</fieldset>

				<fieldset className={selection === "upgrades" ? "upgrades visible" : null}>
					<legend hidden>Upgrades</legend>

					<div className="fieldgroup">
						<div>
							<label htmlFor="Upgrade1">Upgrade 1</label>
							<textarea
								name="Upgrade1"
								id="Upgrade1"
								onChange={(e) => handleArr(0, "text", e.target.value)}
							></textarea>
						</div>
						<div>
							<label htmlFor="Upgrade1check">Checked ?</label>
							<input
								type="checkbox"
								name="Upgrade1check"
								id="Upgrade1check"
								defaultChecked="true"
								onChange={(e) => handleArr(0, "ischecked", e.target.checked)}
							/>
						</div>
					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="Upgrade2">Upgrade 2</label>
							<textarea
								name="Upgrade2"
								id="Upgrade2"
								onChange={(e) => handleArr(1, "text", e.target.value)}
							></textarea>
						</div>

						<div>
							<label htmlFor="Upgrade2check">Checked ?</label>
							<input
								type="checkbox"
								name="Upgrade2check"
								id="Upgrade2check"
								onChange={(e) => handleArr(1, "ischecked", e.target.checked)}
							/>
						</div>
					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="Upgrade3">Upgrade 3</label>
							<textarea
								name="Upgrade3"
								id="Upgrade3"
								onChange={(e) => handleArr(2, "text", e.target.value)}
							></textarea>
						</div>

						<div>
							<label htmlFor="Upgrade3check">Checked ?</label>
							<input
								type="checkbox"
								name="Upgrade3check"
								id="Upgrade3check"
								onChange={(e) => handleArr(2, "ischecked", e.target.checked)}
							/>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
