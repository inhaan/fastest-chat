import { getChatRoom } from '../global/chatRooms.js';
/** nickname 중복 검증 */
export const checkNicknameAction = (req, res) => {
    const nickname = req.query.nickname;
    const chatRoomId = req.params.id;
    const chatRoom = getChatRoom(chatRoomId);
    if (!chatRoom) {
        res.json({ available: true });
        return;
    }
    const nicknames = chatRoom.getClients().map((client) => client.nickname);
    const available = nicknames.includes(nickname) ? false : true;
    res.json({ available });
};
//# sourceMappingURL=checkNicknameAction.js.map