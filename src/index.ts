import express from "express";
import http from "http";
import config from "./config";
import { SETTINGS } from "./libs/constants/keys";
import corsSettings from "./libs/cors";

const app = config(express());
const server = http.createServer(app);

app.use(express.json());
var io = require("socket.io")(server, { cors: corsSettings() });
server.listen(SETTINGS.PORT);

io.on("connection", (socket: any) => {
  console.log(`Connected: ${socket.id}`);
  socket.on("disconnect", () => console.log(`Disconnected: ${socket.id}`));
  socket.on("join", (room: any) => {
    console.log(`Socket ${socket.id} joining ${room}`);
    socket.join(room);
  });
  socket.on("chat", (data: any) => {
    const { message, room } = data;
    console.log(`msg: ${message}, room: ${room}`);
    io.to(room).emit("chat", message);
  });
});
