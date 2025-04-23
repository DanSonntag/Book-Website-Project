import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from '../pictures/signUp.svg'
import box from '../pictures/signUpBox.svg'
import littleBox from '../pictures/signUpLittleBox.svg'
import littleBox2 from '../pictures/signUpLittleBox2.svg'
import plant from '../pictures/signUpPlant.svg'
import bottomLeaf from '../pictures/signInBottomLeaf.svg'
import rightLeaf from '../pictures/signInRightLeaf.svg'


function SignUp() {
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
            <img src={box} alt="image" />
            <img src={littleBox} alt="image" />            
            <img src={littleBox2} alt="image" />    
            <img src={plant} alt="image" />            
            </div>
        </div>
        <div className="right">
        <img src={bottomLeaf} alt="image" />
        <img src={rightLeaf} alt="image" />

           <div className="inner-right">
           <h1>Sign Up</h1>
            <p>Already have an account? <Link className='link' to={"/signin"}>Sign in</Link></p>
            <ul>
            <span>Write your first name</span>
                <li>
                    <input type="text" placeholder='First Name' />
                </li>
                <span>Write your last name</span>
                <li>
                    <input type="text" placeholder='Last Name' />
                </li>
                <span>Write your phone number</span>
                <li>
                    <input type="tel" placeholder='Phone Number' />
                </li>
                    <span>Write your email address</span>
                <li>
                    <input type="email" placeholder='Email' />
                </li>
                <span>Create a strong password</span>
                <li>
                    <input type="password" placeholder='Password' />
                </li>
                <p className='remember'><input type="checkbox" id='input'/> <label htmlFor="input">Remember me</label></p>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>
           </div>
        </div>
    </Wrapper>
  )
}

export default SignUp

const Wrapper = styled.section`
  max-width: 1440px;
  background: white;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .remember {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    input, label {
        cursor: pointer;
        font-size: 16px;
        color: #00b7ff;
    }
  }

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
        position: relative;
        img {
            width: 600px;
            height: 600px;
        }
        img:nth-child(2) {
            width: 192px;
            height: 177px;
            position: absolute;
            top: 64px;
            right: 186px;
            animation: rotate 5s infinite ease;

        }
        img:nth-child(3) {
            width: 86px;
            height: 53px;
            position: absolute;
            top: 170px;
            left: 240px;
            animation: vis 2s infinite ease;

        }
        img:nth-child(4) {
            width: 162px;
            height: 90px;
            position: absolute;
            top: 280px;
            left: 360px;
            animation: bigger 1s infinite ease;
        }
        img:nth-child(5) {
            width: 150px;
            height: 220px;
            position: absolute;
            bottom: 40px;
            right: 60px;
            animation: shake 1s infinite ease;
        }
       
        @keyframes rotate {
            0% {
                transform: rotateY(0);
            }
            33% {
                transform: rotateY(360deg);
            }
            66% {
                transform: rotateY(0);

            }
            100% {
                transform: rotateY(-360deg);
            }

        }
        @keyframes vis {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
            }
        }
        @keyframes bigger {
            from {
                opacity: .3;
                scale: 0.4;
                filter: blur(5px);
            }
            to {
                opacity: 1;
                scale: 1.2;
                filter: blur(0);
            }
        }
        @keyframes shake {
            0% {
               transform: rotateZ(-10deg) translate(-10%, -10%);
            }
            25% {
                transform: rotateZ(10deg) translate(10%, 10%);
            }
            50% {
                transform: rotateZ(20deg) translate(5%, 5%);
            }
            75% {
                transform: rotateZ(10deg) translate(10%, 10%);
            }
            100% {
               transform: rotateZ(-10deg) translate(-10%, -10%);
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
                margin-top: 8px;
                cursor: pointer;
                transition: all .4s ease;
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
    top: 50px;
    right: 130px;
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