import React from 'react';
import { Logo, RocketGIF } from '../../utilities/PNG';

const BurgerNavigation = ({ clickNavi, setBurgerCon }) => {

    return (
    <>
        <div className='fixed h-[100vh] w-full bg-[#191A1E] z-30 p-5'>
            
            <div className='flex justify-between items-center mb-10'>
                <img src={ Logo } alt='logo' className='max-h-[50px]' />
                <p onClick={ () => setBurgerCon(false) } className='text-white text-[25px] font-bold cursor-pointer'>X</p>
            </div>

            <div>
                <p onClick={() => clickNavi(0)}  className='px-2 py-3 text-white text-[15px] cursor-pointer' style={{ borderBottom: '2px solid #605555', borderTop: '2px solid #605555' }}>Home</p>
                <p onClick={() => clickNavi(1)} className='px-2 py-3 text-white text-[15px] cursor-pointer' style={{ borderBottom: '2px solid #605555' }}>Market</p>
                <p onClick={() => clickNavi(2)} className='px-2 py-3 text-white text-[15px] cursor-pointer' style={{ borderBottom: '2px solid #605555' }}>Community</p>
            </div>

            <div className='flex justify-center'>
                <img src={ RocketGIF } alt='rocket' className='h-[250px]' />
            </div>
            <p className='text-[#E6E14F] text-center sm:text-[15px] text-[13px] -mt-[60px]'>Powered by CoinGecko</p>
        </div>
    </>
    );
}

export default BurgerNavigation;