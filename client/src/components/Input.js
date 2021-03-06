import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input 
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
        />
        <button className="sendButton"
        onSubmit={e => sendMessage(e)}
        >Send Message</button>
    </form>
)

export default Input