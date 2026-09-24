import express from "express"
import { createServer } from "http";
import { Server } from "socket.io"



const app = express()

const server = createServer(app)




server.listen(3000, () => {
    console.log("The server is running...");
})