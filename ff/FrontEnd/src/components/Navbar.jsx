import React, { useState } from 'react'
import userPicture from '../pictures/userPicture.png'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

   const [visible, setVisible] = useState(false)
  function show() {
    setVisible(prev => !prev)
  } 
  return (
    <Wrapper>
    <div className='left'>
      Badiiyat
    </div>
    <div className='right'>
    <Link className='link' to="/home">Bosh Sahifa</Link>
    <Link className='link' to="/kitoblar">Kitoblar</Link>
      
      <button className='profileButton' onClick={show}>
      <img src={userPicture} alt="userPicture" />
      <svg aria-hidden="true" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"></path></svg>
      </button>
      {visible &&  <div className="profile-container">
        <Link className='button' to={"/profile"}>Profile</Link>
        <Link className='button' to={"/addAuthor"}>Add Author</Link>
        <Link className='button' to={"/addBook"}>Add Book</Link>
        <Link className='button' to={"/signin"}>Log Out</Link>
      </div>}

    </div>
  </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    position: sticky;
    top: 0;
    background: #ffffff5f;
    backdrop-filter: blur(30px);
    z-index: 111;

    .left {
      font-weight: 600;
      font-size: 25px;
      color: #ffae57;
      letter-spacing: 1px;      
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      position: relative;

      .link {
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 1px;
      }
      .link:first-child {
        padding: 10px;
        width: 113px;
        height: 43px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 16px;
        line-height: 144%;
        color: #0d0d0d;
        opacity: .3;
      }
      .link:nth-child(2) {
        padding: 10px;
        width: 113px;
        height: 43px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 16px;
        line-height: 144%;
        color: #0d0d0d;
        opacity: .3;
      }
    
      .profileButton {
        width: 100px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background: transparent;
        border: none;
  
        img {
          width: 49px;
          height: 49px;
          border-radius: 50%;
        }
        svg {
          width: 10px;
          transform: rotate(90deg);
        }
      }
  
      .profile-container {
        position: absolute;
        background: #f3f2f2d2;
        backdrop-filter: blur(25px);
        /* display: none; */
        width: 140px;
        height: 160px;
        bottom: -165px;
        right: 10px;
        border-radius: 8px;

        .button {
          height: calc(160px / 4);
          width: 100%;
          border: none;
          background: transparent;
            text-decoration: none;
            color: black;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 20px;
        }
        .button:hover {
          background: #d9bb92b3;
          border-radius: 8px;
          }
          .button:last-child:hover {
            background: #d17777b3;
          }
        }
      }
`