import { Button, Container } from '@material-ui/core'
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsContent.css';


const NewsContent = ({newsArr,result,loadMore,setLoadMore}) => {
  return (
    <Container maxWidth='md'>
         <div className="content">
        <div className="downMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>

       {
        newsArr.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))
       }
        

         {/* for pagination */}
        {
          loadMore <= result && (
          <>
            <hr />
            
            <Button variant="contained" color="primary" onClick={() => setLoadMore(loadMore + 20)}>
             Load More
            </Button>
            {/* <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button> */}
          </>
        )} 
      
      </div>
    </Container>
  )
}

export default NewsContent