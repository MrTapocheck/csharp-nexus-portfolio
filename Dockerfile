
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all app files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
