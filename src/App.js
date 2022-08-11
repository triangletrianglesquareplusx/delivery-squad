import React from "react";
import { Routes, Route , Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Articles from './Pages/Articles';
import SingleArticle from './Pages/SingleArticle';

export default class App extends React.Component {
  render() {
      return (
          <>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index />
                  <Route path="/articles" element={<Articles />}/>
                  <Route path="/articles/:slug" element={<SingleArticle/>} />
              </Route>        
          </Routes>
          </>
      )
  }
}

function Layout() {
  return(
      <div className="flex flex-wrap min-h-screen">        
        <header className="w-full">
            <Header/>
        </header>
        <section className="w-full">    
            <Outlet />
        </section>
        <footer className="bg-[#f2f2f2] pb-4 w-full self-end">
            <Footer/>
        </footer>
      </div>
  )
}
