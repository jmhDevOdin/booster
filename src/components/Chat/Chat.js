import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from '../../firebase';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';

function Chat() {
    const { zoneId } = useParams();
    const [zoneDetails, setZoneDetails] = useState(null);
    const [zoneMessages, setZoneMessages] = useState([]);

    useEffect(() => {
        if(zoneId) {
            // db.collection('zones')
            //     .doc(zoneId)
            //     .onSnapshot((snapshot) => (
            //         setZoneDetails(snapshot.data())))
            db.collection('zones').doc(zoneId).onSnapshot((snapshot) => {
                setZoneDetails(snapshot.data())
            })
        }
        db.collection("zones").doc(zoneId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => 
            setZoneMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [zoneId]);

    console.log(zoneDetails);
    console.log('MESSAGE >>> ', zoneMessages);

    return (
      <div className="chat">

        <div className="chat__header">
          <div className="chat__headerLeft">
            <h4 className='chat__zoneName'>
                <strong>#{zoneDetails?.name}</strong>
                <StarBorderOutlinedIcon />
            </h4>
          </div>

          <div className="chat__headerRight">
            <p>
                <InfoOutlinedIcon /> Details
            </p>
          </div>
        </div>

        <div className='chat__messages'>
            {zoneMessages.map(({ message, timestamp, user, userImage }) => (
                <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                />
            ))}
        </div>

        <ChatInput zoneDetails={zoneDetails?.name} zoneId={zoneId} />

      </div>
    );
}

export default Chat;
