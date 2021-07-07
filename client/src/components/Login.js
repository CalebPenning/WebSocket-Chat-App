import { Link } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <h1 className="heading">Login to Chat</h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login