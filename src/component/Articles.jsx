import React, { useEffect, useState } from 'react';

const Articles = () => {
  const apiKey = '3597665eeaa84c58af8a0e009f90fca6';
  const newsApi = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-18&sortBy=publishedAt&apiKey=${apiKey}`;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetch(newsApi);
        const json = await data.json();
        setArticles(json.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <h1 className='text-4xl font-bold bg-black text-white p-3 text-center'>News Portal</h1>
      <div className="bg-black p-5 gap-5">
        {articles.map((article, index) => (
            <div className="bg-black text-white grid grid-cols-1 gap-5 p-5">             <h1 className='font-bold'>{article.title}</h1>
            <img src={article.urlToImage} alt="image" className='rounded-lg' />
            <p>{article.description}</p>
            <p className='text-green-500 p-3'>Published at: {article.publishedAt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Articles;
