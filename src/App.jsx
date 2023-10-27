import { Route, Routes } from 'react-router-dom'
import './App.css'
import ArticlesContainer from './components/Articles/Articles-container'
import ArticleContainer from './components/Article/Article-container'
import Header from './components/Header'
import AddComment from './components/Comments/Add-comment'
import PageNotFound from './components/Page-not-found'
import Login from './components/Login'

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="/" element={ <ArticlesContainer/>}></Route>
      <Route path="/article/:article_id" element={<ArticleContainer/>}></Route>
      <Route path='/article/:article_id/add-comment' element={<AddComment/>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/*' element={ <PageNotFound badRoute={true}/>}></Route>
    </Routes>
   
  </>
}

export default App
