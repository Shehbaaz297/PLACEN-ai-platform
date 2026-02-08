# PlaCEN Backend

Minimal Node.js + Express backend for the PlaCEN placement portal.

## Setup

Install dependencies:
```bash
npm install
```

## Run

Start the server:
```bash
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Server status

### Authentication
- **POST** `/api/login` - Login with role and name
  - Input: `{ role, name }`
  - Output: `{ role, name }`

### Student Endpoints
- **GET** `/api/student/stats` - Get student statistics
- **GET** `/api/student/applications` - Get student applications
- **POST** `/api/student/apply` - Apply to a job
  - Input: `{ jobId }`
  - Output: `{ message, applications }`

### Jobs
- **GET** `/api/jobs` - Get all available jobs

## Mock Data

All data is stored in-memory:
- `studentStats` - Student statistics
- `studentApplications` - List of applications
- `availableJobs` - List of job openings
