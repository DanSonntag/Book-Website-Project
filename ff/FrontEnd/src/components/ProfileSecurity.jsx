import React from 'react'
import styled from 'styled-components'

function ProfileSecurity() {
  return (
    <Wrapper>
    <h1>Change Or Recover Your Password:</h1>

    <ul>
        <li>
            <p className='normal'>Email</p>
            <input type="text" placeholder='example: yulduzusmonova@gmail.com' />
            <p className="blurred">Please enter your email.</p>
        </li>
        <li>
            <p className='normal'>Current password</p>
            <input type="text" placeholder='example: YulduzUsmon123' />
            <p className="blurred">Please enter your password.</p>
        </li>
        <li>
            <p className='normal'>New Password</p>
            <input type="text" placeholder='example: YulduzUsmon123' />
            <p className="blurred">Please enter your password.</p>
        </li>
    </ul>
    <div className="bottom">
         <button>Save Changes</button>
     </div>
</Wrapper>
  )
}

export default ProfileSecurity

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
                    gap: 16px;

                    li:first-child {
                        margin-top: 32px;
                    }

                    li {
                        display: flex;
                        align-items: start;
                        justify-content: center;
                        flex-direction: column;
                        padding-bottom: 16px;

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

                .bottom {
            background: transparent;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            margin-top: 4px;

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