import { useImmer } from 'use-immer';
import { AssetContext, UpdateAssetContext } from 'src/services/AssetContext.js';
import { placeholderAsset } from 'src/assets/data/placeholderAsset.ts';
import Header from 'src/components/Header';
import Preview from 'src/components/Preview';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';
import { useEffect } from 'react';

function App() {
    const [asset, updateAsset] = useImmer(loadFromLocalStorage());

    function loadFromLocalStorage() {
        const currentAsset = localStorage.getItem('currentAsset');
        if (currentAsset) {
            return JSON.parse(currentAsset);
        }
        return placeholderAsset;
    }

    useEffect(() => {
        function saveToLocalStorage() {
            localStorage.setItem('currentAsset', JSON.stringify(asset));
        }

        window.addEventListener('beforeunload', saveToLocalStorage);

        return () => {
            window.removeEventListener('beforeunload', saveToLocalStorage);
        };
    }, [asset]);

    return (
        <div className="wrapper">
            <div className="main-container">
                <Header />

                <main>
                    <AssetContext.Provider value={asset}>
                        <UpdateAssetContext.Provider value={updateAsset}>
                            <Preview />
                        </UpdateAssetContext.Provider>
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
