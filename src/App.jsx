import { useState } from 'react';
import Preview from './components/Preview.jsx';
import Form from './components/Form.jsx'

function App() {
  const [form, setForm] = useState({
		title: 'Title',
		type: 'module',
		imagePath: 'src/assets/owl.svg',
		upgrades1: {
				ischecked: true,
				text: `Your vehicle’s finely-tuned engines speed your travels. When you Undertake an Expedition (+edge) and score a strong hit, take +1 momentum; on a strong hit with a 6 on your action die, take +2 momentum instead of +1.`
			},
			upgrades2: {
				ischecked: false,
        text: `When you Enter the Fray, choose one (before rolling). 
        * Maneuver: Add +1 and take +1 momentum on a strong hit. 
        * Boost: Take +2 momentum on a hit.`
			},
			upgrades3: {
				ischecked: false,
				text: `When you make a desperate move to pursue a foe, escape a threat, or get in range, you may push your engines to their limit. If you do (decide after rolling), reroll any dice and count a weak hit as a strong hit. Then, Withstand Damage (-2).`
			}
	})


  return (
    <div className="wrapper">
      <header>
        <h1>Ironsworn : Starforged Asset Workbench</h1>
      </header>

      <main>
        <Preview form={form} />
        <Form setForm={setForm} form={form} />
      </main>

      <footer>Created by <a href="https://web-lux.fr/">web-lux</a>. For <a href="https://www.ironswornrpg.com/">Ironsworn : Starforged</a> by Shawn Tomkin.</footer>
    </div>
  )
}

export default App
