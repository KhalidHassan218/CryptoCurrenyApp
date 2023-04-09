import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-key':'9d47756221msh89d5eb71fa69b9cp18963bjsn4e97fa10286c',

}
const baseUrl =   'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
reducerPath:'cryptoApi',
baseQuery: fetchBaseQuery({baseUrl}),
endpoints:(builder) => ({
    getCryptos : builder.query({
        query:(count) => createRequest(`/coins?limit=${count}`)
    }),
    // getExchanges : builder.query({
    //     query:() => createRequest(`/exchanges`)
    // }),
    getCryptoDetails: builder.query({

        query:(coinId)=> createRequest(`/coin/${coinId}`)
    })
    ,
    getCryptoHistory: builder.query({

        query:({coinId , timePeriod })=> createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
    })
})


})



export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    // useGetExchangesQuery
}=cryptoApi


// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '9d47756221msh89d5eb71fa69b9cp18963bjsn4e97fa10286c',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };