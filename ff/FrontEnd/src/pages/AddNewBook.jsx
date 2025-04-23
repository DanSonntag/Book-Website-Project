import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import successImage from '../pictures/success-icon-1024x1024-p8wk1o4x.png'

function AddNewBook() {

    const titleRef = useRef()
    const pagesRef = useRef()
    const yearRef = useRef()
    const selectRef = useRef()
    const authorRef = useRef()
    const bioRef = useRef()
    const publisherRef = useRef()
    const genreRef = useRef()

    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [addModal, setAddModal] = useState(false)
    const [redModal, setRedModal] = useState(false)

    function modalniChiqar() {
        setTimeout(() => {
            setAddModal(prev => !prev)
        }, 1400)
    }

    function yozmadizOchir() {
        setRedModal(false)
    }
   
    const [son, setSon] = useState(0)
    function adding() {
        setSon(son + 1)
        console.log(son);
    }
    useEffect(() => {
        axios.get("http://localhost:3000/books")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [])

    const [rang1, setRang1] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang2, setRang2] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang3, setRang3] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang4, setRang4] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang5, setRang5] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang6, setRang6] = useState("#9b9b9b")  // Default rang bo'lsin bu
    const [rang7, setRang7] = useState("#9b9b9b")  // Default rang bo'lsin bu

    function rangniOzgartir() {
        if (titleRef.current.value) {
            setRang1("#3eff1c")
        } if (pagesRef.current.value) {
            setRang2("#3eff1c")
        } if (yearRef.current.value) {
            setRang3("#3eff1c")
        } if (authorRef.current.value) {
            setRang5("#3eff1c")
        } if (publisherRef.current.value) {
            setRang6("#3eff1c")
        } if (bioRef.current.value) {
            setRang7("#3eff1c")
        }

        if (titleRef.current.value == "") {
            setRang1("red")
        } if (pagesRef.current.value == "") {
            setRang2("red")
        } if ( yearRef.current.value == "") {
            setRang3("red")
        } if (authorRef.current.value == "") {
            setRang5("red")
        } if (publisherRef.current.value == "") {
            setRang6("red")
        } if (bioRef.current.value == "") {
            setRang7("red")
        } 
        if (pagesRef.current.value <= 0) {
            console.log("Should be bigger than 0");
            setRang2("red")
        }
       }

    function addElement() {
        // let newBook
        if (
            titleRef.current.value == "" ||
            pagesRef.current.value == "" ||
            yearRef.current.value == "" ||
            authorRef.current.value == "" ||
            publisherRef.current.value == "" ||
            bioRef.current.value == "" || 
            pagesRef.current.value <= 0
        ) {
            console.log("Iltimos, barcha berilgan maydonlarni to'ldiring.")
            setRedModal(true)
            setTimeout(() => {
                setRedModal(false)
            }, 3000)
            adding()
            rangniOzgartir()
        }
        else {
            const newBook = {
                name: String(titleRef.current.value),
                author: "67ff7d1920cfa55576a0e6bd",
                published_date: String(yearRef.current.value),
                page_count: String(pagesRef.current.value),
                genre: String(selectRef.current.value),
                publisher: String(publisherRef.current.value),
                description: String(bioRef.current.value),
                category: String(selectRef.current.value),
                image: "https://th.bing.com/th/id/OIP.kPgb4u-3sIZtb2Bhv3PX1AHaJ-?rs=1&pid=ImgDetMain"
            }
            console.log(newBook);
            
            setRang1("#9b9b9b")
            setRang2("#9b9b9b")
            setRang3("#9b9b9b")
            setRang4("#9b9b9b")
            setRang5("#9b9b9b")
            setRang6("#9b9b9b")
            setRang7("#9b9b9b")

            titleRef.current.value = null
            yearRef.current.value = null
            pagesRef.current.value = null
            authorRef.current.value = null
            publisherRef.current.value = null
            bioRef.current.value = null
            selectRef.current.value = genreRef.current.value

            setRedModal(false)
            setSon(0)
            modalniChiqar()
            setAddModal(prev => !prev) 
            
            axios.post("http://localhost:3000/books/", newBook)
            .then((data) => {
                console.log(data);

            })
        }


       



    }

    return (
        <Wrapper>
            <section>
                <div className="left">
                    <nav>
                        <Link className='back-button' to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L392 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-214.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" /></svg>
                        </Link>
                    </nav>
                    <h1>Add Book</h1>
                    <ul>
                        <li>
                            <input onChange={() => rangniOzgartir()} style={{borderColor: rang1}} type="text" placeholder='Title' ref={titleRef}
                            />
                        </li>

                        <li>
                            <input onChange={() => rangniOzgartir()} style={{borderColor: rang2}} type="number" placeholder='Pages' ref={pagesRef} />
                        </li> <li>
                            <input onChange={() => rangniOzgartir()} style={{borderColor: rang3}} type="text" placeholder='Year' ref={yearRef} />
                        </li>
                        <li>
                            <select style={{borderColor: rang4}} type="text" placeholder='Price' ref={selectRef}>
                                <option value="null" hidden ref={genreRef}>Genre</option>
                                <option value="nonFiction">Non-fiction</option>
                                <option value="fiction">Fiction</option>
                                <option value="religious">Religious</option>
                                <option value="Psixologiya">Psychology</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="romantic">Romantic</option>
                            </select>
                        </li>
                        <li>
                            <input onChange={() => rangniOzgartir()} style={{borderColor: rang5}} type="text" placeholder='Author' ref={authorRef} />
                        </li>
                        <li>
                            <input onChange={() => rangniOzgartir()} style={{borderColor: rang6}} type="text" placeholder='Publisher' ref={publisherRef} />
                        </li>
                        <li>
                            <textarea onChange={() => rangniOzgartir()} style={{borderColor: rang7}} type="text" placeholder='Bio' ref={bioRef}></textarea>
                        </li>
                    </ul>
                    <div className="bottom">
                        <button onClick={() => addElement()}>Save the Book</button>
                    </div>
                </div>

                <div className="right">
                    <div className="inner-right">
                        <input type="file" />
                    </div>
                </div>
            </section>

            {addModal && <div className="overlay">
                <div className='modal'>
                    <img src={successImage} alt="successImage" />
                    <h1>Yangi kitob muvofiqqiyatli qo'shildi!</h1>
                </div>
            </div>
            }

            {redModal && <div className='red-modal'>
                <span className='round' title={son + " marta noto'g'ri amal bajardingiz."}>{son}</span>
                <span>Iltimos, barcha berilgan maydonlarni to'ldiring.</span>
                <button onClick={() => yozmadizOchir()} title="O'chirish">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>
                </button>
            </div>
            }

        </Wrapper>
    )
}

export default AddNewBook

const Wrapper = styled.section`
section {
    display: flex;
}
  max-width: 1440px;
  background: #81d9dd;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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
        margin-top: 24px;
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
                border: 2px solid #9b9b9b;
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
                border: 2px solid #9b9b9b;
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
            box-shadow: 2px 2px 10px grey, inset 2px 2px 10px grey;
        }
    }
  }
  .right {
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
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 50px;
            background-color: #aadcdf;
        }
       
    }
    .inner-right::before {
        content: '+';
        position: absolute;
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

 .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000075;
    backdrop-filter: blur(25px);
    z-index: 10000;

    .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #171a32;
    color: white;
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    animation: kattalash 400ms ease;
    transition: all .1s ease;
    transform-origin: top;
    border-radius: 22px;

    img {
        width: 64px;
        animation: animate 1s 1 ease;
    }
    h1 {
        text-align: center;
        color: #5c6a80;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  }
 }
 .red-modal {
    background-color: #ee3a0d;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 48px;
    border-radius: 8px;
    padding: 0 8px ;
    animation: vibrate .3s ease;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid white;
        outline: none;
        cursor: pointer;
        svg {
            width: 24px;
            fill: red;
        }
    }

    .round {
        border-radius: 50%;
        padding: 1px;
        border: 1px solid white;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
 }

  @keyframes kattalash {
    from {
        opacity: 0;
        scale: 0;
    }
    to {
        opacity: 1;
        scale: 1;
    }
  }
  @keyframes animate {
    0% {
        opacity: 0;
        scale: 0;
        transform: rotate(-90deg);
    }
    100% {
        opacity: 1;
        scale: 1.2;
        transform: rotate(0deg);
    }
  }
  @keyframes vibrate {
     from {
        transform: translateY(-100px) translateX(-50%);
        opacity: 0;
        scale: 0;
     }
     to {
        transform: translateY(0px) translateX(-50%);
        opacity: 1;
        scale: 1;
     }
  }
`




/*

const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://192.168.108.67:3000/books/")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [])


const newBook = {
    name: "Siqilma",
    author: "6618c9d7993b3d6f5b6f2a4a",
    published_date: new Date("2016-01-05"),
    page_count: 500,
    genre: "Psixologiya",
    publisher: "Ziyo nashriyot",        
    description: "Bu vapshe zo'r kitob",
    category: "non-fiction",
    image: "https://example.com/images/deep-work.jpg",
};

axios.post("http://192.168.108.67:3000/books/", newBook)
.then((data) => {
    console.log(data);
    
})

*/