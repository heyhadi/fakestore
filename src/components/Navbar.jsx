import React from 'react'
import $ from 'jquery';
import Popper from 'popper.js';

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="/" >Home</a>
        <a className="navbar-brand" href="/favorite" >MyFavorite</a>
        <a className="navbar-brand" href="/aboutus" >About Us</a>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li class="nav-item dropdown">
                  <div class="dropdown">
                      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Category
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" >Jewelery</a>
                          <a class="dropdown-item" href="#" >Electronics</a>
                          <a class="dropdown-item" href="#" >Men Cloting</a>
                          <a class="dropdown-item" href="#" >Women Cloting</a>
                      </div>
                  </div>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 ml-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-light my-2 my-sm-0 bg-light search" type="submit">Search</button>
            </form>
            
        </div>
      </nav>
    )
}
