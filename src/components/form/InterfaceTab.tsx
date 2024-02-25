import hasUpdateAsset from "../../interfaces/HasUpdateAsset";
import ImagePathInput from "./ImagePathInput";

interface Props extends hasUpdateAsset {
	tab: string;
}

export default function InterfaceTab({ updateAsset, tab }: Props) {
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

	function getAdditionalFieldInputs() {
		let inputs = [];

		for (let i = 0; i < 2; i++) {
			inputs.push(
				<div>
					<label htmlFor="assetAdditionalField1">
						Additional field {i + 1}
					</label>
					<input
						type="checkbox"
						name={`AdditionalFieldCheck${i}`}
						id={`AdditionalFieldCheck${i}`}
						onChange={(e) =>
							updateAsset((draft) => {
								draft.additionalFields[i].isChecked = e.target.checked;
							})
						}
					/>
					<input
						type="text"
						name={`AdditionalFieldField${i}`}
						id={`AdditionalFieldField${i}`}
						onChange={(e) =>
							updateAsset((draft) => {
								draft.additionalFields[i].text = e.target.value;
							})
						}
					/>
				</div>
			);
		}

		return inputs;
	}

	return (
		<fieldset className={tab === "interface" ? "visible" : null}>
			<legend hidden>Interface</legend>

			<div className="fieldgroup">
				<ImagePathInput updateAsset={updateAsset} />

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

			<div className="fieldgroup">{getAdditionalFieldInputs()}</div>
		</fieldset>
	);
}
