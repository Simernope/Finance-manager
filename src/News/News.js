import React from 'react';
import './News.css';

function News() {
    let a = "ЦБ ограничил снятие иностранной валюты с вкладов и счетов в банках с 9 марта по 9 сентября 2022 года." +
        " Вот какие правила будут действовать эти полгода. " +
        "Со своего счета можно снять наличными не больше 10 000 $. " +
        "Валюту свыше этой суммы банк выдаст в рублях по рыночному курсу на день выдачи. " +
        "Позднее ЦБ уточнил, что сумма, которую банк выплатит человеку в рублях, " +
        "не может быть меньше суммы, рассчитанной на день выплаты по официальному курсу Банка России."
    const newsPost = [{
        id: 1,
        title: 'Новость 1',
        shortDescription: 'ЦБ ограничил выдачу наличной валюты: до 9 сентября можно снять не больше 10 000 $ Остальную валюту банк выдаст рублями',
        fullDescription: a,
        date: '1 января'
    }, {
        id: 2,
        title: 'Новость 2',
        shortDescription: 'ЦБ ограничил выдачу наличной валюты: до 9 сентября можно снять не больше 10 000 $ Остальную валюту банк выдаст рублями',
        fullDescription: a,
        date: '2 января'
    }, {
        id: 3,
        title: 'Новость 3',
        shortDescription: 'ЦБ ограничил выдачу наличной валюты: до 9 сентября можно снять не больше 10 000 $ Остальную валюту банк выдаст рублями',
        fullDescription: a,
        date: '3 января'
    }, {
        id: 4,
        title: 'Новость 4',
        shortDescription: 'ЦБ ограничил выдачу наличной валюты: до 9 сентября можно снять не больше 10 000 $ Остальную валюту банк выдаст рублями',
        fullDescription: a,
        date: '4 января'
    },
    ]


    function getApi() {

        fetch('http://localhost:8000/news')
            .then(data => {
                return data.json();
            })
            .then(data => {
                let news = {}
                for(let i = 0; i < 5; i++){
                    news[i] = data[i]
                }
                return news
            })

    }
    return (
        <div className='news'>

            { newsPost.map(post => (
                <div className="news-block" key={post.id}>
                    <div className="currency-name">{post.title}</div>
                    <div>{post.shortDescription}</div>
                </div>
            ))}


        </div>
    );
}


export default News;