import { useImmer } from 'use-immer';
import { AssetContext, UpdateAssetContext } from 'src/services/AssetContext.js';
import { placeholderAsset } from 'src/assets/data/placeholderAsset.ts';
import Header from 'src/components/Header';
import Preview from 'src/components/Preview';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';

function App() {
    const [asset, updateAsset] = useImmer(placeholderAsset);

    return (
        <div className="wrapper">
            <div className="main-container">
                <Header />

                <main>
                    <AssetContext.Provider value={asset}>
                        <Preview />
                    </AssetContext.Provider>

                    <AssetContext.Provider value={asset}>
                        <UpdateAssetContext.Provider value={updateAsset}>
                            <Form />
                        </UpdateAssetContext.Provider>
                    </AssetContext.Provider>
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default App;
