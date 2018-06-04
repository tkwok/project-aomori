FROM node:boron
WORKDIR /usr/src/server
COPY package.json /usr/src/server
COPY package-lock.json /usr/src/server
RUN npm install
RUN npm install pm2 -g
COPY . /usr/src/server
EXPOSE 3000
CMD ["pm2-docker", "start", "process.json"]