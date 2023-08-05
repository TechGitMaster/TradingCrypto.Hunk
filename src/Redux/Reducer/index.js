import { GLOBAL_SUCCESS, GLOBAL_ERROR, TRENDING_SUCCESS, TRENDING_ERROR, MARKET_SUCCESS, MARKET_ERROR } from '../Actions/index';
import GlobalDataJson from '../../tempo/Global data.json';
import TrendingCoins from '../../tempo/Trending coins.json';
import CoinMarket from '../../tempo/coinMarkets.json';

export const GlobalData = (state = { data: {}, loading: 'load' }, action) => {
    switch(action.type){
        case GLOBAL_SUCCESS:
            return { ...state, data: action.data, loading: 'suc' }
        case GLOBAL_ERROR:
            return { ...state, data: Object.entries(state.data).length === 0 ? GlobalDataJson.data: state.data, loading: 'err' }
        default:
            return state
    }
}

export const TrendingCoin = (state = { coins: [], loading: 'load' }, action) => {
    switch(action.type){
        case TRENDING_SUCCESS:
            return { ...state, coins: action.coins, loading: 'suc' }
        case TRENDING_ERROR:
            return { ...state, coins: state.coins.length === 0 ? TrendingCoins.coins: state.coins, loading: 'err' }
        default:
            return state
    }
}

export const CurrentMarket = (state = { data:[], loading: 'load' }, action) => {
    switch(action.type){
        case MARKET_SUCCESS:
            return { ...state, data: action.data, loading: 'suc' }
        case MARKET_ERROR:
            return { ...state, data: state.data.length === 0 ? CoinMarket: state.data, loading: 'err'}
        default:
            return state
    }
}