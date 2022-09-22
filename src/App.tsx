import React, { useState } from "react";
// import {Provider,useSelector} from 'react-redux';
import { Link, Routes, Route } from "react-router-dom";

import Welcome from "./components/greeting/welcome";
// import {store} from './redux/store';
// import type {RootState} from './redux/store';
import { User } from "./utils/interfaces";
import Market from "./components/market/Market";
import Login from "./components/login/Login";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/home/Home";
import Collection from "./components/collection/Collection";
import CollectionSkeleton from "./components/collection/CollectionSkeleton";
import { useTranslation } from "react-i18next";
import "./global.scss";
import { QueryCache } from "react-query";

function App(): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/market" element={<Market />}></Route>
        <Route path="/collection/:slug" element={<Collection />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
