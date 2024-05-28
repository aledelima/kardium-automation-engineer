# Use Node.js Alpine image as the base image
FROM node:16-alpine AS builder

# Set the working directory inside the container
WORKDIR /kardium-automation-engineer/

# Copy package.json and package-lock.json (if available)
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY public/ public/
COPY src/ src/

# Build the React application
RUN npm run build

# Use Nginx image as the base image to serve the production build
FROM nginx:alpine

# Copy the built static files from the builder stage into the Nginx server's HTML directory
COPY --from=builder /kardium-automation-engineer/build/ /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Command to start Nginx server and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
