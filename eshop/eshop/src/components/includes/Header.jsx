import React from "react";
import { IoPerson } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../images/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const cartItems = useSelector((store) => store.cart);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img className="myntra_home" src={logo} alt="Myntra Home" />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon ">search</span>
          <input
            className="search_input outline"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <AiOutlineHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container">
            <BsBagCheck />
            <Link to="/cart" className="action_name link">
              Bag
            </Link>
            <span className="bag-item-count">{cartItems.length}</span>
          </div>
        </div>
      </header>
    </>
  );
}
