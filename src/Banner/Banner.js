import React, {useState} from 'react';
import './Banner.css';
import '../ModalWindow/ModalWindow.css'
import ModalWindow from "../ModalWindow/ModalWindow";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// npm install --save react-router-dom

const Banner = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="banner">
            <div className="well">ЦБ ограничил выдачу наличной валюты: до 9 сентября можно снять не больше 10 000 $
                Остальную валюту банк выдаст рублями.<button onClick={() => setModalActive(true)}>Читать подробнее.</button></div>

                <ModalWindow active={modalActive} setActive={setModalActive}>

                </ModalWindow>
        </div>
    );
}


export default Banner;