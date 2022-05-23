import {useState} from 'react'
import styles from './Login.module.css'
import {useLogin} from "../../useLogin";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isPending} = useLogin()
    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>login</h2>
            <label>
                <span>email:</span>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            {!isPending && <button>Login</button>}
            {isPending && <button disabled>Загрузка...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}