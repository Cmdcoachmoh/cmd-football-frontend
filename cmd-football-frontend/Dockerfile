# Base image with full Node.js and native build tools
FROM node:18

# Install native dependencies for canvas
RUN apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libjpeg-dev \
  libpango1.0-dev \
  libgif-dev \
  librsvg2-dev \
  python3 \
  python3-pip \
  python3-setuptools

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Expose port used by Vite preview
EXPOSE 4173

# Start the app using Vite preview
CMD ["npm", "run", "preview"]
