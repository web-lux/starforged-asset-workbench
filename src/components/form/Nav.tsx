export default function Nav({ tab, setTab }) {
	return (
		<nav>
			<ul>
				<li
					onClick={() => {
						setTab("interface");
					}}
					className={tab === "interface" ? "active" : null}>
					Interface
				</li>

				<li
					onClick={() => {
						setTab("upgrades");
					}}
					className={tab === "upgrades" ? "active" : null}>
					Upgrades
				</li>
			</ul>
		</nav>
	);
}
