import { Request, Response } from 'express';
import { getChatRooms } from '../global/chatRooms.js';

/** 전체 채팅방 정보 */
export const infoAction = (_: Request, res: Response): void => {
  const chatRooms = getChatRooms();

  res.json({
    rooms: chatRooms.length,
    clients: chatRooms.reduce((acc, room) => acc + room.getClients().length, 0),
  });
};
