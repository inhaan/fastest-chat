import { rateLimit } from 'express-rate-limit';

// express-rate-limit 설정
export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1분
  max: 10, // 최대 요청 횟수
  message: 'Too many requests from this IP, please try again later.',
});
