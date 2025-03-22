# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Set environment variables for build
ENV NODE_ENV=production
ENV VITE_APP_TITLE=Analytechs
ENV VITE_APP_DESCRIPTION="Solutions de Business Intelligence, Data Analytics et Conseil en Management"
ENV VITE_DOMAIN=analytechs.tech

# Accept build-time arguments
ARG VITE_STRAPI_URL
ENV VITE_STRAPI_URL=$VITE_STRAPI_URL

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy SSL certificates into the container
COPY certs /etc/letsencrypt/live/analytechs.tech

# Expose ports
EXPOSE 80 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]