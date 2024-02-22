export default function Header() {
	return (
		<header className="main-header">
			<h1>Ironsworn : Starforged Asset Workbench</h1>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%">
					<defs>
						<pattern
							id="pattern_y1crj"
							patternUnits="userSpaceOnUse"
							width="23"
							height="23"
							patternTransform="rotate(45)">
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
					<rect
						width="100%"
						height="100%"
						fill="url(#pattern_y1crj)"
					/>
				</svg>
			</div>
		</header>
	);
}
