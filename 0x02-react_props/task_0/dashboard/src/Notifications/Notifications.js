import React from 'react';
import '../Notifications/Notifications.css';
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';


const Notifications = () => {
  return (
    <div className='Notifications'>
      <button
      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "6px", top: "4px", cursor: "pointer", padding: "px"}}
      aria-label="Close"
      onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="10px"/>


      </button>
    <p>Here is the list of notifications</p>
    <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
       
    </ul>
  </div>
  );
}
export default Notifications;
