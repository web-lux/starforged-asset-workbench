import { Updater } from "use-immer";
import Asset from "../../interfaces/Asset";

interface Props {
	asset: Asset;
	updateAsset: Updater<Asset>;
	tab: string;
}

export default function InterfaceTab({ asset, updateAsset, tab }: Props) {
	const possibleTypes = [
		"Command Vehicle",
		"Module",
		"Support Vehicle",
		"Path",
		"Companion",
		"Deed",
	];

	const typeOptions = possibleTypes.map((type) => (
		<option value={type}>{type}</option>
	));

	return (
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
							updateAsset((draft) => {
								draft.image.path = e.target.value;
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
							updateAsset((draft) => {
								draft.image.size = Number(e.target.value);
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
						defaultValue={possibleTypes[1]}
						onChange={(e) =>
							updateAsset((draft) => {
								draft.type = e.target.value;
							})
						}>
						{typeOptions}
					</select>
				</div>

				<div>
					<label htmlFor="assetTitle">Title</label>
					<input
						type="text"
						name="assetTitle"
						id="assetTitle"
						onChange={(e) =>
							updateAsset((draft) => {
								draft.title = e.target.value;
							})
						}
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
							updateAsset((draft) => {
								draft.description = e.target.value;
							})
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
							updateAsset((draft) => {
								draft.track.isChecked = e.target.checked;
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
							updateAsset((draft) => {
								draft.track.maxNumber = Number(e.target.value);
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
							updateAsset((draft) => {
								draft.additionalFields[0].isChecked = e.target.checked;
							})
						}
					/>
					<input
						type="text"
						name="assetAdditionalField1"
						id="assetAdditionalField1"
						onChange={(e) =>
							updateAsset((draft) => {
								draft.additionalFields[0].text = e.target.value;
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="assetAdditionalField2">Additional field 2</label>
					<input
						type="checkbox"
						name="AdditionalFieldCheck2"
						id="AdditionalFieldCheck2"
						onChange={(e) =>
							updateAsset((draft) => {
								draft.additionalFields[1].isChecked = e.target.checked;
							})
						}
					/>
					<input
						type="text"
						name="assetAdditionalField2"
						id="assetAdditionalField2"
						onChange={(e) =>
							updateAsset((draft) => {
								draft.additionalFields[1].text = e.target.value;
							})
						}
					/>
				</div>
			</div>
			<div></div>
		</fieldset>
	);
}
