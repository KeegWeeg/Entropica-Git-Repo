Realtime Button Counter

A small experiment using **Socket.IO** to sync button click counts in real-time between users.

---

Tech Stack

- HTML / JS (frontend)
- Socket.IO 
- Node.js 

---

How It Works

- When a user clicks a button, the event is sent to the server via `socket.emit`
- The server updates the count and broadcasts it back using `socket.on('updateCount')`
- All connected clients see the updated count immediately

---

Purpose

Built to test real-time events and learn how client-server WebSocket communication works in practice.

Just Seeing How Socket Works!

---
