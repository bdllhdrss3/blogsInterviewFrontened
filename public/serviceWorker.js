function receivePushNotification(event) {
  const { title, body } = event.data.json();
  const options = {
    body: body,
    vibrate: [200, 100, 200],
    actions: [
      {
        action: "view",
        title: title,
        icon: "https://via.placeholder.com/128/ff0000",
      },
    ],
  };
  event.waitUntil(self.registration.showNotification(title, options));
}

self.addEventListener("push", receivePushNotification);
