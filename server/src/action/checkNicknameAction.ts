import { Request, Response } from 'express';
import { getChatRoom } from '../global/chatRooms.js';

/** nickname 중복 검증 */
export const checkNicknameAction = (req: Request, res: Response): void => {
  const nickname = req.query.nickname as string;
  const chatRoomId = req.params.id as string;
  const chatRoom = getChatRoom(chatRoomId);
  if (!chatRoom) {
    res.json({ available: true });
    return;
  }

  const nicknames = chatRoom.getClients().map((client) => client.nickname);
  const available = nicknames.includes(nickname) ? false : true;
  res.json({ available });
};
