FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

ENV NODE_ENV=production



# Start the application
CMD ["npm", "start"]