# Use Node.js LTS version (Vite requires Node.js 20.19+ or 22.12+)
FROM node:22-alpine

# Set working directory
WORKDIR /frontend

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev"]
