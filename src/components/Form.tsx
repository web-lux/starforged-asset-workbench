import { useState } from "react";
import "./Form.scss";
import Asset from "../interfaces/Asset";
import Nav from "./form/Nav";
import InterfaceTab from "./form/InterfaceTab";
import UpgradesTab from "./form/UpgradesTab";

interface Props {
	form: Asset;
	setForm: React.Dispatch<React.SetStateAction<Asset>>;
}

export default function Form({ form, setForm }: Props) {
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

				<UpgradesTab
					form={form}
					setForm={setForm}
					tab={tab}
				/>
			</form>
		</div>
	);
}
