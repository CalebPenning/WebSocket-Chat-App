import { useState, useEffect } from "react"
import './Chat.css'
import './InfoBar.css'
import './Input.css'
import Input from './Input'
import Messages from './Messages'
import InfoBar from './InfoBar'
import TextContainer from "./TextContainer"
import queryString from "query-string"
import io from 'socket.io-client'

let socket

const Chat = ({ location }) => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    const [users, setUsers] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const ENDPOINT = "localhost:3001"

    useEffect(() => {
        // get query params and values, store in object
        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)
        console.log(socket)

        setName(name)
        setRoom(room)

        socket.emit('login', { name, room }, () => {
            
        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message])
        })
    }, [messages])



    // function to send messages
    const sendMessage = (e) => {

        e.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(""))
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )
}

export default Chat