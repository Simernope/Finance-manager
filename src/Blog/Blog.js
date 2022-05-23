import React, {useState, useEffect} from 'react';
import './Blog.css';
import BlogList from "./BlogList";
import useFetch from "../useFetch";
import {Link, Route, Routes} from "react-router-dom";


const Blog = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8080/blogs')


    return (
        <div className="blog-details">

            <Link to="/newblog"> <button>Создать блог</button></Link>
            {error && <div>{error}</div>}
            {isPending && <div>Загрузка...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs:" />}

        </div>
    );
}


export default Blog;
