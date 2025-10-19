const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/database');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// Compress responses
app.use(compression());

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const profileRoutes = require('./routes/profile');
app.use('/api/profile', profileRoutes);

const placementRoutes = require('./routes/placement');
app.use('/api/placements', placementRoutes);

const inviteRoutes = require('./routes/invite');
app.use('/api/invites', inviteRoutes);

const jobRoutes = require('./routes/job');
app.use('/api/jobs', jobRoutes);

// New model routes
const collegeRoutes = require('./routes/college');
app.use('/api/colleges', collegeRoutes);

const companyRoutes = require('./routes/company');
app.use('/api/companies', companyRoutes);

const jobPostsRoutes = require('./routes/jobPosts');
app.use('/api/job-posts', jobPostsRoutes);

const jobApplicationRoutes = require('./routes/jobApplication');
app.use('/api/job-applications', jobApplicationRoutes);

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../react-grind-up/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../react-grind-up/dist', 'index.html'));
  });
} else {
  // Basic route for development
  app.get('/', (req, res) => {
    res.send('GrindUp API is running...');
  });
}

module.exports = app;