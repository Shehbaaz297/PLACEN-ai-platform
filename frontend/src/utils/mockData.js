// Create a centralized mock data file for the student portal.
// Export:
// 1. studentProfile object (name, email, college, branch, cgpa, skills).
// 2. studentStats object (applications, interviews, offers, profileCompletion).
// 3. studentApplications array with company, role, appliedDate, status.
// This file will act as a fake backend for now.
export const studentProfile = {
  name: "John Doe",
  email: "john.doe@example.com",   
    college: "ABC University",

    branch: "Computer Science",
    cgpa: 8.5,
    skills: ["JavaScript", "React", "Node.js", "CSS"]
};

export const studentStats = {
    applications: 12,
    interviews: 3,
    offers: 1,
    profileCompletion: 85
};

export const studentApplications = [
    {
        company: "Tech Corp",
        role: "Frontend Developer",
        appliedDate: "2024-01-15",
        status: "Interview Scheduled"
    },
    {
        company: "Innovate Ltd",
        role: "Backend Developer",
        appliedDate: "2024-01-20",
        status: "Application Reviewed"
    },
    {
        company: "Web Solutions",
        role: "Full Stack Developer",
        appliedDate: "2024-01-25",
        status: "Offer Received"
    }
];  
// Add mock companyStats object with fields:
// jobsPosted, applicationsReceived, shortlisted, interviews.
export const companyStats = {
    jobsPosted: 5,
    applicationsReceived: 150,
    shortlisted: 30,
    interviews: 10
};