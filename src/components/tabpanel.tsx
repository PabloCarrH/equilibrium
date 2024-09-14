import React, { useState } from 'react';
import SPA from '../views/spa.tsx';
import Salud from '../views/salud.tsx';
import Geriatrico from '../views/geriatrico.tsx';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('spa');
    const setTab = (tab: string) => {
        setActiveTab(tab);
    }
    return (
        <div className='relative flex flex-col w-5/6 max-sm:w-full h-5/6 mb-2'>
            <nav className='relative top-0 left-0 w-full h-fit'>
                <ul className='flex w-full h-max justify-evenly items-center'>
                    <li className={`transition-colors ${activeTab == "spa" ? "btn-tab-selected":"btn-tab"}`} onClick={() => setTab("spa")}>SPA</li>
                    <li className={`transition-colors ${activeTab == "salud" ? "btn-tab-selected":"btn-tab"}`} onClick={() => setTab("salud")}>Salud</li>
                    <li className={`transition-colors ${activeTab == "geriatrico" ? "btn-tab-selected":"btn-tab"}`} onClick={() => setTab("geriatrico")}>Geriatrico</li>
                </ul>
            </nav>
            <div className='flex-grow items-center justify-center flex'>
                {activeTab === 'spa' && <SPA />}
                {activeTab === 'salud' && <Salud />}
                {activeTab === 'geriatrico' && <Geriatrico />}
            </div>
        </div>
    );
}

export default Tabs;