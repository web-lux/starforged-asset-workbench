import "./Form.scss";

export default function Form({ form, setForm }) {
	return (
		<div className="form">
			<form>
				<fieldset>
					<legend>Interface</legend>

					<label htmlFor="assetImage">Image</label>
					<input
						type="file"
						name="assetImage"
						id="assetImage"
						accept=".png, .svg, .jpg"
						onChange={(e) => setForm({ ...form, imagePath: e.target.value })}
					/>

					<label htmlFor="assetType">Type (module, path...)</label>
					<select
						name="assetType"
						id="assetType"
						onChange={(e) => setForm({ ...form, type: e.target.value })}
						defaultValue="module"
					>
						<option value="commandVehicle">Command Vehicle</option>
						<option value="module">Module</option>
						<option value="supportVehicle">Support Vehicle</option>
						<option value="path">Path</option>
						<option value="companion">Companion</option>
						<option value="deed">Deed</option>
					</select>
				</fieldset>

				<fieldset>
					<legend>Text fields</legend>

					<label htmlFor="assetTitle">Title</label>
					<input
						type="text"
						name="assetTitle"
						id="assetTitle"
						onChange={(e) => setForm({ ...form, title: e.target.value })}
					/>
				</fieldset>

				<fieldset>
					<legend>Upgrades</legend>
					<label htmlFor="Upgrade1">Upgrade 1</label>
					<textarea
						name="Upgrade1"
						id="Upgrade1"
						cols="30"
						rows="10"
						onChange={(e) => {
							setForm({
								...form,
								upgrades1: {
									...form.upgrades1,
									text: e.target.value,
								},
							});
						}}
					></textarea>

					<label htmlFor="Upgrade1check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade1check"
						id="Upgrade1check"
						defaultChecked="true"
						onChange={(e) =>
							setForm({
								...form,
								upgrades1: {
									...form.upgrades1,
									ischecked: e.target.checked,
								},
							})
						}/>

					<label htmlFor="Upgrade2">Upgrade 2</label>
					<textarea
						name="Upgrade2"
						id="Upgrade2"
						cols="30"
						rows="10"
						onChange={(e) =>
							setForm({
								...form,
								upgrades2: {
									...form.upgrades2,
									text: e.target.value,
								},
							})
						}
					></textarea>

					<label htmlFor="Upgrade2check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade2check"
						id="Upgrade2check"
						onChange={(e) =>
							setForm({
								...form,
								upgrades2: {
									...form.upgrades2,
									ischecked: e.target.checked
								},
							})
						}/>

					<label htmlFor="Upgrade3">Upgrade 3</label>
					<textarea
						name="Upgrade3"
						id="Upgrade3"
						ls="30"
						rows="10"
						onChange={(e) =>
							setForm({
								...form,
								upgrades3: {
									...form.upgrades3,
									text: e.target.value,
								},
							})
						}
					></textarea>

					<label htmlFor="Upgrade3check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade3check"
						id="Upgrade3check"
						onChange={(e) =>
							setForm({
								...form,
								upgrades3: {
									...form.upgrades3,
									ischecked: e.target.checked,
								},
							})
						}
					/>
				</fieldset>
			</form>
		</div>
	);
}
