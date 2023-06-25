import express, { Request, Response } from 'express';
import path from 'path';
import { limiter } from './middleware/limiter.js';
import { infoAction } from './action/infoAction.js';
import { checkNicknameAction } from './action/checkNicknameAction.js';
import { handleWebSocketUpgrade, initWebSocket } from './webSocket/connect.js';

const app = express();
const __dirname = path.resolve();

//middlewares
app.use(limiter);

// pages
app.get('/', limiter, (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/:id', limiter, (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// apis
app.get('/api/chat-rooms', limiter, infoAction);
app.get('/api/chat-rooms/:id/check-nickname', limiter, checkNicknameAction);

// 서버 실행
const config = await import(path.join('file:///', __dirname, 'config.json'), {
  assert: { type: 'json' },
});
const PORT = config?.default?.port || 3000;
const server = app.listen(PORT, () => {
  console.log(`Chat server is listening on port ${PORT}!`);
});

// WebSocket 서버 초기화
initWebSocket();
server.on('upgrade', handleWebSocketUpgrade);
