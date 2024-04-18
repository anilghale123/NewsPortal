import React, { useEffect, useState } from 'react';

const Articles = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;  // Assuming you have set it up on Vercel

    const newsApi = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-18&sortBy=publishedAt&apiKey=${apiKey}`;
  
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
  
    useEffect(() => {
      const fetchNews = async () => {
        setIsLoading(true); 
        try {
          const response = await fetch(newsApi, {
              headers: {
                'X-Api-Key': apiKey 
              }
          });
  
          if (!response.ok) { // Check for HTTP errors
            throw new Error(`HTTP Error: ${response.status}`);
          }
  
          const json = await response.json();
          setArticles(json.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setIsLoading(false); 
        }
      };
  
      fetchNews();
    }, []);
  
  return (
    <>
      <h1 className='text-4xl font-bold bg-black text-white p-3 text-center'>News Portal</h1>
      <div className="bg-black grid grid-cols-1 md:grid-cols-3 gap-5 p-5"> 

        {isLoading ? (
            <p className="text-white">Loading News...</p> 
        ) : (
            articles.map((article, index) => (
              <div key={index} className="bg-white flex flex-col p-5 rounded-lg"> 
                <h1 className='font-bold'>{article.title}</h1>
                <img src={article.urlToImage} alt="image" className='rounded-lg shadow-sm' />
                <p>{article.description}</p>
                <p className='text-green-500 p-3'>Published at: {article.publishedAt}</p>

              </div> 
            ))
        )}
      </div>
    </>
  );
};

export default Articles;
