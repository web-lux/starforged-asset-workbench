import { useState } from "react";
import "./Form.scss";
import Asset from "../interfaces/Asset";
import Nav from "./form/Nav";
import InterfaceTab from "./form/InterfaceTab";
import UpgradesTab from "./form/UpgradesTab";

export default function Form({ asset, updateAsset }) {
	const [tab, setTab] = useState("interface");

	return (
		<div className="form">
			<form>
				<Nav
					tab={tab}
					setTab={setTab}
				/>
				<InterfaceTab
					asset={asset}
					updateAsset={updateAsset}
					tab={tab}
				/>

				<UpgradesTab
					updateAsset={updateAsset}
					tab={tab}
				/>
			</form>
		</div>
	);
}
