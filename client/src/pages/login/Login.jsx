import axios from 'axios'
import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Login.scss'

const Login = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
		email: undefined,
	})

	const location = useLocation()
	const isRegister = location.state?.isRegister

	const { loading, error, dispatch } = useContext(AuthContext)

	const navigate = useNavigate()

	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
	}

	const loginCredentials = ({ email, ...items }) => {
		return { ...items }
	}

	const handleClick = async (e) => {
		e.preventDefault()

		dispatch({ type: 'LOGIN_START' })
		try {
			if (!isLogin) {
				await axios.post(`/auth/register`, credentials)
			}
			const res = await axios.post(`/auth/login`, loginCredentials(credentials))
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
			navigate('/')
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data })
		}
	}

	useEffect(() => {
		setIsLogin(!!isRegister ? false : true)
	}, [])

	return (
		<div className='login'>
			<div className='lContainer'>
				<input
					type='text'
					placeholder='username'
					id='username'
					onChange={handleChange}
					className='lInput'
				/>
				{!isLogin && (
					<input
						type='text'
						placeholder='email'
						id='email'
						onChange={handleChange}
						className='lInput'
					/>
				)}
				<input
					type='password'
					placeholder='password'
					id='password'
					onChange={handleChange}
					className='lInput'
				/>
				<button disabled={loading} onClick={handleClick} className='lButton'>
					{isLogin ? 'Login' : 'Register'}
				</button>
				{!isLogin ? (
					<div>
						Already have an account?
						<button className='btn btn_link' onClick={() => setIsLogin(true)}>
							Log In
						</button>
					</div>
				) : (
					<div>
						Want to create an account?
						<button className='btn btn_link' onClick={() => setIsLogin(false)}>
							Register
						</button>
					</div>
				)}
				{error && <span style={{ color: 'red' }}>{error.message}</span>}
			</div>
		</div>
	)
}

export default Login
