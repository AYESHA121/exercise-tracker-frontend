import React, { useEffect, useState } from 'react'
import { SidebarUi, fitprismLogo } from './Customize';
import { Link } from 'react-router-dom';

import logo from '../assets/icons/logo_sidebar.svg';
import listicon from '../assets/icons/list.svg';
import activity from '../assets/icons/activity.svg';
import logout from '../assets/icons/logout.svg';
import crossicon from '../assets/icons/xmark-solid.svg';

import { useDispatch, useSelector } from 'react-redux';
import { MENUCLOSE, LOGOUT } from '../redux/commonExportor';

export default function Sidebar_left() {

  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const { sidebarBg, sidebarLogo, crossIcon, sideBarIcon } = SidebarUi;

  // active-link
  const [menuitem] = useState([
    {
      id: 0,
      name: "activity list",
      to: "/home",
      className: `text-decoration-none border-0 border-bottom fs-5 py-2 text-capitalize d-flex align-align-items-center `,
      icon: listicon,
    },
    {
      id: 1,
      name: "Add activity",
      to: "/add-activity",
      className: `text-decoration-none border-0 border-bottom fs-5 py-2 text-capitalize d-flex align-align-items-center`,
      icon: activity,
    }
  ]);
  

  const [menuIndex, setMenuIndex] = useState(0);
  const itemActive = (id) => {
    setMenuIndex(id);
  }
  console.log(itemActive)
  useEffect(() => {}, [menuIndex])

  return (
    <React.Fragment>
      <div className={`col-xs-12 col-sm-5 col-md-4 col-lg-3 py-2 px-sm-3 py-sm-5 justify-content-between flex-column fitprism-sidebar ${menuOpen}`} style={sidebarBg}>

        <div className='d-flex justify-content-between flex-column'>

          <div className='d-flex justify-content-center align-items-center fitprism-sidebar-header'>

            <Link to="/home" className=' text-decoration-none'>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={logo} alt="Logo" className='fitprism-logo-icon' style={sidebarLogo} />
                <span className='fw-bold ms-2 p-2 bg-white fitprism-logo' style={fitprismLogo}>FitPrism</span>
              </div>
            </Link>

            <a onClick={() => dispatch(MENUCLOSE())} className='toggleBtn d-sm-none' href="/#"><img style={crossIcon} src={crossicon} alt="Closed navmenu" /></a>
          </div>

          <nav className='mt-5 d-flex flex-column customize-nav'>
            {
              menuitem.map((navitem, index) => {
                return (
                  <Link key={index} onClick={e => setMenuIndex(index)} to={navitem.to} className={navitem.className}><img style={sideBarIcon} src={navitem.icon} alt="Navbar Item"/><span>{navitem.name}</span></Link>
                )
              })
            }
            <Link to="/" className="text-decoration-none border-0 border-bottom fs-5 py-2 text-capitalize d-flex align-align-items-center" onClick={() => dispatch(LOGOUT())}><img style={sideBarIcon} src={logout} alt="Logout" /><span>Logout</span></Link>
          </nav>

        </div>

        <div className='text-center text-white fw-bold border py-2'>
          ?? Fitprism | All Right Reserved
        </div>

      </div>
    </React.Fragment>
  )
}
