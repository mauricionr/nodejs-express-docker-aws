FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN ls -l

COPY . /usr/src/app

RUN npm install

RUN ls -l

# Bundle app source

EXPOSE 8080

CMD [ "npm", "run", "start" ]