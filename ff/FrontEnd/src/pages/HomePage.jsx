import React, { useState } from 'react'
import styled from 'styled-components'
import userPicture from '../pictures/userPicture.png'
import mainPicture from '../pictures/mainPic.svg'
import BoshSahifa from '../components/BoshSahifa'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
   const [visible, setVisible] = useState(false)
    function show() {
      setVisible(prev => !prev)
    } 
  return (
    <Wrapper>
     <nav>
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
  </nav>



    <main>
      <img className='mainPic' src={mainPicture} alt="mainPicture" />
      <div>
        <h1>Qidirish</h1>
        <span>
          <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
          <button>Izlash</button>
        </span>
      </div>
    </main>

    <BoshSahifa/>
  </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  max-width: 1440px;
  background: linear-gradient(to right, #a7e6e9, white,#a7e6e9);
  margin: auto;

  button {
    cursor: pointer;
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .mainPic {
      border-radius: 22px;
    }

    div {
      width: 1030px;
      height: 163px;
      transform: translateY(-50%);
      border-radius: 15px;
      padding: 29px 73px;
      width: 1030px;
      height: 163px;
      box-shadow: 0 4px 77px 0 rgba(0, 0, 0, 0.25);
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
      animation: hop 3s infinite ease;

      h1 {
        font-weight: 400;
        font-size: 32px;
        color: #c58745;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        input {
          width: 710px;
          height: 48px;
          border-radius: 15px;
          width: 710px;
          height: 48px;
          background: #f5f5f5;
          font-weight: 400;
          font-size: 16px;
          color: #c58745;
          border: none;
          outline: none;
          text-align: start;
          padding-left: 12px;
        }
        button {
          border-radius: 15px;
          padding: 12px 37px;
          width: 160px;
          height: 48px;
          background: #c58745;
          border: none;
          outline: none;
          font-weight: 400;
          font-size: 16px;
          color: #efdac3;
          box-shadow: 2px 2px 5px #664420, inset 2px 2px 5px #664420;

        }
        button:hover {
          background: #c9ac8c;
        }
      }
    }

    @keyframes hop {
      0%, 100% {
        scale: 0.95;
      }
      50% {
        scale: 1;
      }
    }
    div:hover {
      animation-play-state: paused;
      opacity: 1;
      scale: 1;
    }
  }

  nav {
    position: sticky;
    top: 0;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
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
        width: 140px;
        height: 160px;
        bottom: -165px;
        right: 10px;
        border-radius: 8px;
        animation: fromTop .5s ease;

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
  }

  @keyframes fromTop {
    from {
      transform: translateY(200px);
      opacity: 0;
      scale: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
      scale: 1;
    }
  }
`