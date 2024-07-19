# 기본 이미지로 Node.js LTS 버전 사용
FROM node:20

# 애플리케이션 디렉터리 생성
WORKDIR /usr/src/app

# 소스 파일을 WORKDIR로 복사
COPY . .

# 의존성 설치
RUN ["npm", "install"]

# 애플리케이션이 5000 포트를 사용
EXPOSE 5000

# 애플리케이션 실행
CMD ["npx", "pm2-runtime", "start", "ecosystem.config.cjs", "--env", "production"]