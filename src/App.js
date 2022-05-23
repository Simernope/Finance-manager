import React from 'react';
import './App.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Route, Routes, Navigate} from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Exchange from "./pages/Banksonmap/Exchange";
import Contacts from "./pages/Contacts/Contacts";
import News from "./News/News";
import Blog from "./Blog/Blog";
import News1 from "./NewsBlog/NewsEn";
import CreateBlog from "./Blog/CreateBlog";
import BlogDetails from "./Blog/BlogDetails";
import CreateNews from "./NewsBlog/CreateNews";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {useAuthContext} from "./useAuthContext";

const App = () => {
    const {authIsReady, user} = useAuthContext()

    return (
        <>
            {authIsReady &&(
                <Header/>
            )}
                <Routes>
                    <Route path="/" element={<Mainpage/>} />
                    <Route path="/exchange" element={<Exchange/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/news1" element={<News1/>}/>
                    <Route path="/newblog" element={<CreateBlog/>}/>
                    <Route path="/newnews" element={<CreateNews/>}/>
                    <Route path="/blogs/:id" element={<BlogDetails/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>


                <Footer/>
                )}
        </>
    );
}

export default App;
