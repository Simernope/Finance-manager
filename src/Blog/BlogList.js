import React from "react";
import {Link} from "react-router-dom";
import './Blog.css';

const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs
  // const title = props.title
  // const handleDelete = props.handleDelete

  return(
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) =>(
            <div key={blog.id} className="blog-preview">
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Категория: {blog.category}</p>

                </Link>

            </div>

        ))}
      </div>
  )
}

export default BlogList;