import { useState } from "react";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form.jsx";

function App() {
	const [form, setForm] = useState({
		title: "Title",
		type: {
			name: "Module",
			className: "module",
		},
		image: {
			path: "https://i.imgur.com/ZcnuoVg.png",
			size: "100%",
		},
		upgrades: [
			{
				id: 0,
				ischecked: true,
				text: `Your vehicle’s finely-tuned engines speed your travels. When you Undertake an Expedition (+edge) and score a strong hit, take +1 momentum; on a strong hit with a 6 on your action die, take +2 momentum instead of +1.`,
			},
			{
				id: 1,
				ischecked: false,
				text: `When you Enter the Fray, choose one (before rolling). 
        * Maneuver: Add +1 and take +1 momentum on a strong hit. 
        * Boost: Take +2 momentum on a hit.`,
			},
			{
				id: 2,
				ischecked: false,
				text: `When you make a desperate move to pursue a foe, escape a threat, or get in range, you may push your engines to their limit. If you do (decide after rolling), reroll any dice and count a weak hit as a strong hit. Then, Withstand Damage (-2).`,
			},
		],
	});

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
					Created by <a href="https://web-lux.fr/">web-lux</a>. For{" "}
					<a href="https://www.ironswornrpg.com/">Ironsworn : Starforged</a> by
					Shawn Tomkin.
				</span>
			</footer>
		</div>
	);
}

export default App;
