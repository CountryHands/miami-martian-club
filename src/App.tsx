import React, {useRef} from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import './App.css';

import NavElem from './components/navElem/NavElem.component';
import Home from './components/home/Home.component';
import SocialSide from './components/socialSide/SocialSide.component';
import Footer from './components/footer/Footer.component';

function App() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const howToRef = useRef<HTMLDivElement>(null);
    const roadMapRef = useRef<HTMLDivElement>(null);
    const buyMartianRef = useRef<HTMLDivElement>(null);
    const aboutDaoRef = useRef<HTMLDivElement>(null);
    return (
        <>
        <NavElem
            aboutRef={aboutRef}
            howToRef={howToRef}
            roadMapRef={roadMapRef}
            buyMartianRef={buyMartianRef}
            aboutDaoRef={aboutDaoRef}
        />
        <Routes>
            <Route index element={
                <Home
                    aboutRef={aboutRef}
                    howToRef={howToRef}
                    roadMapRef={roadMapRef}
                    buyMartianRef={buyMartianRef}
                    aboutDaoRef={aboutDaoRef}
                />
            }/>
        </Routes>
        <SocialSide />
        <Footer />
    </>
    );
}

export default App;
