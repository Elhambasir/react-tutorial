import React from 'react';
import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import { NavLink } from "react-router-dom";
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handler = (event) => {
  //     if (dropdown && ref.current&&!ref.current.contains(event.target)) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("mousedown", handler);
  //   };
  // }, [dropdown]);
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                {link.path === 'login' ? (
                  !user && (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  )
                ) : link.path === 'profile' ? (
                  user && (
                    <li>
                      <NavLink to={link.path}>
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};
export default Navbar;

