import React from 'react';

function Notifications (props) {
  return (
    <div>
      {props.notifications.map((notification, i) => {
        return (
          <div key={i}>
            <h5>{notification}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Notifications;