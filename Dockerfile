FROM node:16 as build
WORKDIR /src
COPY . .
RUN npm install
FROM node:16-alpine
COPY --from=build /src /
EXPOSE 4000
RUN npm install
CMD [ "npm", "start"]
