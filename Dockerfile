# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose a port (optional, only if your application listens on a specific port)
EXPOSE 8002

# Specify the command to run your application
CMD ["node", "index.js"]
