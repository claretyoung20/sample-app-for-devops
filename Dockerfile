# Use the smallest Node.js base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install --only=production

# Copy the rest of the app source code to the container
COPY . .

# Expose the port your app listens on (change it if needed)
EXPOSE 3000

# Start the app
CMD ["node", "dist/app.js"]
