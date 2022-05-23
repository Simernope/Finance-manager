import React, {useState} from 'react';
import './ModalWindow.css';

const ModalWindow = ({active, setActive, children}) => {
        return (
            <div className={active ? 'modal active' : 'modal'}  onClick={() => setActive(false)}>
                <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                    ЦБ ограничил снятие иностранной валюты с вкладов и счетов в банках с 9 марта по 9 сентября 2022 года. Вот какие правила будут действовать эти полгода.

                    Со своего счета можно снять наличными не больше 10 000 $. Валюту свыше этой суммы банк выдаст в рублях по рыночному курсу на день выдачи. Позднее ЦБ уточнил, что сумма, которую банк выплатит человеку в рублях, не может быть меньше суммы, рассчитанной на день выплаты по официальному курсу Банка России.
                </div>
                {children}
            </div>
        );
    }


export default ModalWindow;