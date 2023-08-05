import React, { useEffect, useState, useRef } from 'react';
import Header from './Pages/Header';
import FrontPage from './Pages/FrontPage';
import TrendingCoins from './Pages/TrendingCoins';
import CurrentMarket from './Pages/Market/CurrentMarket';
import Community from './Pages/Community';
import BurgerNavigation from './Pages/BurgerNavigation';

const App = () => {
    const [navigate, setNavigate] = useState(0); 
    const [burgerCon, setBurgerCon] = useState(false);

    const refData = [useRef(), useRef(), useRef()];
    

    const clickNavi = (count) => {
        window.scrollTo({ top: refData[count].current.offsetTop, behavior: "smooth" });
        setNavigate(count);
        setBurgerCon(false);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
        <div className='min-h-[100vh] bg-[#121212] select-none'>
            {
                burgerCon ? 
                <div>
                    <BurgerNavigation clickNavi={ clickNavi } setBurgerCon={ setBurgerCon } />
                </div>
                :
                ''
            }

            <div ref={ refData[0] }>
                <Header navigate={ navigate } clickNavi={ clickNavi } setBurgerCon={ setBurgerCon } />
                <FrontPage clickNavi={ clickNavi } />
            </div>
            <div ref={ refData[1] }>
                <TrendingCoins />
                <CurrentMarket />
            </div>
            <div ref={ refData[2] }>
                <Community />
            </div>
        </div>
        </>
    );
}

export default App;