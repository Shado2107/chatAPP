import React from 'react';

const TheirMessage = ({lastMessage, message}) => {
    const isFisrtMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className='message-row'>
            { isFisrtMessageByUser && (
                <div 
                className='message-avatar'
                style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
           { message?.attachements?.length>0
            ? (
                <img
                src={message.attachements[0].file}
                alt="message-attachement"
                className='message-image'
                style={{ marginLeft: isFisrtMessageByUser ? '4px' : '48px' }}
                />
            ) : (
                <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFisrtMessageByUser ? '4px' : '48px' }} >
                    {message.text}
                </div>
            )
            }
            
        </div>
    );
};

export default TheirMessage;