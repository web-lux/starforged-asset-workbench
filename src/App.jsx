import { useState } from "react";
import Preview from "./components/Preview.jsx";
import Form from "./components/Form.tsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { placeholderAsset } from "./components/placeholderAsset.ts";

function App() {
	const [asset, setAsset] = useState(placeholderAsset);

	return (
		<div className="wrapper">
			<div className="main-container">
				<Header />

				<main>
					<Preview form={asset} />
					<Form
						setAsset={setAsset}
						asset={asset}
					/>
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
