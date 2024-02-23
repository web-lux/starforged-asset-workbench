export default function UpgradesTab(props) {
	function handleArr(id, property, value) {
		const newArr = props.form.upgrades.map((upgrade) => {
			if (upgrade.id === id) {
				return { ...upgrade, [property]: value };
			} else {
				return upgrade;
			}
		});
		props.setForm({ ...props.form, upgrades: newArr });
	}

	function handleAddField(id, property, value) {
		const newArr = props.form.additionalFields.map((additionalField) => {
			if (additionalField.id === id) {
				return { ...additionalField, [property]: value };
			} else {
				return additionalField;
			}
		});
		props.setForm({ ...props.form, additionalFields: newArr });
	}

	return (
		<fieldset className={props.tab === "upgrades" ? "upgrades visible" : null}>
			<legend hidden>Upgrades</legend>

			<div className="fieldgroup">
				<div>
					<label htmlFor="Upgrade1">Upgrade 1</label>
					<textarea
						name="Upgrade1"
						id="Upgrade1"
						onChange={(e) => handleArr(0, "text", e.target.value)}></textarea>
				</div>
				<div>
					<label htmlFor="Upgrade1check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade1check"
						id="Upgrade1check"
						defaultChecked="true"
						onChange={(e) => handleArr(0, "ischecked", e.target.checked)}
					/>
				</div>
			</div>

			<div className="fieldgroup">
				<div>
					<label htmlFor="Upgrade2">Upgrade 2</label>
					<textarea
						name="Upgrade2"
						id="Upgrade2"
						onChange={(e) => handleArr(1, "text", e.target.value)}></textarea>
				</div>

				<div>
					<label htmlFor="Upgrade2check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade2check"
						id="Upgrade2check"
						onChange={(e) => handleArr(1, "ischecked", e.target.checked)}
					/>
				</div>
			</div>

			<div className="fieldgroup">
				<div>
					<label htmlFor="Upgrade3">Upgrade 3</label>
					<textarea
						name="Upgrade3"
						id="Upgrade3"
						onChange={(e) => handleArr(2, "text", e.target.value)}></textarea>
				</div>

				<div>
					<label htmlFor="Upgrade3check">Checked ?</label>
					<input
						type="checkbox"
						name="Upgrade3check"
						id="Upgrade3check"
						onChange={(e) => handleArr(2, "ischecked", e.target.checked)}
					/>
				</div>
			</div>
		</fieldset>
	);
}
