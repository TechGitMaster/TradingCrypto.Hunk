import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';
import { MARKET_FETCH } from '../../Redux/Actions';
import { SkeletonMarket } from '../../utilities/SVG';

const CurrentMarket = () => {
    const dispatch = useDispatch();
    const selector = useSelector(a => a.CurrentMarket);

    const [moreStats, setMoreState] = useState(10);

    useEffect(() => {
        dispatch({ type: MARKET_FETCH });
    }, []);
    
    return (
        <>  
            <div className='lg:px-20 px-3 sm:py-[70px] -mt-[50px]'>
                <p className='text-white font-semibold sm:text-[30px] text-[25px] text-center sm:mb-10 mb-5'>Current <span className='text-[#987CFF]'>Market</span></p>

                <div className='overflow-x-auto'>
                    <table className='table-auto lg:w-full sm:w-[1000px] w-[800px]'>
                        <thead className='bg-[#dde057] text-[#1c1b1b] sm:text-[15px] text-[14px]'>
                          <tr>
                            <th className='p-3'>#</th>
                            <th className='text-left'>Coin</th>
                            <th className='text-right'>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th className='text-center'>Total Volume</th>
                            <th className='text-center'>Mkt Cap</th>
                            <th className='text-center'>Last 7 Days</th>
                          </tr>
                        </thead>
                        <tbody className='text-white text-[15px]'>  
                            {
                                selector.loading !== 'load' ?
                                selector.data.slice(0, moreStats).map(a => {

                                    return <tr style={{ borderBottom: '1px solid #2F2F2F' }}>
                                    <td className='p-3'>{ a.market_cap_rank }</td>
                                    <td>
                                        <div className='flex'>
                                            <img src={ a.image } alt='tableF' className='h-[20px] mr-2' />
                                            <p className='text-[15px] font-bold mr-1'>{ a.name }</p>
                                            <p className='text-[11px]'>{ a.symbol.toUpperCase() }</p>
                                        </div>
                                    </td>
                                    <td className='text-right'>
                                        ${ 
                                            parseFloat(a.current_price).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }) 
                                        }
                                    </td>
                                    <td className='text-center' style={{ color: parseFloat(a.price_change_percentage_1h_in_currency) < 0 ? '#EC3232':'green' }}>
                                        { 
                                            parseFloat(a.price_change_percentage_1h_in_currency).toLocaleString(undefined, {
                                                minimumFractionDigits: 1,
                                                maximumFractionDigits: 1,
                                            }) 
                                        }%
                                    </td>
                                    <td className='text-center' style={{ color: parseFloat(a.price_change_percentage_24h_in_currency) < 0 ? '#EC3232':'green' }}>
                                        { 
                                            parseFloat(a.price_change_percentage_24h_in_currency).toLocaleString(undefined, {
                                                minimumFractionDigits: 1,
                                                maximumFractionDigits: 1,
                                            }) 
                                        }%
                                    </td>
                                    <td className='text-center' style={{ color: parseFloat(a.price_change_percentage_7d_in_currency) < 0 ? '#EC3232':'green' }}>
                                        { 
                                            parseFloat(a.price_change_percentage_7d_in_currency).toLocaleString(undefined, {
                                                minimumFractionDigits: 1,
                                                maximumFractionDigits: 1,
                                            }) 
                                        }
                                    </td>
                                    <td className='text-center'>${ parseFloat(a.total_volume).toLocaleString() }</td>
                                    <td className='text-center'>${ parseFloat(a.market_cap).toLocaleString() }</td>
                                    <td>
                                        {
                                            a.sparkline_in_7d !== null ?
                                            <Sparklines data={a.sparkline_in_7d.price} width={100} height={20}>
                                                <SparklinesLine color={ Math.floor(a.price_change_percentage_7d_in_currency) < 0 ? '#EC3232':'green' }  style={{ fill: "none" }} />
                                            </Sparklines>
                                            :
                                            'Not Available'
                                        }
                                        
                                    </td>
                                  </tr>

                                })
                                :
                                '.'.repeat(5).split('').map(() => 
                                    <tr key={ Math.random() }>
                                        <td className='p-3'><SkeletonMarket /></td>
                                        <td className='text-left'><SkeletonMarket /></td>
                                        <td className='text-right'><SkeletonMarket /></td>
                                        <td><SkeletonMarket /></td>
                                        <td><SkeletonMarket /></td>
                                        <td><SkeletonMarket /></td>
                                        <td className='text-center'><SkeletonMarket /></td>
                                        <td className='text-center'><SkeletonMarket /></td>
                                        <td className='text-center'><SkeletonMarket /></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
                        
                <div className='flex justify-center mt-10'>
                    {
                        moreStats !== 100 ?
                        <button className='bg-[#F3EE52] py-3 px-2 md:w-[17%] w-[40%] rounded-[30px] font-semibold md:text-[16px] text-[14px] mr-3' 
                        onClick={() => setMoreState(a => a+10)}>Show More</button> 
                        :
                        ''
                    }

                    {
                        moreStats > 10 ?
                        <button className='bg-[#6e4cec] text-white py-3 md:w-[17%] w-[40%] rounded-[30px] font-semibold md:text-[16px] text-[14px]'
                        onClick={() => setMoreState(10)}>Show less</button>
                        :
                        ''
                    }
                </div>
            </div>
        </>
    );
}

export default CurrentMarket;

