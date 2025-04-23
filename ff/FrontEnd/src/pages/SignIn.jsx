import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from '../pictures/signIn.svg'
import bottomLeaf from '../pictures/signInBottomLeaf.svg'
import rightLeaf from '../pictures/signInRightLeaf.svg'
import axios from 'axios'


function SignIn() {
    
  return (
    <Wrapper>
        <div className="left">
            <nav>
            <Link className='back-button' to={"/"}>
              <svg fill='#6b5741' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"/></svg>
              </Link>
            </nav>
            <div className="bottom">
            <img src={image} alt="image" />
            </div>
        </div>
        <div className="right">
        <img src={bottomLeaf} alt="image" />
        <img src={rightLeaf} alt="image" />
    
           <div className="inner-right">
           <h1>Sign In</h1>
            <p>Do not you have an account? <Link className='link' to={"/signup"}>Sign up</Link></p>
            <ul>
            <span>Write your email address</span>
                <li>
                    <input type="email" placeholder='Email' />
                </li>
                <span>Write your password</span>
                <li>
                    <input type="password" placeholder='Password' />
                </li>
                <li>
                    <button>Sign In</button>
                </li>
            </ul>
           </div>
        </div>
    </Wrapper>
  )
}

export default SignIn

const Wrapper = styled.section`
  max-width: 1440px;
  background: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .left {
    width: calc(1440px / 2);
    background: rgba(201, 172, 140, 1);
    height: 100vh;

    nav {
        .back-button {
            height: 80px;
            width: 90px;
            background: rgba(201, 172, 140, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                width: 40px;
            }
         }
         .back-button:hover {
          background: #f7d3ad;
         }

        }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 600px;
            height: 600px;
            animation: bounce 3s ease infinite;
        }
        @keyframes bounce {
            0%, 100% {
                scale: 0.9;
                opacity: .8;
                filter: blur(3px);
                transform: rotateZ(-3deg);
            }
            50% {
                scale: 1;
                opacity: 1;
                filter: blur(0);
                transform: rotateZ(0deg);
            }
        }
    }
  }
  .right {
    width: calc(1440px / 2);
    background: transparent;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;

   .inner-right {
    h1 {
        color: #0e192b;
        font-size: 38px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 20px;
        color: #0e192b;
        font-size: 18px;
        .link {
            text-decoration: none;
            color: #00b7ff;
        }
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        span {
            text-align: start;
            width: 100%;
            margin-bottom: -12px;
        }
        li {
            input {
                width: 330px;
                height: 46px;
                border-radius: 8px;
                border: 1px solid #9b9b9b;
                outline: none;
                padding-left: 16px;
                font-size: 16px;
            }
            button {
                width: 330px;
                height: 46px;
                border-radius: 22px;
                border: none;
                outline: none;
                color: white;
                font-size: 18px;
                background: rgba(21, 37, 64, 1);
                letter-spacing: 2px;
                margin-top: 34px;
                cursor: pointer;
                transition: all .4s ease;
                z-index: 10;
            }
            button:hover {
                background: #2a4980;
                letter-spacing: 4px;
            }
        }
    }

   }
   img:nth-child(1) {
    position: absolute;
    top: 100px;
    right: 200px;
    transform: rotateZ(-60deg);
    width: 100px;
   }
   img:nth-child(2) {
    position: absolute;
    bottom: 100px;
    left: 80px;
   }
  }
`