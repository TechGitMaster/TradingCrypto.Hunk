import React, { useEffect } from 'react';
import { Logo, Burger } from '../../utilities/PNG';
import { Loading } from '../../utilities/SVG';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBAL_FETCH } from '../../Redux/Actions';


const Header = ({navigate, clickNavi, setBurgerCon}) => {
    const dispatch = useDispatch();
    const selector = useSelector(a => a.GlobalData);

    useEffect(() => {
        dispatch({ type: GLOBAL_FETCH, loading: 'load' });
    }, [])

    return (
        <>
        <div className='w-full fixed z-20'>
            <div className='bg-[#191A1E]'>
                <div className='p-4 mx-auto max-w-[1200px] flex justify-between items-center'>
                    <div>
                        <img src={ Logo } alt='logo' className='md:h-[56px] h-[45px]' />
                    </div>
                    <div>
                        <div className='md:block hidden'>
                            <div className='flex items-center'>
                                <div className={`text-[16px] font-semibold cursor-pointer rounded-[20px] py-2 px-4 ${navigate === 0 ? 'bttn_click':'text-white'}`}
                                    onClick={() => clickNavi(0)}>Home</div>
                                <div className={`text-[16px] font-semibold rounded-[20px] px-[33px] py-2 cursor-pointer ${navigate === 1 ? 'bttn_click':'text-white'}`}
                                    onClick={() => clickNavi(1)}>Market</div>
                                <div className={`text-[16px] font-semibold rounded-[20px] px-4 py-2 cursor-pointer ${navigate === 2 ? 'bttn_click':'text-white'}`}
                                    onClick={() => clickNavi(2)}>Community</div>
                            </div>
                        </div>

                        <div className='md:hidden block' onClick={() => setBurgerCon(true)}>
                            <img src={ Burger } alt='burger' className='h-[30px] cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-[#605555] border-b-2 bg-[#121212]'>
                <div className='py-2 px-4 mx-auto max-w-[1200px] md:overflow-hidden overflow-x-scroll text-white'>
                    {
                        selector.loading !== 'load' ? 
                        <div>
                            <div className='flex min-w-[850px]'>
                                <p className='text-[13px] mr-[15px] text-[#e2e2e2]'>Coins: <span className='text-[#F3EE52]'>{ selector.data.active_cryptocurrencies }</span></p>
                                <p className='text-[13px] mr-[15px] text-[#e2e2e2]'>Exchanges: <span className='text-[#F3EE52]'>{ selector.data.markets }</span></p>
                                <p className='text-[13px] mr-[15px] text-[#e2e2e2]'>Market Cap: <span className='text-[#6890fd]'>${ parseFloat(selector.data.total_market_cap.usd).toLocaleString() }</span></p>
                                <p className='text-[13px] mr-[15px] text-[#e2e2e2]'>24h Vol: <span className='text-[#6890fd]'>${ parseFloat(selector.data.total_volume.usd).toLocaleString() }</span></p>
                                <p className='text-[13px] mr-[15px] text-[#e2e2e2]'>Dominance: 
                                    <span className='text-[#F3EE52] mr-2'> BTC { parseFloat(selector.data.market_cap_percentage.btc).toLocaleString(undefined, {
                                                            minimumFractionDigits: 1,
                                                            maximumFractionDigits: 1,
                                                        }) }%</span>
                                    <span className='text-[#F3EE52]'>ETH { parseFloat( selector.data.market_cap_percentage.eth).toLocaleString(undefined, {
                                                            minimumFractionDigits: 1,
                                                            maximumFractionDigits: 1,
                                                        }) }%</span>
                                </p>
                            </div>
                        </div>
                        :
                        <div className='flex items-center'>
                            <div>
                                <p className='text-[13px]'>Fetching Data...</p>
                            </div>
                            <div>
                                <Loading className='w-[35px] h-[25px]' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Header;