# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app/backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python \
    make \
    g++ \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

# Copy app source code
COPY /backend  /usr/src/app/backend

# Install app dependencies
RUN npm install

# Expose the API port
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start"]
