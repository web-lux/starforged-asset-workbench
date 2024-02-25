import { useImmer } from "use-immer";
import { placeholderAsset } from "./placeholderAsset.ts";
import Preview from "./components/Preview";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	const [asset, updateAsset] = useImmer(placeholderAsset);

	return (
		<div className="wrapper">
			<div className="main-container">
				<Header />

				<main>
					<Preview asset={asset} />
					<Form updateAsset={updateAsset} />
				</main>
			</div>

			<Footer />
		</div>
	);
}

export default App;
