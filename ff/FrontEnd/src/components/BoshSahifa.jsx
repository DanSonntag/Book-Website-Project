import React from 'react'
import styled from 'styled-components'
import naqsh from '../pictures/naqsh.svg'
import abdullaAvloniy from '../pictures/abdullaAvloniy.svg'
import xudoyberditoxtaboyev from '../pictures/xudoyberditoxtaboyev.svg'
import abdullaAvloniyRangli from '../pictures/abdullaAvloniyRangli.svg'
import { Link, useNavigate } from 'react-router-dom'

function BoshSahifa() {

      const data = [
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "O'tkir Hoshimov",
      years: "1941-2013",
      picture: xudoyberditoxtaboyev
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniy
    },
    {
      name: "Abdulla Avloniy",
      years: "1878-1934",
      picture: abdullaAvloniyRangli
    }
]

  return (
    <Wrapper>
    <h1>Asosiy Kategoriyalar</h1>
    <span>
      <button>Temuriylar Davri</button>
      <button>Jadid adabiyoti</button>
      <button>Sovet davri</button>
      <button>Mustaqillik davri</button>
    </span>
    <ul>
      {data?.map((item) => {
        return (
          <li> 
          <Link className='links' to={"/home/bio"} style={{textDecoration: "none"}}>
        <img src={item.picture} alt={item.picture}/>
        <div>
          <h2>{item.name}</h2>
          <p>{item.years}</p>
          <img className='first' src={naqsh} alt="naqsh1" />
          <img className='second' src={naqsh} alt="naqsh2" />
        </div>
        </Link>
      </li>
        )
      })}
    </ul>
  </Wrapper>
  )
}

export default BoshSahifa

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    h1 {
      font-weight: 400;
      font-size: 32px;
      color: #c58745;
    }
    span {
      button {
        font-weight: 400;
        font-size: 18px;
        color: rgba(13, 13, 13, 0.6);
        padding: 10px;
        width: 166px;
        height: 47px;
        border: none;
        outline: none;
        background: transparent;
        opacity: .3;
      }
      button:nth-child(2) {
        color: #c58745;
        opacity: 1;
      }

    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      padding-bottom: 32px;

     li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 22px;
      cursor: pointer;
      text-decoration: none !important;

      .links {
        animation: appear linear;
        animation-timeline: view();
        animation-range: entry cover 20%;
      }

      img {
        border-radius: 22px 22px 0 0;
        width: 295px;
        height: 224px;
      }
      div {
        width: 295px;
        height: 140px;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        padding-left: 16px;
        padding-top: 16px;
        border-radius: 0 0 22px 22px;
        background: #f5f5f5;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        position: relative;
        overflow: hidden;

        h2 {
          font-weight: 500;
          font-size: 28px;
          color: #000;
        }
        p {
          font-weight: 400;
          font-size: 20px;
          color: rgba(0, 0, 0, 0.6);
        }

        img {
          position: absolute;
        }
        img.first {
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
        }
        img.second {
          bottom: -80px;
          left: -20px;
          width: 140px;
          height: 140px;
          transform: rotate(180deg);
        }
      }
     }
     li:hover {
      box-shadow: 0 4px 100px 0 rgba(0, 0, 0, 0.5);
     }
    }

    @keyframes appear {
  from {
    opacity: 0;
    scale: .5;
    transform: translateX(-300px);
  }
  to {
    opacity: 1;
    scale: 1;
    transform: translateX(0px);

  }
}
`