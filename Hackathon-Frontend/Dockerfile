# Pull base image
FROM node:10
RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./build ./frontend
#RUN npm cache clean
RUN npm install serve -g
COPY . /frontend
EXPOSE 5000
CMD ["serve","build"]
