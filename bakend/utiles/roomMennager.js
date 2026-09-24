const rooms = new Map()
const socketToRoom = new Map()




function createRoom(name, socketId) {
    let id = getRandomCode()
    while (!isRoomExists(id)) {
        id = getRandomCode()
    }
    rooms.set(id, room(socketId, name))
}


function joinRoom(name, roomCode, socketId) {
    if (!isRoomExists(roomCode)) return false
    const room = rooms.get(roomCode)
    if (room.status !== "waiting") return false;
    if (room.players.length === 2) return false;
    room.players.forEach((player) =>{if (player.socketId === socketId) return false});
    room.players.push({socketId, name, color: "black"});
    rooms.set(roomCode, room)
    return room
}



function startGame(socketId){
    
}



function isRoomExists(id) {
    return rooms.has(id)
}



function room(socketId, name) {
    return {
        status: "waiting",
        ownerSocketId: socketId,
        players: [{ socketId, name, color: "white" }],
        game: null,
        rematchAcceptedBy: []
    }
}















function getRandomCode() {
    const words = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    let random = "";
    while (random.length < 6) {
        random += words[Math.floor(Math.random() * words.length)]
    }
    return random
}

