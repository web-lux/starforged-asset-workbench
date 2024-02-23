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
