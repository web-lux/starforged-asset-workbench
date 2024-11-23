import { Updater } from "use-immer";
import Asset from "./Asset";

export default interface hasUpdateAsset {
	updateAsset: Updater<Asset>;
}
