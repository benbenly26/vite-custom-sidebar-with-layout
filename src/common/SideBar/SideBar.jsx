import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { GlobalContext } from '../../App';
import { navItems } from './helpers';

function SideBar() {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext) || {};

  return (
    <>
      <section className="page">
        <aside className={`sidebar ${sideBarOpen ? 'open' : ''}`}>
          <header style={{ border: '1px solid #d9d9d9' }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="sidebar-title mx-auto">
                <h4>{'Benly'}</h4>
              </div>
              <div>
                <i
                  onClick={() => setSideBarOpen(!sideBarOpen)}
                  className={sideBarOpen ? 'fas fa-times' : 'fas fa-bars'}
                  style={{ marginLeft: 'auto' }}
                ></i>
              </div>
            </div>
          </header>
          <nav>
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
                style={{ textDecoration: 'none' }}
              >
                <button type="button">
                  <div className="d-flex align-items-center">
                    <i className={item.icon}></i>
                    <span className="mx-3">{item.name}</span>
                  </div>
                </button>
              </NavLink>
            ))}
          </nav>
        </aside>
      </section>
    </>
  );
}

export default SideBar;
