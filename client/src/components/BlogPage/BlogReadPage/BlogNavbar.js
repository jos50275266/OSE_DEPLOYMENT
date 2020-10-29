import React, { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { isAuth } from '../../../actions/authHelpers';
import {
  NavBlog,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogoutBtn
} from '../../Homepage/Navbar/NavbarElements';

const BlogNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const [auth, setAuth] = useState({
    check: false,
    role: '',
    name: '',
  });

  const { check, role, name } = auth;

  useEffect(() => {
    const checkAuth = isAuth();
    console.log(checkAuth);
    if (checkAuth)
      setAuth({ check: true, role: checkAuth.role, name: checkAuth.name });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <NavBlog scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              OSE
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="blogs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Blogs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="community"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Community
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="donate"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Donate
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              {!check && <NavBtnLink to="/signin">Sign in</NavBtnLink>}
              {check && role === 'admin' && (
                <Fragment>
                  <NavBtnLink to="/admin">{name}</NavBtnLink>
                </Fragment>
              )}
              {check && role === 'user' && (
                <Fragment>
                  <NavBtnLink to="/private">{name}</NavBtnLink>
                </Fragment>
              )}
            </NavBtn>
          </NavbarContainer>
        </NavBlog>
      </IconContext.Provider>
    </Fragment>
  );
};

export default BlogNavbar;