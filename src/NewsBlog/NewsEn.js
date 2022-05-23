import React, {useEffect, useState} from 'react';
import './NewsEn.css';
import NewsList from "./NewsList";
import useFetch from "../useFetch";
import {Link} from "react-router-dom";
import {useAuthContext} from "../useAuthContext";

const News1 = () => {
    //3 commit
    const {data: news, isPending, error} = useFetch('http://localhost:8000/news')
    const {user} = useAuthContext()

    return (
        <div className='news-en'>

            {user && (
                <>
                    {
                        user.email === "admin@mail.com" &&
                    <Link to="/newnews"> <button>Создать новость</button></Link>
                    }
                </>
            )}
            {error && <div>{error}</div>}
            {isPending && <div className='loading-message'>Загрузка...</div>}
            {news && <NewsList news={news}/>}

        </div>
   /* <div className='news-en'>


        {error && <div>{error}</div>}
        {isPending && <div className='loading-message'>Загрузка...</div>}
        {news && <NewsList news={news}/>}
    </div>*/
    );
}
export default News1;
