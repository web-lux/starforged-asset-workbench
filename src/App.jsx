import { useState } from "react";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { placeholderAsset } from "./assets/placeholderAsset.js";

function App() {
	const [form, setForm] = useState(placeholderAsset);

	return (
		<div className="wrapper">
			<div className="main-container">
				<Header />

				<main>
					<Preview form={form} />
					<Form
						setForm={setForm}
						form={form}
					/>
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
