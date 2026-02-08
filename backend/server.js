const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// =====================
// In-Memory Mock Data
// =====================

const studentStats = {
  applicationsSubmitted: 12,
  interviewsScheduled: 3,
  offersReceived: 1,
  profileCompletion: 85
};

const studentApplications = [
  {
    id: 1,
    jobId: 101,
    companyName: 'Google',
    position: 'Software Engineer',
    appliedDate: '2025-12-20',
    status: 'Applied'
  },
  {
    id: 2,
    jobId: 102,
    companyName: 'Microsoft',
    position: 'Frontend Developer',
    appliedDate: '2025-12-18',
    status: 'Interview'
  },
  {
    id: 3,
    jobId: 103,
    companyName: 'Amazon',
    position: 'Backend Engineer',
    appliedDate: '2025-12-15',
    status: 'Offer'
  }
];

const availableJobs = [
  {
    id: 101,
    companyName: 'Google',
    position: 'Software Engineer',
    location: 'Bangalore',
    salary: '₹15-20 LPA',
    jobType: 'Placement'
  },
  {
    id: 102,
    companyName: 'Microsoft',
    position: 'Frontend Developer',
    location: 'Hyderabad',
    salary: '₹12-18 LPA',
    jobType: 'Internship'
  },
  {
    id: 103,
    companyName: 'Amazon',
    position: 'Backend Engineer',
    location: 'Mumbai',
    salary: '₹16-22 LPA',
    jobType: 'Placement'
  },
  {
    id: 104,
    companyName: 'Adobe',
    position: 'Product Manager',
    location: 'Noida',
    salary: '₹18-25 LPA',
    jobType: 'Placement'
  }
];

// =====================
// Routes
// =====================

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'PlaCEN backend running'
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { role, name } = req.body;

  if (!role || !name) {
    return res.status(400).json({
      error: 'Missing role or name'
    });
  }

  res.json({
    role,
    name
  });
});

// Get student stats
app.get('/api/student/stats', (req, res) => {
  res.json(studentStats);
});

// Get student applications
app.get('/api/student/applications', (req, res) => {
  res.json(studentApplications);
});

// Get available jobs
app.get('/api/jobs', (req, res) => {
  res.json(availableJobs);
});

// Apply to job
app.post('/api/student/apply', (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    return res.status(400).json({
      error: 'Missing jobId'
    });
  }

  // Check for duplicate application
  const applicationExists = studentApplications.some(app => app.jobId === jobId);
  if (applicationExists) {
    return res.status(400).json({
      error: 'Already applied to this job'
    });
  }

  // Find job details
  const job = availableJobs.find(j => j.id === jobId);
  if (!job) {
    return res.status(404).json({
      error: 'Job not found'
    });
  }

  // Create new application
  const newApplication = {
    id: studentApplications.length + 1,
    jobId: jobId,
    companyName: job.companyName,
    position: job.position,
    appliedDate: new Date().toISOString().split('T')[0],
    status: 'Applied'
  };

  studentApplications.push(newApplication);

  res.status(201).json({
    message: 'Application submitted successfully',
    applications: studentApplications
  });
});

// =====================
// Server
// =====================

app.listen(PORT, () => {
  console.log(`🚀 PlaCEN backend running on http://localhost:${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});
