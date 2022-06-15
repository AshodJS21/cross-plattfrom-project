import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem  from './NewsItem'
import '../style/News.css'



// https://newsapi.org/v2/top-headlines?country=us&apiKey=          *curented breaking news
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=    *BBC News

const NewsList = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        //fetching the data
        // async await segment                                                                      
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=se&apiKey=${process.env.REACT_APP_API_Key}`)  
            //console.log(response)
            //accesing to the data articles
            setArticles(response.data.articles)
        }
        getArticles()
        
    }, [])


    return ( 
        //calling data, and updating the value
        <div className="newslist-page"> 
            {articles.map(article => {
                return (
                    < NewsItem
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    );
}

export default NewsList;