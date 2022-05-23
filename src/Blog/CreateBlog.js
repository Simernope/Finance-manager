import './Blog.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom"

const CreateBlog = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('Экономика')
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, category}
        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            history('/blog')
        })

    }

    return (
        <div className="create">
            <h2>Создать статью</h2>
            <form onSubmit={handleSubmit}>
                <label>Заголовок:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Содержание:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

              </textarea>
                <label>Категория:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Экономика">Экономика</option>
                    <option value="Политика">Политика</option>
                    <option value="Технологии">Технологии</option>
                </select>
                <button>Создать блог</button>
            </form>
        </div>
    )
}

export default CreateBlog;