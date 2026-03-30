// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Firebase configuration (must match firebase.js)
firebase.initializeApp({
  apiKey: "AIzaSyCDmsPUtnY-S9XJnvMxGUAi6zskrdyp-uo",
  authDomain: "mateandmentor-83864.firebaseapp.com",
  projectId: "mateandmentor-83864",
  storageBucket: "mateandmentor-83864.firebasestorage.app",
  messagingSenderId: "305523793072",
  appId: "1:305523793072:web:911391fdf9e4bd054e2f75",
  measurementId: "G-T3VEG8DTC8"
});

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  // Check if this is an incoming call notification
  const isIncomingCall = 
    payload.data?.type === 'incoming_call' || 
    payload.data?.type === 'call' || 
    payload.data?.type === 'ringing' ||
    payload.data?.event === 'RINGING' ||
    payload.data?.event === 'incoming_call';

  // Customize notification here
  const notificationTitle = payload.notification?.title || 'New Message';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: '/logo192.png',
    badge: '/logo192.png',
    sound: 'default',
    vibrate: [200, 100, 200],
    data: payload.data, // Include data for click handling
    tag: isIncomingCall ? 'incoming-call' : 'notification',
    requireInteraction: isIncomingCall // Keep call notifications visible
  };

  // Show notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  const notification = event.notification;
  const data = notification.data;
  
  // Close the notification
  notification.close();
  
  // Check if this is an incoming call notification
  const isIncomingCall = 
    data?.type === 'incoming_call' || 
    data?.type === 'call' || 
    data?.type === 'ringing' ||
    data?.event === 'RINGING' ||
    data?.event === 'incoming_call';
  
  if (isIncomingCall) {
    console.log('Incoming call notification clicked, sending message to clients');
    // Send message to all clients (tabs) to show incoming call popup
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
        console.log('Found clients:', clients.length);
        
        // Send message to all clients
        clients.forEach((client) => {
          console.log('Sending message to client:', client.url);
          client.postMessage({
            type: 'INCOMING_CALL',
            data: data
          });
        });
        
        // Focus on the first available client
        if (clients.length > 0) {
          return clients[0].focus();
        }
        
        // If no client is open, open a new one
        return self.clients.openWindow('/');
      })
    );
  } else {
    // For regular notifications, just focus/open the app
    event.waitUntil(
      self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
        if (clients.length > 0) {
          return clients[0].focus();
        }
        return self.clients.openWindow('/');
      })
    );
  }
});

// Handle push event (for when notification is received)
self.addEventListener('push', (event) => {
  console.log('Push event received:', event);
  
  if (event.data) {
    const payload = event.data.json();
    console.log('Push payload:', payload);
    
    // Check if this is an incoming call notification
    const isIncomingCall = 
      payload.data?.type === 'incoming_call' || 
      payload.data?.type === 'call' || 
      payload.data?.type === 'ringing' ||
      payload.data?.event === 'RINGING' ||
      payload.data?.event === 'incoming_call';
    
    if (isIncomingCall) {
      console.log('Incoming call detected in push event, sending message to clients');
      // Send message to all clients (tabs) to show incoming call popup
      event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
          console.log('Found clients:', clients.length);
          
          // Send message to all clients
          clients.forEach((client) => {
            console.log('Sending message to client:', client.url);
            client.postMessage({
              type: 'INCOMING_CALL',
              data: payload.data
            });
          });
        })
      );
    }
  }
});
