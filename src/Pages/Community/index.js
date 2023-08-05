import React from 'react';
import { BtcCoin, Ethereum, RocketGIF, Astro, Facebook, Discord, Youtube, Twitter } from '../../utilities/PNG';

const Community = () => {
    return (
        <>
        <div className='relative overflow-hidden md:py-[0px] py-[60px]'>
            <div className='flex justify-center pt-[50px] pb-[60px]'>
                <div className='relative'>
                    <div className='flex justify-center'>
                        <p className='md:text-[70px] sm:text-[60px] text-[40px] w-[80%] text-white font-bold textCommunity text-center' style={{ lineHeight: '145%', letterSpacing: '1px' }}>JOIN TO OUR <span className='text-[#987CFF]'>Community</span></p>
                    </div>

                    <img src={ BtcCoin } alt='icon' className='md:h-[85px] h-[50px] animate-bounce2 absolute sm:top-[15%] top-[10%] sm:left-[9%] left-[3%]' />
                    <img src={ Ethereum } alt='icon' className='md:h-[85px] h-[50px] animate-bounce1 absolute sm:top-[15%] top-[10%] sm:left-[80%] left-[85%]' />

                    <p className='mt-5 md:text-[20px] text-[16px] text-white text-center'>Invest and manage all your crypto at one place</p>

                    <div className='flex justify-center items-center my-[40px]'>
                        <img src={ Youtube } alt='media' className='sm:h-[40px] h-[35px] mr-4 cursor-pointer' />
                        <img src={ Facebook } alt='media' className='sm:h-[35px] h-[30px] mr-4 cursor-pointer' />
                        <img src={ Discord } alt='media' className='sm:h-[40px] h-[35px] mr-4 cursor-pointer' />
                    </div>

                    <div className='flex justify-center'>
                        <button className='md:text-[18px] text-[15px] font-semibold rounded-[30px] py-3 md:w-[30%] w-[70%] bg-[#F3EE52]'>Join via Discord</button>
                    </div>

                    <div className='mt-[80px]'>
                        <p className='sm:text-[18px] text-[15px] text-white text-center'>Trading Crypto.Hunk <span className='text-[#E6E14F]'>2023-2024</span></p>
                        <p className='text-[#E6E14F] text-center sm:text-[15px] text-[13px]'>Powered by CoinGecko</p>
                    </div>
                    
                </div>
            </div>

            <img src={ Astro } alt='media' className='md:h-[250px] h-[200px] absolute lg:left-[12%] sm:left-[5%] left-[-5%] md:bottom-[8%] sm:bottom-[0%] bottom-[-10%] rotate-[25deg]' />
            <img src={ RocketGIF } alt='media' className='md:h-[320px] h-[250px] absolute sm:left-[70%] left-[60%] md:bottom-[10%] sm:bottom-[-2%] bottom-[-10%] rotate-[-25deg]' />
        </div>
        </>
    );
}

export default Community; 