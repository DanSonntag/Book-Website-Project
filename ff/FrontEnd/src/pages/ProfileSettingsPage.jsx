import React from 'react'
import styled from 'styled-components'
import onePic from '../pictures/one.svg'
import twoPic from '../pictures/two.svg'
import threePic from '../pictures/three.svg'
import { Link } from 'react-router-dom'
import ProfileSettings from '../components/ProfileSettings'
// Blurred pics
import oneBlurred from '../pictures/oneBlurred.svg'
import twoBlurred from '../pictures/twoBlurred.svg'
import threeBlurred from '../pictures/threeBlurred.svg'

function ProfileSettingsPage() {
  return (
    <Wrapper>
         <nav>
            <Link className='back-button' to={"/"}>
              <svg fill='rgba(21, 37, 64, 1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"/></svg>
              </Link>

              <Link className='button' to={"/profile"}>
              <img src={oneBlurred} alt="onePic" /> 
              <span>Profile</span> 
              </Link>

              <Link className='button' to={"/profile/security"}>
              <img src={twoBlurred} alt="twoPic" /> 
              <span>Security</span>
              </Link>
            
              <Link className='button light' to={"/profile/settings"}>
              <img src={threePic} alt="threePic" /> 
              <span>Settings</span> 
              </Link>
    </nav>
    <ProfileSettings/>

    </Wrapper>
  )
}

export default ProfileSettingsPage

const Wrapper = styled.section`
  max-width: 1440px;
     height: 738px;
  background: linear-gradient(45deg,#59a6aa, white, #59a6aa);
     margin: auto;
     button {
        cursor: pointer;
     }

     nav {
         width: 100%;
         display: flex;

         .back-button {
            height: 80px;
            width: 90px;
            background: #f3f6f9;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                width: 40px;
            }
         }
         .back-button:hover {
          background: #dde6f5;
         }
         .button {
            height: 80px;
            width: calc((100% - 90px) / 3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 16px;
            color: #152540;
            text-decoration: none;
            gap: 16px;
            background: #f3f6f9;
         }
         .light {
            background: #dde6f5;
         }
     }
`