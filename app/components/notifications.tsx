"use client";

import { CloseButton } from "./close-button";
import { useNotifications } from "../context/notifications.context";

export function Notifications() {
  const { notifications, removeNotification } = useNotifications();

  const styles = ["absolute", "right-3", "top-0", "h-full", "overflow-scroll"];

  return (
    <div className={styles.join(" ")}>
      {notifications.map(({ id, type, text }) => {
        const styles = {
          container: [
            "w-80",
            "my-3",
            "p-4",
            "rounded",
            "border",
            "border-solid",
            "border-slate-400",
            "drop-shadow-xl",
            "relative",
            type === "info" ? "bg-amber-50" : "bg-red-500",
          ],
          header: ["absolute", "right-2", "top-2"],
        };

        return (
          <div key={id.toString()} className={styles.container.join(" ")}>
            <div className={styles.header.join(" ")}>
              <CloseButton onClick={() => removeNotification(id)} />
            </div>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}
