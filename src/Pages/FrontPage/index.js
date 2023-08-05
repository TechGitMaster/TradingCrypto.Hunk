import React from 'react';
import { Team, BtcCoin, Ethereum } from '../../utilities/PNG';

const FrontPage = ({ clickNavi }) => {
    return (
        <>
            <div>
                <div className='mx-auto max-w-[1200px] px-4 py-[50px] relative top-[100px]'>
                    <div className='md:flex justify-between items-center'>
                        <div className='md:w-[50%]'>
                            <p className='sm:text-[45px] text-[30px] text-white md:w-[95%] md:text-left text-center' style={{ lineHeight: '120%', letterSpacing: '1px' }}>Join the future of algorithm crypto trading strategies.</p>
                            <p className='sm:my-[35px] mt-[20px] mb-[40px] font-bold text-[#F3EE52] sm:text-[18px] text-[14px] md:text-left text-center' style={{ letterSpacing: '1px' }}>Stay Ahead of the Pack with Real-Time Crypto Data</p>
                            
                            <div className='md:block flex justify-center'>
                                <button className='bg-[#F3EE52] py-3 px-2 md:w-[28%] w-[50%] rounded-[30px] font-semibold sm:text-[16px] text-[14px]'
                                onClick={ () => clickNavi(1) }>Check Market</button>
                            </div>
                        </div>
                        <div className='md:w-[50%] max-h-[500px] flex justify-center overflow-hidden relative'>
                            <img src={Team} alt='team' className='sm:max-h-[500px] max-h-[400px] sm:-mt-[100px] -mt-[50px]' />
                            <img src={ BtcCoin } alt='bitcoin' className='sm:h-[90px] h-[70px] z-10 absolute left-0 top-[50px] animate-bounce1' />
                            <img src={ Ethereum } alt='ethereum' className='sm:h-[90px] h-[70px] z-10 absolute top-[70px] sm:left-[85%] left-[80%] animate-bounce2' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrontPage;