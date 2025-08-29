# --- Stage 1: Build ----------------------------------------------------------
FROM node:20-alpine AS builder

# Optional: speed up installs
ENV CI=true
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest and build
COPY . .

RUN npm run build

# --- Stage 2: Serve with Nginx ----------------------------------------------
FROM nginx:alpine

# Replace default nginx site with an SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: healthcheck
HEALTHCHECK CMD wget -qO- http://127.0.0.1 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
