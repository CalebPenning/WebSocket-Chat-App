import './Message.css'

import ReactEmoji from 'react-emoji'

const Message = ({ message: {user, text}, name }) =>  {
    // init boolean value to check if message is, well,
    // from current user :)
    let isFromCurrentUser = false

    const trimmedName = user.trim().toLowerCase()

    if (user === trimmedName) isFromCurrentUser = true

    return (
        isFromCurrentUser
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{trimmedName}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ ReactEmoji.emojify(text) }</p>
                    </div>
                </div>
            )
            : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messageText colorDark">{ ReactEmoji.emojify(text) }</p>
                    </div>
                    <p className="sentText pl-10">{trimmedName}</p>
                </div>
            )
    )
}

export default Message