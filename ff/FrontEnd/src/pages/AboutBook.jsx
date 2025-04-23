import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import bookSample from '../pictures/bookSample.svg'
import naqsh2 from '../pictures/naqsh.svg'
import dunyoningIshlari from '../pictures/dunyoningIshlari.svg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function AboutBook() {
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
            <Navbar />
            <main>
                <img src={bookSample} alt="bookSample" />
                <div>
                    <h1>Qo'rqma</h1>
                    <ul>
                        <li>
                            <p>Sahifalar soni:</p>
                            <p>376 page</p>
                        </li>
                        <li>
                            <p>Chop etilgan:</p>
                            <p>2021 years</p>
                        </li>
                        <li>
                            <p>Kitob narxi:</p>
                            <p>$124.9</p>
                        </li>
                    </ul>

                    <span className='middle'> 
                      <p>To'liq ma'lumot <svg className='para' width="8" height="12" viewBox="0 0 8 12" fill="#d39d63" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.18198 -0.0098877V10.3027L0.853553 7.97428C0.658291 7.77902 0.341709 7.77902 0.146447 7.97428C-0.0488155 8.16954 -0.0488155 8.48612 0.146447 8.68139L3.32843 11.8634C3.52369 12.0586 3.84027 12.0586 4.03553 11.8634L7.21751 8.68139C7.41278 8.48612 7.41278 8.16954 7.21751 7.97428C7.02225 7.77902 6.70567 7.77902 6.51041 7.97428L4.18198 10.3027V-0.0098877H3.18198Z" fill="#0D0D0D" />
</svg></p>
                      <svg width="511" height="10" viewBox="0 0 511 10" fill="#d39d63" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.364014 1.5L511 0.5" stroke="#D1B89D" stroke-opacity="0.6" />
</svg>
                      </span>
                        <p className="text">
                            Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан 
                          шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. 
                          Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. 
                          Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас 
                          ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, 
                          руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  
                          Ўтган acp бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                            </p>
                    <img className='naqsh1' src={naqsh2} alt="naqsh" />
                    <img className='naqsh2' src={naqsh2} alt="naqsh" />

                </div>
            </main>
            <section>
                <span>
                    <h3>Boshqa kitoblar</h3>
                    <button>Barcha kitoblarni ko'rish</button>
                </span>
                <ul>
                {data?.map((item) => {
        return (
          <li>
        <img src={item.picture} alt={item.picture}/>
        <div>
          <h2>{item.name}</h2>
          <p>{item.muallif}</p>
        </div>
      </li>
        )
      })}
                </ul>
            </section>
        </Wrapper>
    )
}

export default AboutBook

const Wrapper = styled.section`
  max-width: 1440px;
  background: linear-gradient(to right, #a7e6e9, white,#a7e6e9);
  margin: auto;
  main {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 64px;
    padding: 0 100px;

    div {
        position: relative;
        width: 600px;
        display: flex;
        align-items: start;
        justify-content: flex-start;
        flex-direction: column;
        padding-top: 70px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        gap: 8px;

        h1 {
            font-weight: 400;
            font-size: 48px;
            text-align: center;
            color: #d39d63;
        }
        p.text {
            font-weight: 400;
            font-size: 18px;
            color: rgba(13, 13, 13, 0.8);
            padding-bottom: 44px;
        }

        ul {
            list-style: none;
            width: 100%;
            padding-top: 16px;
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;
                padding-left: 16px;
                padding-right: 16px;
                p:first-child {
                    font-weight: 400;
                    font-size: 20px;
                    color: rgba(13, 13, 13, 0.6);
                }
                p:last-child {
                    font-weight: 400;
                    font-size: 20px;
                    color:  #d1a576;
                }
            }   
        }
        .naqsh1 {
            width: 200px;
            position: absolute;
            top: 100px;
            right: 0;
        }
        .naqsh2 {
            transform: rotate(180deg);
            width: 300px;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
  }
  section {
    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 100px 100px 0 100px;
        h3 {
        font-weight: 400;
        font-size: 31px;
        text-align: center;
        color: #d39d63;
    }
    button {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #0d0d0d;
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
    }
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        gap: 20px;
        /* padding-left: 100px;
        padding-right: 100px; */
        padding-top: 30px;
        overflow: hidden;
        overflow-x: scroll;
        width: 1240px;
        margin: auto;

        li {
            cursor: pointer;
            border-radius: 22px;
            div {
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                h2 {
                    font-weight: 500;
                    font-size: 18px;
                    color: #000;
                    padding-top: 12px;
                    padding-left: 12px;
                }
                p {
                    font-weight: 400;
                    font-size: 16px;
                    color: rgba(13, 13, 13, 0.6);
                    padding-left: 12px;
                }
            }
        }
        li:hover {
            box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.5);
        }
        li:first-child {
            margin-left: 16px;
        }
        li:last-child {
            margin-right: 16px;
        }
    }
    
  }

  span.middle {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    width: 100%;
    
    p {
      display: flex;
      width: 20ch;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #d39d63;
    }
  }

`