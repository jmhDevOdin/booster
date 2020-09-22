import React, { useState } from 'react';
import './ChatInput.css';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import firebase from 'firebase';

function ChatInput({ zoneName, zoneId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if (zoneId) {
            db.collection('zones').doc(zoneId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            });
        }
    };

    return (
        <div className='chatInput'>
            <form>
                <input
                value={input}
                onChange={e => setInput(e.target.value)} 
                placeholder={`Message #${zoneName?.toLowerCase()}`} />
                <button type='submit' onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
