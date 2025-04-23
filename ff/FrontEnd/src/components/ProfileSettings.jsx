import React from 'react'
import styled from 'styled-components'

function ProfileSettings() {
  return (
    <Wrapper>
    <h1>Change Or Recover Your Password:</h1>

    <ul>
        <li>
            <p className='normal'>Settings</p>
            <select className='mySelect'>
                <option value="english">English</option>
                <option value="uzbek">O'zbekcha</option>
                <option value="russian">Russsian</option>
            </select>
            <p className="blurred">Please enter your email.</p>
        </li>
        <li>
            <p className="normal">Theme</p>
            <input id='input' type="checkbox" />
            <label htmlFor='input' className="pill"></label>
        </li>
    </ul>

    <div className="bottom">
         <button>Save Changes</button>
     </div>
</Wrapper>
  )
}

export default ProfileSettings

const Wrapper = styled.section`
        width: 100%;
        height: 648.5px;
        background: transparent;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

                h1 {
                    margin-top: 24px;
                    margin-bottom: 32px;
                    font-weight: 600;
                    font-size: 28px;
                    color: #212121;
                    text-align: start;
                }

                ul {
                    list-style: none;
                    margin-left: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    border-bottom: 2px solid #ecf0f3;
                    padding-bottom: 16px;
                    gap: 16px;

                    li {
                        display: flex;
                        align-items: start;
                        justify-content: center;
                        flex-direction: column;
                        padding-bottom: 16px;
                        margin-top: 32px;

                        .normal {
                            font-weight: 400;
                            font-size: 20px;
                            color: #464e5f;
                        }
                        .mySelect {
                            width: 707px;
                            height: 44px;
                            margin-top: 8px;
                            background: #f3f6f9;
                            border-radius: 8px;
                            border: none;
                            outline: none;
                            padding-left: 16px;
                            font-size: 20px;
                            position: relative;
                        }
                       

                        .blurred {
                            font-weight: 400;
                            font-size: 16px;
                            color: #b5b5c3;
                            opacity: 0.8;
                        }
                    }
                    li:nth-child(2) {
                        background: transparent;
                        width: 100%;
                        display: flex;
                        align-items: start;
                        justify-content: center;

                        .normal {
                            margin-bottom: 12px;
                        }


                        .pill {
                            border-radius: 34px;
                            width: 87px;
                            height: 30px;
                            box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
                            background: #152540;
                            position: relative;
                            cursor: pointer;
                        }
                       .pill::before {
                        content: '';
                        position: absolute;
                        left: 3px;
                        top: 2px;
                        
                        width: 26px;
                        height: 26px;
                        background: #f3f6f9;
                        border-radius: 50%;
                        transition: all 300ms linear;
                       }

                       input:checked + .pill::before {
                        transform: translateX(calc(87px - 26px - 6px));
                        background:  #3699ff;
                       }
                       input:checked + .pill {
                        background: #f3f6f9;
                        box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);

                       }
                       input {
                        display: none;
                       }
                    }
                }

                .bottom {
                background: transparent;
                 width: 100%;
                 display: flex;
                 align-items: flex-end;
                 justify-content: flex-end;
                 margin-top: 64px;

            button {
                font-family: var(--font-family);
                font-weight: 600;
                font-size: 16px;
                color: #fff;
                margin-right: 360px;
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