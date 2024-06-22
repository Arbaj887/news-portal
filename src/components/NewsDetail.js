import React,{useContext,useEffect} from 'react'
import NewsContext from '../contextApi/NewsConext'
import { useNavigate } from 'react-router-dom'

function NewsDetail() {
     
    const {selectedNews }= useContext(NewsContext)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (selectedNews === null) {
            navigate('/');
        }
    }, [selectedNews, navigate]);

    if (!selectedNews) {
        return null;
    }
  return (
    <div className='newsdetails'>
      <h3>{selectedNews.title}</h3>
      <p>{selectedNews.autors}</p>
      <p>Sources to original website News :<a href={selectedNews.url}> {selectedNews.url}</a></p>
      <img src={selectedNews.image} alt='Unable to Render'/>
      <b> {selectedNews.summary}</b>
      <p> {selectedNews.text}</p>
      
    </div>
  )
}

export default NewsDetail
