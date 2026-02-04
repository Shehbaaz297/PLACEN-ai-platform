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

export const availableJobs = [
    {
        id: 1,
        company: "Tech Corp",
        title: "Frontend Developer Intern",
        type: "Internship",
        location: "Bangalore, India",
        package: "₹15,000/month",
        skills: ["React", "JavaScript", "CSS"],
        applied: false
    },
    {
        id: 2,
        company: "Innovate Ltd",
        title: "Full Stack Developer",
        type: "Placement",
        location: "Hyderabad, India",
        package: "₹8 - 10 LPA",
        skills: ["Node.js", "React", "MongoDB", "AWS"],
        applied: false
    },
    {
        id: 3,
        company: "Web Solutions",
        title: "Backend Developer Intern",
        type: "Internship",
        location: "Mumbai, India",
        package: "₹12,000/month",
        skills: ["Python", "Django", "SQL"],
        applied: false
    },
    {
        id: 4,
        company: "Cloud Systems",
        title: "DevOps Engineer",
        type: "Placement",
        location: "Pune, India",
        package: "₹12 - 15 LPA",
        skills: ["Docker", "Kubernetes", "CI/CD", "Linux"],
        applied: false
    },
    {
        id: 5,
        company: "Data Insights",
        title: "Data Science Intern",
        type: "Internship",
        location: "Remote",
        package: "₹18,000/month",
        skills: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
        applied: false
    },
    {
        id: 6,
        company: "Mobile First",
        title: "iOS Developer",
        type: "Placement",
        location: "Bangalore, India",
        package: "₹10 - 13 LPA",
        skills: ["Swift", "Xcode", "iOS", "REST APIs"],
        applied: false
    },
    {
        id: 7,
        company: "E-Commerce Hub",
        title: "Android Developer Intern",
        type: "Internship",
        location: "Delhi, India",
        package: "₹14,000/month",
        skills: ["Kotlin", "Android", "Java", "Firebase"],
        applied: false
    },
    {
        id: 8,
        company: "Finance Tech",
        title: "QA Engineer",
        type: "Placement",
        location: "Gurgaon, India",
        package: "₹6.5 - 9 LPA",
        skills: ["Selenium", "Testing", "Automation", "Java"],
        applied: false
    }
];