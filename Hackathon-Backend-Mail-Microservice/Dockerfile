FROM node:10
WORKDIR /opt/docker/microservicemailer
COPY . .
RUN ls -a
RUN pwd
RUN npm install
CMD ["npm", "start"]
EXPOSE 8000