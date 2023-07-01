import express from 'express';
import path from 'path';
import url from 'url';
import { limiter } from './middleware/limiter.js';
import { infoAction } from './action/infoAction.js';
import { checkNicknameAction } from './action/checkNicknameAction.js';
import { handleWebSocketUpgrade, initWebSocket } from './webSocket/connect.js';

const app = express();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const __basedir = path.resolve();

//middlewares
app.use(express.static(path.join(__dirname, '../public')));

// apis
app.get('/api/chat-rooms', limiter, infoAction);
app.get('/api/chat-rooms/:id/check-nickname', limiter, checkNicknameAction);

// 모든 요청에 대해 index.html 반환
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// 서버 실행
const config = await import(path.join('file:///', __basedir, 'config.json'), {
  assert: { type: 'json' },
});
const PORT = config?.default?.port || 3000;
const server = app.listen(PORT, () => {
  console.log(`Chat server is listening on port ${PORT}!`);
});

// WebSocket 서버 초기화
initWebSocket();
server.on('upgrade', handleWebSocketUpgrade);
