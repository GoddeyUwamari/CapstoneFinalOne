FROM node:16
WORKDIR /app
COPY pakcage.json /app
RUN npm install
COPY . /app
EXPOSE 3000
EXPOSE 5001
RUN npm run start:backend
CMD [ "npm","run","start:frontend" ]