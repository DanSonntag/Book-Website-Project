import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dunyoningIshlari from '../pictures/dunyoningIshlari.svg'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'




function BoshSahifa() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/books")
      .then(res => {
        console.log(res.data);
        setData(res.data)
       
      })

  }, [])
  
  return (
    <Wrapper>
     <div className="top">
     <h1>Asosiy Kategoriyalar</h1>
      <span>
        <button>Temuriylar Davri</button>
        <button>Jadid adabiyoti</button>
        <button>Sovet davri</button>
        <button>Mustaqillik davri</button>
      </span>
     </div>

      <ul>
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <Link className='element'>
                <div className='inside'>
                  <img src={item.image} alt={item.image} width={"200px"} />
                </div>
                <div className='bottomy'>
                  <h2>{item.name}</h2>
                  <p>{item.publisher}</p>
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
@keyframes appear {
  from {
    opacity: 0;
    scale: .5;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    scale: 1;
    transform: translateX(0px);

  }
}
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.top {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;

h1 {
  font-weight: 400;
  font-size: 32px;
  color: #cf7f29;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 715px;

  button {
    opacity: 0.5;
    font-weight: 400;
    font-size: 18px;
    color: rgba(13, 13, 13, 0.6);
    width: calc(715px / 4);
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
  }
  button:nth-child(2) {
    color: #cf7f29;
    opacity: 1;
  }
  button:hover {
    color: #ff8400;
  }
}
}

ul {
  background: blue;
  width: 1240px;
  height: 728px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap; 
  list-style: none;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;

  li {
    height: 352px;
    width: 190px;
    background: red;
  }
}

`