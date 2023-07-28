import React, { useState, useEffect } from "react";

const Subscription = () => {
  const key =
    "BHYYBjE392Jew_MB4JvNWGxUUHNkRuoBAMw1su12hEf17MX6IBtDhhtcVhWC-gGSbHHOg1R2QLgEPi7fQ-l_8Bk";
  function isPushNotificationSupported() {
    console.log("serviceWorker" in navigator && "PushManager" in window);
    return "serviceWorker" in navigator && "PushManager" in window;
  }
  function registerServiceWorker() {
    return navigator.serviceWorker.register("./serviceWorker.js");
  }
  async function askUserPermission() {
    let x = await Notification.requestPermission();
    return x;
  }
  async function createNotificationSubscription() {
    const serviceWorker = await navigator.serviceWorker.ready;
    let x = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: key,
    });
    return x;
  }
  async function postSubscription(subscription) {
    const response = await fetch(`https://blog-phyw.onrender.com/subscribe`, {
      credentials: "omit",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "sec-fetch-mode": "cors",
      },
      body: JSON.stringify(subscription),
      method: "POST",
      mode: "cors",
    });
    return await response.json();
  }
  const handleSendNotification = async () => {
    try {
      const response = await fetch(
        "https://blog-phyw.onrender.com/send-notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({}),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending push notification:", error);
    }
  };
  async function init() {
    isPushNotificationSupported();
    registerServiceWorker();
    const permission = await askUserPermission();
    console.log(permission);
    const b = await createNotificationSubscription();
    postSubscription(b);
    handleSendNotification();
  }
  useEffect(() => {
    init();
  }, []);

  return <div></div>;
};

export default Subscription;
