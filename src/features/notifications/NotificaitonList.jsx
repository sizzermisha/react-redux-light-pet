import { useDispatch, useSelector } from "react-redux";
import {
  allNotificationsRead,
  selectAllNotifications,
} from "./notificationSlice";
import { selectAllUsers } from "../users/usersSlice";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useLayoutEffect } from "react";
import classnames from 'classnames';

export const NotificationList = () => {
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  });

  const renderNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: "Unknown user",
    };

    const notificationClassname = classnames("notification", {
		new: notification.isNew
	});

    return (
      <div key={notification.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b>
          {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    );
  });

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderNotifications}
    </section>
  );
};
