import React from 'react'
import Activitylist from './Activitylist';
import Menubar from './Menubar';
import SidebarLeft from './Sidebar_left';
// import { useSelector } from "react-redux";

export default function Home() {
    
    return (
        <React.Fragment>
            <Menubar />
            <div className='container-fluid'>
                <div className='row'>
                    <SidebarLeft />
                    <Activitylist />
                </div>
            </div>

        </React.Fragment >
    )
}