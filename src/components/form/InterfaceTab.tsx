export default function InterfaceTab(props) {
	return (
		<fieldset className={props.tab === "interface" ? "visible" : null}>
			<legend hidden>Interface</legend>

			<div className="fieldgroup">
				<div>
					<label htmlFor="assetImage">Image url</label>
					<input
						type="text"
						name="assetImage"
						id="assetImage"
						onChange={(e) => {
							props.setForm({
								...props.form,
								image: { ...props.form.image, path: e.target.value },
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
							props.setForm({
								...props.form,
								image: { ...props.form.image, size: Number(e.target.value) },
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
						onChange={(e) =>
							props.setForm({ ...props.form, title: e.target.value })
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
							props.setForm({ ...props.form, description: e.target.value })
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
							props.setForm({
								...props.form,
								track: { ...props.form.track, isChecked: e.target.checked },
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
							props.setForm({
								...props.form,
								track: {
									...props.form.track,
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
	);
}
