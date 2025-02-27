FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ✅ Copy SSL certificates into the container
COPY certs /etc/nginx/certs

# Ajoute le port 443 pour HTTPS
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
