const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Configuration
const config = {
  frontend: {
    dir: path.join(__dirname, 'react-grind-up'),
    buildCommand: 'npm run build:prod'
  },
  backend: {
    dir: path.join(__dirname, 'backend'),
    startCommand: 'npm run prod'
  }
};

// Build frontend
console.log('Building frontend...');
try {
  execSync(config.frontend.buildCommand, { 
    cwd: config.frontend.dir,
    stdio: 'inherit'
  });
  console.log('Frontend build completed successfully.');
} catch (error) {
  console.error('Frontend build failed:', error);
  process.exit(1);
}

// Start backend in production mode
console.log('Starting backend in production mode...');
try {
  execSync(config.backend.startCommand, { 
    cwd: config.backend.dir,
    stdio: 'inherit'
  });
} catch (error) {
  console.error('Backend start failed:', error);
  process.exit(1);
}