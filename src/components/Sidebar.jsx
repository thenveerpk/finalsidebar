
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaExclamation,
    FaCommentAlt,
    FaShoppingBag,
    FaChartBar,
    FaMale,
    FaAddressBook
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/ManageStaff",
            name:"ManageStaff",
          
            icon:<FaMale/>
        },
        {
            path:"/ViewReportedIssue",
            name:"View Reported Issue",
            icon:< FaExclamation/>
        },
        {
            path:"/ManageContatcs",
            name:"ManageContatcs",
            icon:<FaAddressBook/>
        },
        {
            path:"/ManageProducts",
            name:"ManageProducts",
            icon:<FaShoppingBag/>
        },
        
        {
            path:"/ViewChangeRequest",
            name:"View Change Request",
          
            icon:<FaCommentAlt/>
        },
        
        {
            path:"/ViewRankList",
            name:"View RankList",
            icon:<  FaChartBar/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h2 style={{display: isOpen ? "block" : "none"}} className="logo">Manager</h2>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;