import { useState, useEffect } from "react"
import queryString from "query-string"
import io from 'socket.io-client'

let socket

const Chat = ({ location }) => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
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
            socket.emit("disconnect")

            socket.off()
        }
    }, [ENDPOINT, location.search])

    return (
        <h1>Chat</h1>
    )
}

export default Chat