import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./components/mainlayout/Mainlayout";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import Home from "./page/home/Home";
import { ToastContainer } from 'react-toastify';
import tabsAll from './tabs.json'
import DummyChart from "./page/dummyChart/DummyChart";
import DummyList from "./page/dummyList/DummyList";
import DummyTable from "./page/dummyTable/DummyTable";
import 'react-toastify/dist/ReactToastify.css';
import DummyListDetals from "./page/dummyListDetals/DummyListDetals";

const App = () => {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <Routes>
        <Route path="/several__table" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path={tabsAll.tabs[0].path} element={<DummyTable />} />
          <Route path={tabsAll.tabs[1].path} element={<DummyList />} />
          <Route path={`${tabsAll.tabs[1].path}/:id`} element={<DummyListDetals />} />
          <Route path={tabsAll.tabs[2].path} element={<DummyChart />} />
        </Route>
        <Route path="*" element={<NotFoundBlock />} />
      </Routes>
    </React.Suspense>
  )
}

export default App