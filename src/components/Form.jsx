/* 
- Par défaut, 3 perks avec du texte pré-écrit et modifiable
- Le "**" se fait transformer en <u>
- Le * en li custom

Perk 1, 2, 3 en textarea
*/

import "./Form.scss";

export default function Form() {
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
					/>

					<label htmlFor="assetType">Type (module, path...)</label>
					<select name="assetType" id="assetType">
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
					<input type="text" name="assetTitle" id="assetTitle" />
				</fieldset>

				<fieldset>
					<legend>Upgrades</legend>
					<label htmlFor="Upgrade1">Upgrade 1</label>
					<textarea
						name="Upgrade1"
						id="Upgrade1"
						cols="30"
						rows="10"
					></textarea>
					<label htmlFor="Upgrade2">Upgrade 2</label>
					<textarea
						name="Upgrade2"
						id="Upgrade2"
						cols="30"
						rows="10"
					></textarea>
					<label htmlFor="Upgrade3">Upgrade 3</label>
					<textarea
						name="Upgrade3"
						id="Upgrade3"
						cols="30"
						rows="10"
					></textarea>
				</fieldset>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
