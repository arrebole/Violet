FROM ubuntu:18.10
WORKDIR /home/websit/nodejs
COPY ./v1 /home/websit/nodejs
RUN apt-get update
RUN apt-get install nodejs npm -y
RUN npm install
EXPOSE 3000
CMD node service.js