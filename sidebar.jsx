import { Input } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Expense from './Expense';
import Sales from './sales';
import { FaTh,FaRegChartBar, FaSignOutAlt, FaBars } from "react-icons/fa"
import Dashboard from './dashboard';

function sidebar() {


//   const menuItem = [
//     {
//         path: "/",
//         name: "Dashboard",
//         icon: <FaTh />
//     },
//     {
//         path: "/sales",
//         name: "Sales",
//         icon: <FaSignOutAlt />
//     },
//     {
//         path: "/expenses",
//         name: "Expenses",
//         icon: <FaRegChartBar />
//     }
 
// ]



  return (
    
     <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img src="" alt="" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Profuse TransTech</span>
    </a>
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="" className="img-circle elevation-2" alt="" />
        </div>
        <div className="info">
          <a href="https://www.profusetranstech.com/" className="d-block">Contact Us</a>
        </div>
      </div>
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          {/* <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" /> */}
          <Input 
          className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li className="nav-item">
          
             <a href="/sales" className="nav-link"> 
              <i className="nav-icon fas fa-copy" />
              <p>
                Sales
                <i className="fas fa-angle-left right" />
              </p>
             </a> 
             </li>
             
       <li className="nav-item">
          <a href="/Expense" className="nav-link">
          <i className="nav-icon fas fa-copy" />
          <p>
            Expense
          <i className="fas fa-angle-left right" />
          <span className="badge badge-info right">6</span>
          </p>
          </a>
          <div className="dropdown-menu" >
        <ul className="nav nav-treeview">
        

        
    <li className="nav-item">
      <a href="/Purchase" className="dropdown-item">
        <i className="far fa-circle nav-icon" />
        <p>Purchase</p>
      </a>
    </li>
    <li className="nav-item">
      <a href="/Owner" className="dropdown-item">
        <i className="far fa-circle nav-icon" />
        <p>Owner's Account</p>
      </a>
    </li>
    <li className="nav-item">
      <a href="pages/layout/boxed.html" className="dropdown-item">
        <i className="far fa-circle nav-icon" />
        <p>Salary</p>
      </a>
    </li>
    <li className="nav-item">
      <a href="pages/layout/fixed-sidebar.html" className="dropdown-item">
        <i className="far fa-circle nav-icon" />
        <p>Banks</p>
      </a>
    </li>
    <li className="nav-item">
      <a href="pages/layout/fixed-sidebar-custom.html" className="dropdown-item">
        <i className="far fa-circle nav-icon" />
        <p>Account</p>
      </a>
    </li>
    
  </ul>
  </div>
  </li>
  

         </ul> 
          </nav>
          </div>
          </aside>
          </div>
          
  
  )
}


export default sidebar;
