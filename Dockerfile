# Gunakan image Node.js sebagai base image
FROM node:18-alpine AS builder

# Set work directory
WORKDIR /app

# Copy package.json dan package-lock.json untuk menginstall dependencies lebih dulu
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Gunakan Nginx sebagai base image untuk tahap produksi
FROM nginx:alpine AS runner

# Copy build output dari tahap sebelumnya ke direktori public Nginx
COPY --from=builder /app/.next /usr/share/nginx/html

# Expose port 3000 (sesuai default Next.js)
EXPOSE 3000

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
