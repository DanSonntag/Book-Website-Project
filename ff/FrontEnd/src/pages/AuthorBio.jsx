import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import otkirhoshimov from '../pictures/otkirhoshimov.svg'
import naqsh2 from '../pictures/naqsh.svg'
import dunyoningIshlari from '../pictures/dunyoningIshlari.svg'

function AuthorBio() {
    const data = [
        {
          name: "Dunyoning Ishlari",
          muallif: "O'tkir Hoshimov",
          picture: dunyoningIshlari
        },
        {
            name: "Dunyoning Ishlari",
            muallif: "O'tkir Hoshimov",
            picture: dunyoningIshlari
          },
          {
            name: "Dunyoning Ishlari",
            muallif: "O'tkir Hoshimov",
            picture: dunyoningIshlari
          },
          {
            name: "Dunyoning Ishlari",
            muallif: "O'tkir Hoshimov",
            picture: dunyoningIshlari
          },
          {
            name: "Dunyoning Ishlari",
            muallif: "O'tkir Hoshimov",
            picture: dunyoningIshlari
          },
          {
              name: "Dunyoning Ishlari",
              muallif: "O'tkir Hoshimov",
              picture: dunyoningIshlari
            },
            {
              name: "Dunyoning Ishlari",
              muallif: "O'tkir Hoshimov",
              picture: dunyoningIshlari
            },
            {
              name: "Dunyoning Ishlari",
              muallif: "O'tkir Hoshimov",
              picture: dunyoningIshlari
            },
            {
                name: "Dunyoning Ishlari",
                muallif: "O'tkir Hoshimov",
                picture: dunyoningIshlari
              },
              {
                name: "Dunyoning Ishlari",
                muallif: "O'tkir Hoshimov",
                picture: dunyoningIshlari
              },
              {
                name: "Dunyoning Ishlari",
                muallif: "O'tkir Hoshimov",
                picture: dunyoningIshlari
              },
              {
                name: "Dunyoning Ishlari",
                muallif: "O'tkir Hoshimov",
                picture: dunyoningIshlari
              }
      ]

    return (
        <Wrapper>
            <Navbar />
            <main>
                <img src={otkirhoshimov} alt="otkirhoshimov" />
                <div>
                    <h1>O'tkir Hoshimov</h1>
                    <p className='text'>O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) 
                        tumanidagi Do'mbiravot mavzeida tug'ildi. O'. Hoshimov mehnat faoliyatini erta boshladi. 
                        Toshkent Davlat universiteti (hozirgi O'zbekiston Milliy universiteti)ning jurnalistika kulliyotida 
                        o'qish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryo'lchi”, 
                        “Qizil O'zbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon bo'lib ishladi. 
                        So'ng “Toshkent haqiqati” gazetasida adabiy xodim (1963-1966), “Toshkent oqshomi” gazetasida bo'lim mudiri (1966-1982), 
                        G'. G'ulom nomidagi Adabiyot va san'at nashriyotida bosh muharrir o'rinbosari (1982-1985) bo'ldi. 1985-1995 yillarda 
                        “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha O'zbekiston Respublikasi Oliy Majlisining 
                        Matbuot va axborot qo'mitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir bo'lib ishladi.</p>
                    <ul>
                        <li>
                            <p>Tavallud sanasi</p>
                            <h2>1941</h2>
                            <p>Toshkent, Uzbekistan</p>
                        </li>
                        <li><svg aria-hidden="true" data-prefix="fal" data-icon="minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-minus fa-w-12 fa-7x"><path fill="currentColor" d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" class=""></path></svg></li>
                        <li>
                            <p>Vafot etgan sana</p>
                            <h2>2013</h2>
                            <p>Toshkent, Uzbekistan</p>
                        </li>
                    </ul>

                    <img className='naqsh1' src={naqsh2} alt="naqsh" />
                    <img className='naqsh2' src={naqsh2} alt="naqsh" />

                </div>
            </main>
            <section>
                <span>
                    <h3>Muallif asarlari</h3>
                    <button>Barchasini ko'rish</button>
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

export default AuthorBio

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
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            li {
                p {
                    font-weight: 400;
                    font-size: 12px;
                    color: rgba(13, 13, 13, 0.6);
                }
                h2 {
                    font-weight: 400;
                    font-size: 39px;
                    line-height: 144%;
                    color: #d1a576;
                }
            }
            li:nth-child(2) {
                svg {
                    color: #d1a576;
                    width: 20px;
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

`