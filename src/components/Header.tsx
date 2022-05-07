import React from 'react';
import NFTLogo from '../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

export const Header = () => {
  return (
    <nav className='header'>
      <div className='header__container'>
        <div className='header__logo--wrapper'>
          <img src={NFTLogo} className='header__logo' />
          <h1>The Metaverse</h1>
        </div>
        <div className='input--wrapper'>
          <BsSearch className='input_searchIcon' />
          <input
            className='nav__input'
            type='text'
            placeholder='Search collections, accounts or items'
          />
        </div>
        <ul className='header__links'>
          <li className='header__link'>Drops</li>
          <li className='header__link'>Marketplace</li>
          <li className='header__link'>Create</li>
        </ul>
        <div className='header__buttons--wrapper'>
          <div className='button__toggle-theme--wrapper'>
            <BiSun className='button__toggle-theme' />
          </div>
          <button className='button__buy-now'>Buy now</button>
        </div>
      </div>
    </nav>
  );
};
