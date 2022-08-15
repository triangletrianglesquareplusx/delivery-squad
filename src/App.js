import React from "react";
import { Routes, Route , Outlet } from "react-router-dom";
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
        <section className="w-full">    
            <Outlet />
        </section>
      </div>
  )
}
