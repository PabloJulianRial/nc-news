import { useEffect, useState } from "react";
import './App.css'
import Header from '../src/components/Header'
import ArticlesList from './components/ArticlesList'
import { Route, Routes } from "react-router-dom";
import { getArticles } from "./utils";
import { getTopics } from "./utils";



function App() {
  const [allArticles, setAllArticles] = useState([])
  const [allTopics, setAllTopics] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getArticles().then((response) => {
      setAllArticles(response)
      setIsLoading(false)
    }).catch((err) =>{
        setIsError(true)
    })
}, []);
  useEffect(() => {
    getTopics().then((response) => {
      setAllTopics(response);
    });
    
  }, []);

  if (isError) {
    return <p className='error'>Error</p>
}

else if (isLoading) {
    return <p className='loading'>Loading...</p> 
}
else


  return (
    <div className='App'>
     <Header />
     <Routes>
     <Route
          path="/"
          element={<ArticlesList 
            allArticles={allArticles} allTopics={allTopics}/>}
        />
     </Routes>
    </div>

  )
}

export default App
