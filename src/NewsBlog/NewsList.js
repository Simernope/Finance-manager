import React from "react";

const NewsList = ({news}) => {
    return(
        <div className="container-card">
            {news.map((news) =>(
                <div className="card" key={news.id}>
                    <a className='just-href' href={news.url} alt='Перейти к источнику'>
                        <div className="card__header">

                            <img src={news.img} alt="card__image"
                                 className="card__image" width="600"/>
                        </div>
                        <div className="card__body">
                                    <span
                                        className="tag tag-blue">Время публикации: {news.date}</span>
                            <h4>{news.title}</h4>
                            <p>{news.shortDescription}</p>
                        </div>

                    </a>

                </div>))}
        </div>
    )
}

export default NewsList;