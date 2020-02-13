  
FROM node:12

RUN mkdir /react-app
COPY . /react-app
WORKDIR /react-app

ENV PATH /react-app/node_modules/.bin:$PATH

RUN yarn

CMD ["npm", "start"]