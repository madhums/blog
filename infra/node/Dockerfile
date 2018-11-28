FROM node:10.12.0-alpine

WORKDIR /app
# https://stackoverflow.com/a/32785014/232619
COPY src /app 
RUN npm install

EXPOSE 80

CMD ["npm", "start"]
