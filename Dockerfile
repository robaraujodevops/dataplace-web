FROM node:12

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /usr/src/web

COPY package*.json ./
RUN npm install

EXPOSE 3000
EXPOSE 35729

CMD [ "yarn", "start" ]