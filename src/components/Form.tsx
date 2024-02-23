import { useState } from "react";
import "./Form.scss";
import Asset from "../interfaces/Asset";
import Nav from "./form/Nav";
import InterfaceTab from "./form/InterfaceTab";

interface Props {
	form: Asset;
	setForm: React.Dispatch<React.SetStateAction<Asset>>;
}

export default function Form({ form, setForm }: Props) {
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
				<Nav
					tab={tab}
					setTab={setTab}
				/>
				<InterfaceTab
					form={form}
					setForm={setForm}
					tab={tab}
				/>

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
