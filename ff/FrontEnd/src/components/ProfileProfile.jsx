import React from 'react'
import camera from '../pictures/camera.svg'
import userSample from '../pictures/userSample.svg'
import styled from 'styled-components'

function ProfileProfile() {
  return (
    <Wrapper>
    <div className="top">
    <div className="left">
         <div className="picture-box">
             <img src={userSample} alt="userSample" />
             <button>
                 <img src={camera} alt="camera" />
             </button>
         </div>
     </div>
     <div className="right">
         <h1>My profile</h1>

         <ul>
             <li>
                 <p className='normal'>First Name</p>
                 <input type="text" placeholder='example: Yulduz' />
                 <p className="blurred">Please enter your first name.</p>
             </li>
             <li>
                 <p className='normal'>Last Name</p>
                 <input type="text" placeholder='example: Usmonova' />
                 <p className="blurred">Please enter your last name.</p>
             </li>
             <li>
                 <p className='normal'>Phone number</p>
                 <input type="text" placeholder='example: +99898-765-43-21' />
                 <p className="blurred">Please enter your  phone number.</p>
             </li>
         </ul>
     </div>
    </div>
     <div className="bottom">
         <button>Save Changes</button>
     </div>
 </Wrapper>
  )
}

export default ProfileProfile

const Wrapper = styled.section`
        width: 100%;
        height: 648.5px;
        background: transparent;

        .top {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            background: transparent;
            height: 540px;
            
            .left {
                width: calc(1440px * (2/5));
                height: 100%;
                background: transparent;
                display: flex;
                align-items: flex-start;
                justify-content: center;

                .picture-box {
                    margin-top: 84px;
                    width: 174px;
                    height: 175px;
                    position: relative;

                    button {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        border-radius: 8px;
                        width: 50px;
                        height: 50px;
                        background: #f3f6f9;
                        border: none;
                        box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
                    }
                    button:hover {
                        background: #ededed;
                        box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
                    }
                }
            }
            .right {
                width: 800px;
                height: 100%;
                background: transparent;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

                h1 {
                    margin-top: 126px;
                    margin-left: 52px;
                    font-weight: 600;
                    font-size: 28px;
                    color: #212121;
                }

                ul {
                    list-style: none;
                    margin-left: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 16px;

                    li:first-child {
                        margin-top: 32px;
                    }

                    li {
                        display: flex;
                        align-items: start;
                        justify-content: center;
                        flex-direction: column;

                        .normal {
                            font-weight: 400;
                            font-size: 20px;
                            color: #464e5f;
                        }
                        input {
                            width: 707px;
                            height: 44px;
                            margin-top: 8px;
                            background: #f3f6f9;
                            border-radius: 8px;
                            border: none;
                            outline: none;
                            padding-left: 16px;
                        }
                        .blurred {
                            font-weight: 400;
                            font-size: 16px;
                            color: #b5b5c3;
                            opacity: 0.8;
                        }
                    }
                }

            }
        }
        
        .bottom {
            background: transparent;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

            button {
                margin-right: 124px;
                font-weight: 600;
                font-size: 16px;
                color: #fff;
                border-radius: 4px;
                width: 141px;
                height: 43px;
                background: #152540;
                border: none;
                outline: none;
            }
            button:hover {
                background: #34496e;
            }
        }
`