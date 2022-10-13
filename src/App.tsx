import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import { useTranslation } from "react-i18next";
import "./global.scss";

import LoadingLayout from './components/common/LoadingLayout';
import HaltLoginProvider from "./context/provider";

const Home = React.lazy(()=> import('./components/home/Home'));
const Market = React.lazy(()=>import('./components/market/Market'));
const Collection = React.lazy(() => import('./components/collection/Collection'));

function App(props): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <HaltLoginProvider>
        <Header></Header>
        <React.Suspense fallback ={<LoadingLayout/>}>
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/collection/:slug" element={<Collection />}></Route>

        </Routes>
        </React.Suspense>
        <Footer></Footer>
      </HaltLoginProvider>
    </div>
  );
}

export default App;
