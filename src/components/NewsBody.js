import React, { useEffect, useContext, useState } from 'react';
import NewsContext from '../contextApi/NewsConext'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewsBody() {
    const { categories, setSelectedNews } = useContext(NewsContext);
    const [getNews, setGetNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(12);
    const [totalItems, setTotalItems] = useState(0);
    const totalPages = Math.ceil(totalItems / perPage);
    const navigate = useNavigate();
    

    useEffect(() => {
        async function fetchNews() {
            try {      
                setLoading(true);
                const result = await axios.get(`https://api.worldnewsapi.com/search-news?api-key=${process.env.REACT_APP_NEWSAPI}&text=${categories}&page=${currentPage}&number=${perPage}`);
                
                const filteredData = result.data.news.filter(item => item.author !== null);
                setGetNews(filteredData);
                setTotalItems(result.data.available);
                setLoading(false);
                
            } catch (err) {
                alert('Please reload or wait for some time or this occur due to api search limit');
                console.log(err)
                setLoading(false);
            }
        }

        fetchNews();
    }, [categories, currentPage, perPage]);

//-----------------------------------------pagination----------------------------------------------------------------
    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const newsDetail = (news) => {
        setSelectedNews(news);
        navigate('/NewsDetail');
    }

   
    //------------------------------------word--limit for-----news--text---------------------------------------

    const truncateText = (text, wordLimit) => {
      const words = text.split(' ');
      if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
      }
      return text;
  };

  if (loading) {
    return <h1 style={{ textAlign: 'center' }}>Loading....</h1>;
}


    return (
        <>
            <div className='newsbody'>
            <div >
                <h1>{getNews.length === 0 ? 'No Result Found' : ''}</h1>
                
               
                </div>
                {
                    getNews.map((news, index) => (
                        <div key={index} className='newspart' onClick={() => { newsDetail(news) }}>
                            <h5>{news.title}</h5>
                            <img src={news.image} alt='Unable to Render' />
                            <p >{truncateText(news.text, 20)}....<b style={{color:'blue'}}>see More</b></p>
                            <p>---{truncateText(news.author, 2)}</p>
                        </div>
                    ))
                }
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </>
    )
}

export default NewsBody;
