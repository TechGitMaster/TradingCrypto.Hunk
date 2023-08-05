import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BitCoin, Circle1, Circle2, Circle3 } from '../../utilities/PNG';
import { SkeletonLoading } from '../../utilities/SVG';
import { TRENDING_FETCH } from '../../Redux/Actions';

const TrendingCoins = () => {
    const dispatch = useDispatch();
    const selector = useSelector(a => a.TrendingCoin);

    useEffect(() => {
        dispatch({ type: TRENDING_FETCH });
    }, []);


     return (
        <>
        <div className='mx-auto max-w-[1200px] py-[110px] px-3'>
            <p className='text-white font-semibold sm:text-[30px] text-[25px] text-center'>Top-6 <span className='text-[#987CFF]'>Trending Coins</span></p>
            <div className='w-full flex justify-center sm:mb-[100px] mb-[70px]'>
                <p className='sm:w-[60%] w-[100%] text-white sm:text-[17px] text-[15px] text-center'>Top-6 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first).</p>
            </div>

            <div className='sm:block hidden'>
                <div className='flex items-center justify-center'>
                    <div className='w-[29%] flex justify-end '>
                        <div>
                            {
                                selector.loading !== 'load' ?
                                selector.coins.slice(0, 3).map((a, i) => 
                                <div className='flex' style={{ marginBottom: i === 2 ? '0px':'80px' }}>
                                    <div>
                                        <img src={ a.item.large } alt='logoCoin' className='h-[32px]' />
                                    </div>
                                    <div className='text-white ml-4 -mt-[5px]'>
                                        <p className='text-[24px] font-bold'>{ a.item.name }</p>
                                        <p>MKT Cap Rank: { a.item.market_cap_rank }</p>
                                    </div>
                                </div>)
                                :
                                '.'.repeat(3).split('').map((a, i) => 
                                <div className='flex'>
                                    <SkeletonLoading className='h-[120px]' />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className='w-[43%] flex justify-center items-center relative'>
                        <img src={ BitCoin } alt='bitcoinHand' className='h-[450px]' />
                        <img src={ Circle1 } alt='bitcoinHand' className='absolute z-10 top-[10%] left-[13%] animate-circle1' />
                        <img src={ Circle2 } alt='bitcoinHand' className='absolute z-10 top-[72%] left-[79%] animate-circle2' />
                        <img src={ Circle3 } alt='bitcoinHand' className='absolute z-10 top-[80%] left-[15%] animate-circle3' />
                    </div>

                    <div className='w-[28%] flex'>
                        <div>
                            {
                                selector.loading !== 'load' ?
                                selector.coins.slice(3, 6).map((a, i) => 
                                <div className='flex' style={{ marginBottom: i === 2 ? '0px':'80px' }}>
                                    <div>
                                        <img src={ a.item.large } alt='logoCoin' className='h-[32px]' />
                                    </div>
                                    <div className='text-white ml-4 -mt-[5px]'>
                                        <p className='text-[24px] font-bold'>{ a.item.name }</p>
                                        <p>MKT Cap Rank: { a.item.market_cap_rank }</p>
                                    </div>
                                </div>)
                                :
                                '.'.repeat(3).split('').map((a, i) => 
                                <div key={ Math.random() } className='flex'>
                                    <SkeletonLoading className='h-[120px]' />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:hidden block'>
                <div className='grid grid-cols-2'>
                {
                    selector.loading !== 'load' ?
                    selector.coins.slice(0, 6).map((a, i) => 
                    <div className='flex justify-center mb-[80px]'>
                        <div>
                            <img src={ a.item.large } alt='logoCoin' className='h-[25px]' />
                        </div>
                        <div className='text-white ml-4 -mt-[5px]'>
                            <p className='text-[18px] font-bold'>{ a.item.name }</p>
                            <p className='text-[14px]'>MKT Cap Rank: { a.item.market_cap_rank }</p>
                        </div>
                    </div>)
                    :
                    '.'.repeat(3).split('').map((a, i) => 
                    <div key={ Math.random() } className='flex'>
                        <SkeletonLoading className='h-[120px]' />
                    </div>)
                }
                </div>

                <div className='flex justify-center items-center relative -top-[30px]'>
                    <img src={ BitCoin } alt='bitcoinHand' className='h-[300px]' />
                    <img src={ Circle1 } alt='bitcoinHand' className='h-[20px] absolute z-10 top-[10%] left-[13%] animate-circle1' />
                    <img src={ Circle2 } alt='bitcoinHand' className='h-[30px] absolute z-10 top-[72%] left-[79%] animate-circle2' />
                    <img src={ Circle3 } alt='bitcoinHand' className='h-[40px] absolute z-10 top-[80%] left-[15%] animate-circle3' />
                </div>
            </div>

        </div>
        </>
    );
}

export default TrendingCoins;