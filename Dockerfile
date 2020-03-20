FROM node:10.7

# Create destination directory
RUN mkdir -p /usr/src/breenGrow-frontend
WORKDIR /usr/src/breenGrow-frontend

RUN cd ../
COPY package*.json ./
RUN npm install

# Run server
CMD [ "npm", "run", "dev"]
