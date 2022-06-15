import '../style/News.css'

//props
const NewsItem = ({ title, description, url, urlToImage }) => {
    return ( 
        <div className="news-page">
        <div className="news-item">
        <h3>Your local breaking news</h3>
            <img className="news-img" src={urlToImage} alt={url} />
            <h3><a href = {url}>{title}</a></h3>
            <p>{description}</p>
        </div>
        </div>
    );
}

export default NewsItem;