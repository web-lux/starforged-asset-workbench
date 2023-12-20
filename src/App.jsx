import { useState } from "react";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form.jsx";
import { placeholderAsset } from "./assets/placeholderAsset.js"

function App() {

	const [form, setForm] = useState(placeholderAsset);

	return (
		<div className="wrapper">
			<div className="main-container">
				<header className="main-header">
					<h1>Ironsworn : Starforged Asset Workbench</h1>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
							<defs>
								<pattern
									id="pattern_y1crj"
									patternUnits="userSpaceOnUse"
									width="23"
									height="23"
									patternTransform="rotate(45)"
								>
									<line
										x1="0"
										y="0"
										x2="0"
										y2="23"
										stroke="#DBE0E8"
										strokeWidth="28"
									/>
								</pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#pattern_y1crj)" />
						</svg>
					</div>
				</header>

				<main>
					<Preview form={form} />
					<Form setForm={setForm} form={form} />
				</main>
			</div>

			<footer>
				<span>
					Created by <a href="https://github.com/web-lux">web-lux</a>. With help from <a href="https://github.com/elodie-28">elodie-28</a>. For{" "}
					<a href="https://www.ironswornrpg.com/">Ironsworn: Starforged</a> by
					Shawn Tomkin.
				</span>
			</footer>
		</div>
	);
}

export default App;
