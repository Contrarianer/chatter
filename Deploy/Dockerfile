FROM node:16.3.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm set registry https://registry.npmmirror.com \
  && npm install pm2 -g \
  && npm install
ENV HOST=0.0.0.0  PORT=3333
EXPOSE 3333
CMD ["pm2-runtime", "start", "app.js", "-i", "max"]