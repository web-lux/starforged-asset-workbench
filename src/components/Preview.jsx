import "./Preview.scss";
import icon from "../assets/owl.svg";

export default function Preview() {
    return (
        <section className="asset-preview">

            <header>

                <div className="title-container">
                    <span className="asset-type">Module</span>
                    <span className="asset-title">Title</span>
                </div>

                <div className="clip icon-container">
                    <div className="clip icon">
                        <img src={icon} />
                        <svg xmlns="http://www.w3.org/2000/svg" height="0" width="0">
                            <clipPath id="svg-hex" clipPathUnits="objectBoundingBox">
                                <path
                                    d="M0.501,0 L1,0.25 V0.75 L0.501,1 L0.001,0.75 L0.001,0.25 L0.501,0"
                                />
                            </clipPath>
                        </svg>
                    </div>
                </div>

            </header>

            <ul className="description">
            <li className="checked">
					Your vehicle’s finely-tuned engines speed your travels. When you
					Undertake an Expedition (+edge) and score a strong hit, take +1
					momentum; on a strong hit with a 6 on your action die, take +2
					momentum instead of +1.
				</li>
				<li>
					When you Enter the Fray, choose one (before rolling).
					<ul>
						<li>Maneuver: Add +1 and take +1 momentum on a strong hit.</li>
						<li>Boost: Take +2 momentum on a hit.</li>
					</ul>
				</li>
				<li>
					When you make a desperate move to pursue a foe, escape a threat, or
					get in range, you may push your engines to their limit. If you do
					(decide after rolling), reroll any dice and count a weak hit as a
					strong hit. Then, Withstand Damage (-2).
				</li>
            </ul>

        </section>
    )
}
