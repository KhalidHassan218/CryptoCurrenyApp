import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";



const headers =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '33a334bf16msh0c994c53b479cc8p1fb249jsn7157b7df789a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url,headers:headers})

  export const newsApi = createApi({
reducerPath:'newsApi',
baseQuery:fetchBaseQuery({baseUrl}),
endpoints:(builder) => ({
    getNews : builder.query({
        query:({newsCategory , count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=OFF&textFormat=Raw&freshness=Day&count=${count}`)
    })
})


  })




  export const{
    useGetNewsQuery
}=newsApi