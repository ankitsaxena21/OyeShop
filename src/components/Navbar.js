import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { ButtonContainer } from './button';
class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <h1>Our E-Store</h1>
        </Link>
        <ul className="navbar-nav align-items-center" >
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">Products</Link>
          </li>

        </ul>
        <Link to="/cart" className="ml-auto nav-item">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            MyCart
        </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
  color:var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`

export default Navbar;
