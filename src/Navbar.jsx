import { Link } from "react-router-dom";

import {
  fetchNotifications,
  selectAllNotifications,
} from "./features/notifications/notificationSlice";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  const notifications = useSelector(selectAllNotifications);
  const numUnreadNotifications = notifications.filter((n) => !n.read).length;

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  };

  return (
    <nav>
      <section>
        <h1>Messenger</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to={"/"}>Posts</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/notifications"}>
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  );
};
