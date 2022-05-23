import {useParams} from "react-router-dom";
import useFetch from "../useFetch";
import './Blog.css';
import {useNavigate} from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog, error, isPending} = useFetch('http://localhost:8080/blogs/' + id)
    const history = useNavigate()
    const handleClick = () => {
        fetch('http://localhost:8080/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history('/blog')
        })
    }

      return(
          <div className="blog-details">
              {isPending && <div>Загрузка...</div>}
              {error && <div>{error}</div>}
              {blog && (
                  <article>
                      <h2>{blog.title}</h2>
                      <p>Категория: {blog.category}</p>
                      <div>{blog.body}</div>
                      <button onClick={handleClick}>Удалить блог</button>
                  </article>
              )}
          </div>
      )
    }

export default BlogDetails
