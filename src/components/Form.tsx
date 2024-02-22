import { useState } from "react";
import "./Form.scss";
import Asset from "../interfaces/Asset";

export default function Form({
	form,
	setForm,
}: {
	form: Asset;
	setForm: React.Dispatch<React.SetStateAction<Asset>>;
}) {
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

	function handleAddField(id, property, value) {
		const newArr = form.additionalFields.map((additionalField) => {
			if (additionalField.id === id) {
				return { ...additionalField, [property]: value };
			} else {
				return additionalField;
			}
		});
		setForm({ ...form, additionalFields: newArr });
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

	const [tab, setTab] = useState("interface");

	return (
		<div className="form">
			<form>
				<nav>
					<ul>
						<li
							onClick={(e) => {
								setTab("interface");
							}}
							className={tab === "interface" ? "active" : null}>
							Interface
						</li>

						<li
							onClick={(e) => {
								setTab("upgrades");
							}}
							className={tab === "upgrades" ? "active" : null}>
							Upgrades
						</li>
					</ul>
				</nav>

				<fieldset className={tab === "interface" ? "visible" : null}>
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
									setForm({
										...form,
										image: {
											...form.image,
											size: Number(e.target.value),
										},
									});
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
								defaultValue="module">
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
								onChange={(e) =>
									setForm({ ...form, description: e.target.value })
								}
							/>
						</div>
						<div>
							<label htmlFor="assetTrack">Track</label>
							<input
								type="checkbox"
								name="AssetTrackCheck"
								id="AssetTrackCheck"
								onChange={(e) =>
									setForm({
										...form,
										track: {
											...form.track,
											isChecked: e.target.checked,
										},
									})
								}
							/>
							<input
								type="number"
								name="assetTrack"
								id="assetTrack"
								min="1"
								max="6"
								onChange={(e) =>
									setForm({
										...form,
										track: {
											...form.track,
											maxNumber: Number(e.target.value),
										},
									})
								}
							/>
						</div>
					</div>

					<div className="fieldgroup">
						<div>
							<label htmlFor="assetAdditionalField1">Additional field 1</label>
							<input
								type="checkbox"
								name="AdditionalFieldCheck1"
								id="AdditionalFieldCheck1"
								onChange={(e) =>
									handleAddField(0, "hasAdditionalField", e.target.checked)
								}
							/>
							<input
								type="text"
								name="assetAdditionalField1"
								id="assetAdditionalField1"
								onChange={(e) => handleAddField(0, "text", e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="assetAdditionalField2">Additional field 2</label>
							<input
								type="checkbox"
								name="AdditionalFieldCheck2"
								id="AdditionalFieldCheck2"
								onChange={(e) =>
									handleAddField(1, "hasAdditionalField", e.target.checked)
								}
							/>
							<input
								type="text"
								name="assetAdditionalField2"
								id="assetAdditionalField2"
								onChange={(e) => handleAddField(1, "text", e.target.value)}
							/>
						</div>
					</div>
					<div></div>
				</fieldset>

				<fieldset className={tab === "upgrades" ? "upgrades visible" : null}>
					<legend hidden>Upgrades</legend>

					<div className="fieldgroup">
						<div>
							<label htmlFor="Upgrade1">Upgrade 1</label>
							<textarea
								name="Upgrade1"
								id="Upgrade1"
								onChange={(e) =>
									handleArr(0, "text", e.target.value)
								}></textarea>
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
								onChange={(e) =>
									handleArr(1, "text", e.target.value)
								}></textarea>
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
								onChange={(e) =>
									handleArr(2, "text", e.target.value)
								}></textarea>
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
