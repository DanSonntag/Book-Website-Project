import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AddNewAuthor() {
  return (
   <Wrapper>
    <div className="left">
        <nav>
        <Link className='back-button' to={"/"}>
              <svg fill='rgba(21, 37, 64, 1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z"/></svg>
              </Link>
        </nav>
        <h1>Add Author</h1>
        <ul>
            <li>
                <input type="text" placeholder='First Name' />
            </li>
            <li>
                <input type="text" placeholder='Last Name'/>
            </li> 
            <li>
                <p className='textie'>date of birth</p>
                <input type="date" placeholder='Date of Birth'/>
            </li> 
            <li>
            <p className='textie'>date of death (if deceased)</p>
            <input type="date" placeholder='Date of Death'/>
            </li>
            <li>
                <input type="text" placeholder='Country'/>
            </li>
            <li>
                <select type="text" placeholder='Price'>
                    <option value="genre" hidden>Genre</option>
                    <option value="nonFiction">Non-fiction</option>
                    <option value="fiction">Fiction</option>
                    <option value="psychology">Psychology</option>
                    <option value="horror">Horror</option>
                    <option value="comedy">Comedy</option>
                    <option value="romantic">Romantic</option>
                </select>
            </li>
            <li>
                <textarea type="text" placeholder='Bio'></textarea>
            </li>
        </ul>
        <div className="bottom">
            <button>Save the Author</button>
        </div>
    </div>  
    
    <div className="right">
        <div className="inner-right">
        <input type="file"/>
        </div>
    </div>
   </Wrapper>
  )
}

export default AddNewAuthor

const Wrapper = styled.section`
  max-width: 1440px;
  background: #81d9dd;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    background: transparent;
    width: calc((1440px / 10) * 5);
    height: 100vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    h1 {
        text-align: center;
        margin-right: 170px;
        color: #171a32;
        font-size: 32px;
        margin-bottom: 24px;
        margin-top: 0px;
    }

    nav {
        .back-button {
            height: 80px;
            width: 90px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                width: 40px;
            }
         }
         .back-button:hover {
          background: #6cc7cc;
         }

        }
        ul {
           background: transparent;
           display: flex;
           align-items: center;
           justify-content: center;
           flex-direction: column;
           list-style: none;
           gap: 16px;

           li {
            input, select {
                width: 330px;
                height: 46px;
                outline: none;
                border-radius: 8px;
                border: 1px solid #9b9b9b;
                color: #9b9b9b;
                padding-left: 16px;
                font-size: 16px;
                box-shadow: 2px 2px 5px #171a32;
            }
            textarea {
                color: #9b9b9b;
                box-shadow: 2px 2px 5px #171a32;
            }
           }
           li:last-child {
            textarea {
                height: 82px !important;
                width: 330px !important;
                padding-top: 8px;
                padding-left: 16px;
                font-size: 18px;
                outline: none;
                border: 1px solid #9b9b9b;
                border-radius: 8px;
            }
           }
        }
    .bottom {
        text-align: center;
        margin-top: 24px;
        button {
            width: 328px;
            height: 46px;
            border-radius: 22px;
            background: #171a32;
            border: none;
            outline: none;
            font-size: 18px;
            color: white;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all .3s ease;
            box-shadow: 2px 2px 5px grey, inset 2px 2px 5px grey;
        }
        button:hover {
            letter-spacing: 4px;
            background: #274271;
            box-shadow: inset 2px 2px 10px grey,  2px 2px 10px grey;
        }
    }
  }
  .right {
    background: rgba(243, 243, 243, 1);
  background: #aadcdf;
    width: calc((1440px / 10) * 5);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-right {
        width: 315px;
        height: 428px;
        position: relative;

        input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: 3px dashed grey;
        border-radius: 22px;
        color: transparent;
        cursor: pointer;
        position: relative;
    }
        input::before { 
            position: absolute;
            content: 'Click or drag file to this area to upload ';
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 169px;
            height: 106px;
            background: transparent;
            color: #a4a4a4;
            text-wrap: wrap;
            text-align: center;
            display: flex;
            align-items: flex-end;
            font-size: 18px;
        }
        input::after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100px;
            height: 50px;
            background-color: #aadcdf;
        }
       
    }
    .inner-right::before {
        position: absolute;
        content: '+';
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #a4a4a4;
        font-size: 64px;
        width: 64px;
        height: 64px;
        background: transparent;
        z-index: 1111;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
  .textie {
    color: #171a32;
  }
`
