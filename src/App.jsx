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

  useEffect(() => {
    getArticles().then((response) => {
      console.log(response)
      setAllArticles(response);
    });
    
  }, []);
  useEffect(() => {
    getTopics().then((response) => {
      console.log(response)
      setAllTopics(response);
    });
    
  }, []);

  


  return (
    <div className='App'>
     <Header />
     <Routes>
     <Route
          path="/articles"
          element={<ArticlesList 
            allArticles={allArticles} allTopics={allTopics}/>}
        />
     </Routes>
    </div>

  )
}

export default App
