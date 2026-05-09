require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const connectDB = require("./config/db");

const expertRoutes = require("./routes/expertRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const {
    setSocketInstance
} = require("./controllers/bookingController");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

const errorMiddleware = require("./middleware/errorMiddleware");

app.use(errorMiddleware);

app.use("/api/experts", expertRoutes);
app.use("/api/bookings", bookingRoutes);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

setSocketInstance(io);

io.on("connection", (socket) => {
    console.log("User connected");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});