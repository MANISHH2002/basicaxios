import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=903e5bc739c74ce491ffb0f961a19c16")
      .then((res) => setMyData(res.data.articles))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <>
      <h1 className='text-center'>Axios Example</h1>
         <div className='container'>
         <div className='row'>
            {myData && myData.map((post, index) => {
              const { title, description, url, urlToImage } = post;
              return (
                <div className='col-lg-4'>
                  <div className="card my-4" style={{ width: "18rem" }} key={index}>
                  <img src={!urlToImage?"https://www.livemint.com/lm-img/img/2023/10/29/1600x900/This-was-PM-Modi-s-third-visit-to-Rajasthan-in-the_1696741422317_1698558110243.jpg":urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{title.slice(0, 45)}</h5>
                      <p className="card-text">{description}</p>
                      <a href={url} target="_blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
      </div>
              );
            })}
      
            </div>
         </div>
    </>
  );
}

export default App;
