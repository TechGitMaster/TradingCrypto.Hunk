import { takeEvery, call, put } from 'redux-saga/effects';
import { GLOBAL_FETCH, GLOBAL_SUCCESS, GLOBAL_ERROR, TRENDING_FETCH, TRENDING_SUCCESS, TRENDING_ERROR, MARKET_FETCH, MARKET_SUCCESS, MARKET_ERROR } from '../Actions';
import axios from 'axios';


const objFunc = (link) => {
    return {
        method: 'GET',
        url: link,
        headers:{
            'Content-type': 'application/json'
        }
    }
}


function* GlobalData(){
    try{
        const { data } = yield call(axios, objFunc('https://api.coingecko.com/api/v3/global'));

        yield put({ type: GLOBAL_SUCCESS, data: data.data });
    }catch(e){
        yield put({ type: GLOBAL_ERROR });
    }
}


function* TrendingData(){
    try{
        const { data } = yield call(axios, objFunc('https://api.coingecko.com/api/v3/search/trending'));

        yield put({ type: TRENDING_SUCCESS, coins: data.coins });
    }catch(e){
        yield put({ type: TRENDING_ERROR });
    }
}


function* MarketData(){
    try{
        const { data } = yield call(axios, objFunc('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en'));
    
        yield put({ type: MARKET_SUCCESS, data: data });
    }catch(e){
        yield put({ type: MARKET_ERROR });
    }
}


export function* saga1(){

    yield takeEvery(GLOBAL_FETCH, GlobalData);
    yield takeEvery(TRENDING_FETCH, TrendingData);
    yield takeEvery(MARKET_FETCH, MarketData);

}