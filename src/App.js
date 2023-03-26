import { useEffect, useState } from 'react';
import NewsContent from './Components/NewsContent/NewsContent';
import Newsnav from './Components/Newsnav';
import apikey from './data/config';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",

  },
}));

function App() {

  const classes = useStyles();

  const[category,setCategory] = useState("general");
  const[newsArr,setnewsArr] = useState([]);
  const [loadMore, setLoadMore] = useState(10);
  const[result,setResult] = useState();

  const newsApi = async () => {
    try {
      //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=${loadMore}&category=${category}&apiKey=${apikey}`)

      setnewsArr(news.data.articles);
      setResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [result,category,loadMore]);

 console.log(newsArr);
  return (
    <div className={classes.App}>
      <Newsnav setCategory={setCategory} />
      <NewsContent newsArr={newsArr} result={result} loadMore={loadMore} setLoadMore={setLoadMore}/>
      <Footer />
    </div>
  );
}

export default App;
