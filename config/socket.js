import { Server } from "socket.io";

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("client connected: ", socket.id);

    socket.join("clock-room");

    socket.on("disconnect", (reason) => {
      console.log("client disconnect: ", reason);
    });
  });

  setInterval(() => {
    io.to("clock-room").emit("time", new Date());
  }, 1000);

  return io;
};

export default setupSocket;
