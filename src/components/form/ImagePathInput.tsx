import hasUpdateAsset from "../../interfaces/HasUpdateAsset";

export default function ImagePathInput({ updateAsset }: hasUpdateAsset) {
	return (
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
	);
}
