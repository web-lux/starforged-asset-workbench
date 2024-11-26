import { useState } from 'react';
import Nav from './form/Nav';
import InterfaceTab from './form/InterfaceTab';
import UpgradesTab from './form/UpgradesTab';

export default function Form() {
    const [tab, setTab] = useState('interface');

    return (
        <div className="form">
            <form>
                <Nav
                    tab={tab}
                    setTab={setTab}
                />

                <InterfaceTab tab={tab} />

                <UpgradesTab tab={tab} />
            </form>
        </div>
    );
}
