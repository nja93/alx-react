import React, { Component } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className="Notifications">
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
            <ul>
              {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
              {this.props.listNotifications.map((val, idx) => {
                return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
              })}
            </ul>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;