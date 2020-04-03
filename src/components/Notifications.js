import React from 'react';

function Notifications (props) {
  return (
    <div className="scrollContainer">
      <div className="notificationContainer">
        {props.notifications.map((notification, i) => {
          return (
            <div key={i}>
              <h5>{notification}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Notifications;