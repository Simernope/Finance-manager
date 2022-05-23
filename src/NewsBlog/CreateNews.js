import {useState} from "react";
import {useNavigate} from "react-router-dom"

const CreateNews = () => {
    const [title, setTitle] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [img, setImg] = useState('')
    const [adress, setAdress] = useState('')
    const [date, setDate] = useState(Date)
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, shortDescription, img, adress, date}
        fetch('http://localhost:8000/news', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            history('/news1')
        })

    }

    return (
        <div className="create">
            <h2>Создать карточку новости</h2>
            <form onSubmit={handleSubmit}>
                <label>Заголовок:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Короткое содержание:</label>
                <textarea
                    required
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                >
                </textarea>
                <label>Введите URL картинки:</label>
                <input
                    type="text"
                    required
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                >
                </input>
                <label>Введите источник:</label>
                <input
                    type="text"
                    required
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                >
                </input>
                <label>Введите дату публикации:</label>
                <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                >
                </input>
                <button>Создать блог</button>
            </form>
        </div>
    )
}

export default CreateNews;
