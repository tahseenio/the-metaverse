import React, { useState } from 'react';
import { ethers } from 'ethers';
import NFTLogo from '../assets/logo.png';
import { BsSearch } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

export const Header = () => {
  const [isOpenDrops, setIsOpenDrops] = useState<boolean>(false);
  const [isOpenMarketplace, setIsOpenMarketplace] = useState<boolean>(false);
  const [isOpenAbout, setIsOpenAbout] = useState<boolean>(false);

  const [metamaskAddress, setMetamaskAddress] = useState<string>('');
  const [metamaskBalance, setMetamaskBalance] = useState<string>('');

  const fetchBalance = async (address: string) => {
    const request2 = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    const balance = ethers.utils.formatEther(request2);
    console.log(balance);
    setMetamaskBalance(balance);
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      const request = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setMetamaskAddress(request[0]);
      fetchBalance(request[0]);
    } else {
      alert('You do not have Metamask Installed');
    }
  };

  const shortenedAddress = `${metamaskAddress.slice(
    0,
    4
  )}...${metamaskAddress.slice(-3)}`;

  const shortenedmetamaskBalance = metamaskBalance.slice(0, 6);

  return (
    <nav className='header'>
      <div className='header__logo--wrapper'>
        <img src={NFTLogo} className='header__logo' alt='nftlogo' />
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
        <div
          className='header__link--wrapper'
          onMouseEnter={() => setIsOpenDrops(true)}
          onMouseLeave={() => setIsOpenDrops(false)}
        >
          <li className='header__link'>Drops</li>
          <ul className={`dropdown ${isOpenDrops && 'active'}`}>
            <li className='dropdown__links'>Swaps</li>
            <li className='dropdown__links'>EIP-1559</li>
            <li className='dropdown__links'>Buy Crypto</li>
          </ul>
        </div>
        <div
          className='header__link--wrapper'
          onMouseEnter={() => setIsOpenMarketplace(true)}
          onMouseLeave={() => setIsOpenMarketplace(false)}
        >
          <li className='header__link'>Marketplace</li>
          <ul className={`dropdown ${isOpenMarketplace && 'active'}`}>
            <li className='dropdown__links'>All NFTs</li>
            <li className='dropdown__links'>Solana NFTs</li>
            <li className='dropdown__links'>Art</li>
          </ul>
        </div>
        <div
          className='header__link--wrapper'
          onMouseEnter={() => setIsOpenAbout(true)}
          onMouseLeave={() => setIsOpenAbout(false)}
        >
          <li className='header__link'>About</li>
          <ul className={`dropdown ${isOpenAbout && 'active'}`}>
            <li className='dropdown__links'>Teams</li>
            <li className='dropdown__links'>Career</li>
            <li className='dropdown__links'>Blog</li>
          </ul>
        </div>
      </ul>
      <div className='header__buttons--wrapper'>
        <div className='button__toggle-theme--wrapper'>
          <BiSun className='button__toggle-theme' />
        </div>
        {metamaskAddress ? (
          <div>
            <p>{shortenedAddress}</p>
            <p>{shortenedmetamaskBalance}</p>
          </div>
        ) : (
          <button className='button__login' onClick={connectMetamask}>
            Connect Metamask
          </button>
        )}
      </div>
    </nav>
  );
};
