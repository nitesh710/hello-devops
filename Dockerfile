FROM node:18-alpine
WORKDIR /app/src
COPY ./ /app/src
RUN npm install
EXPOSE 5004
CMD ["node", "index.js"]
