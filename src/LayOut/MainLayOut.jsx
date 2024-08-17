import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../common/SideBar/SideBar';
import './MainLayOut.css';
import { GlobalContext } from '../App';
import Header from '../common/Header/Header';

export default function MainLayOut() {
    const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext) || {};

    return (
        <>
            <div>
                <SideBar />
                <div className="header-layout">
                    <Header />
                </div>
                <div className={`${sideBarOpen ? 'paddingleft' : ' smallPaddingLeft'}`}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
