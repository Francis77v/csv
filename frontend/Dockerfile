FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite in dev mode
CMD ["npm", "run", "dev", "--", "--host"]
# For production, you might want to build the app and serve it with a static server
# CMD ["npm", "run", "build"]
# CMD ["npx", "serve", "dist"]
# Uncomment the above lines to build and serve the production version
# instead of running the development server.