# base image
FROM node:18

# working directory
WORKDIR /app

# package files copy
COPY package*.json ./

# dependencies install
RUN npm install

# baaki code copy
COPY . .

# port expose
EXPOSE 3000

# start command
CMD ["npm", "start"]