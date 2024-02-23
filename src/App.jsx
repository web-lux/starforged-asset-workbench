import Preview from "./components/Preview.tsx";
import Form from "./components/Form.tsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { placeholderAsset } from "./components/placeholderAsset.ts";
import { useImmer } from "use-immer";

function App() {
	const [asset, updateAsset] = useImmer(placeholderAsset);

	return (
		<div className="wrapper">
			<div className="main-container">
				<Header />

				<main>
					<Preview asset={asset} />
					<Form
						updateAsset={updateAsset}
						asset={asset}
					/>
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
