import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ManageStaff from './pages/ManageStaff.jsx';
import ViewReportedIssue from './pages/ViewReportedIssue.jsx';
import ManageContatcs from './pages/ManageContatcs.jsx';
import ManageProducts from './pages/ManageProducts.jsx';
import ViewChangeRequest from './pages/ViewChangeRequest.jsx';
import ViewRankList from './pages/ViewRankList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<ManageStaff />} />
          <Route path="/ManageStaff" element={<ManageStaff />} />
          <Route path="/ViewReportedIssue" element={<ViewReportedIssue />} />
          <Route path="/ManageProducts" element={<ManageProducts />} />
          <Route path="/ManageContatcs" element={<ManageContatcs />} />
          <Route path="/ViewChangeRequest" element={<ViewChangeRequest />} />
          <Route path="/ViewRankList" element={<ViewRankList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;