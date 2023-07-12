"use client";

import React from "react";

interface Notification {
  id: Symbol;
  text: string;
  type: "info" | "warning";
}

const NotificationsContext = React.createContext<
  | {
      notifications: Notification[];
      addNotification: (notification: Omit<Notification, "id">) => void;
      removeNotification: (id: Symbol) => void;
    }
  | undefined
>(undefined);
NotificationsContext.displayName = "NotificationsContext";

export function useNotifications() {
  const value = React.useContext(NotificationsContext);

  if (value === undefined) {
    throw new Error(
      "useNotifications must be used within an NotificationsContextProvider"
    );
  }

  return value;
}

export function NotificationsContextProvider(
  props: React.PropsWithChildren<unknown>
) {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  const removeNotification = React.useCallback(function removeNotification(
    id: Symbol
  ) {
    setNotifications((notifications) =>
      notifications.filter((notification) => id !== notification.id)
    );
  },
  []);
  
  const addNotification = React.useCallback(
    function addNotification(notification: Omit<Notification, "id">) {
      const id = Symbol(Date.now());
      setNotifications((notifications) => [
        ...notifications,
        { id, ...notification },
      ]);

      setTimeout(() => {
        removeNotification(id);
      }, 3000);
    },
    [removeNotification]
  );

  const value = {
    notifications,
    addNotification,
    removeNotification,
  };

  return <NotificationsContext.Provider value={value} {...props} />;
}
