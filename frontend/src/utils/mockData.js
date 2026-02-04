// Create a centralized mock data file for the student portal.
// Export:
// 1. studentProfile object (name, email, college, branch, cgpa, skills).
// 2. studentStats object (applications, interviews, offers, profileCompletion).
// 3. studentApplications array with company, role, appliedDate, status.
// This file will act as a fake backend for now.

// In-memory store for applications (persists during session)
let applicationsStore = [
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

// Getter for studentApplications (returns current store)
export const getStudentApplications = () => applicationsStore;

// Export initial data for backward compatibility
export const studentApplications = applicationsStore;

// Add mock companyStats object with fields:
// jobsPosted, applicationsReceived, shortlisted, interviews.
export const companyStats = {
    jobsPosted: 5,
    applicationsReceived: 150,
    shortlisted: 30,
    interviews: 10
};

// In-memory store for jobs (persists during session)
let jobsStore = [
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

// Getter for available jobs (returns current store)
export const getAvailableJobs = () => jobsStore;

// Export initial data for backward compatibility
export const availableJobs = jobsStore;

// Utility: Apply to a job and sync with applications
export const applyToJob = (jobId) => {
    // Find the job
    const job = jobsStore.find(j => j.id === jobId);
    if (!job) return false;

    // Check if already applied
    if (job.applied) return false;

    // Check if duplicate application exists
    const alreadyApplied = applicationsStore.some(
        app => app.company === job.company && app.role === job.title
    );
    if (alreadyApplied) return false;

    // Mark job as applied
    job.applied = true;

    // Add to applications
    const today = new Date().toISOString().split('T')[0];
    applicationsStore.push({
        company: job.company,
        role: job.title,
        appliedDate: today,
        status: "Applied"
    });

    return true;
};

// Utility: Get calculated stats based on current applications
export const getCalculatedStats = () => {
    const totalApplications = applicationsStore.length;
    const interviews = applicationsStore.filter(
        app => app.status.includes("Interview")
    ).length;
    const offers = applicationsStore.filter(
        app => app.status.includes("Offer")
    ).length;

    return {
        applications: totalApplications,
        interviews: interviews,
        offers: offers,
        profileCompletion: studentStats.profileCompletion
    };
};

// Alumni Mock Data
export const alumniStats = {
    studentsMentored: 24,
    referralsMade: 8,
    activeMentorships: 5,
    sessionsConducted: 47
};

export const mentorshipRequests = [
    {
        id: 1,
        studentName: "Priya Sharma",
        branch: "Computer Science",
        year: "4th Year",
        requestedSkill: "System Design",
        message: "Looking for guidance on preparation for system design interviews.",
        requestedDate: "2024-01-28"
    },
    {
        id: 2,
        studentName: "Arjun Kumar",
        branch: "Information Technology",
        year: "3rd Year",
        requestedSkill: "Full Stack Development",
        message: "Need mentorship to build full stack projects for portfolio.",
        requestedDate: "2024-01-27"
    },
    {
        id: 3,
        studentName: "Neha Patel",
        branch: "Computer Science",
        year: "Final Year",
        requestedSkill: "Data Science & ML",
        message: "Interested in learning machine learning applications and best practices.",
        requestedDate: "2024-01-26"
    },
    {
        id: 4,
        studentName: "Rohit Singh",
        branch: "Computer Science",
        year: "3rd Year",
        requestedSkill: "Cloud Architecture",
        message: "Want to understand AWS and cloud deployment patterns.",
        requestedDate: "2024-01-25"
    },
    {
        id: 5,
        studentName: "Ananya Gupta",
        branch: "Information Technology",
        year: "Final Year",
        requestedSkill: "Interview Prep",
        message: "Need mock interviews and coding practice for placements.",
        requestedDate: "2024-01-24"
    }
];

export const alumniActivity = [
    {
        id: 1,
        action: "Accepted mentorship request from Rahul Verma",
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        action: "Conducted mentorship session with Priya Sharma",
        timestamp: "5 hours ago"
    },
    {
        id: 3,
        action: "Made referral to Google for Sanjay Nair",
        timestamp: "1 day ago"
    },
    {
        id: 4,
        action: "Completed mentorship with Kavya Singh - Moved to Offer Stage",
        timestamp: "2 days ago"
    },
    {
        id: 5,
        action: "Made referral to Microsoft for Divya Kumari",
        timestamp: "3 days ago"
    },
    {
        id: 6,
        action: "Accepted mentorship request from Vivek Rao",
        timestamp: "3 days ago"
    }
];

// TPO Mock Data
export const tpoStats = {
    totalStudents: 485,
    companiesRegistered: 42,
    studentsPlaced: 328,
    averagePackage: "7.8 LPA"
};

export const collegeStudents = [
    {
        id: 1,
        name: "Aarav Sharma",
        branch: "Computer Science",
        cgpa: 8.9,
        placementStatus: "Placed",
        company: "Google"
    },
    {
        id: 2,
        name: "Diya Patel",
        branch: "Information Technology",
        cgpa: 8.7,
        placementStatus: "Placed",
        company: "Microsoft"
    },
    {
        id: 3,
        name: "Vihaan Kumar",
        branch: "Computer Science",
        cgpa: 8.5,
        placementStatus: "Not Placed",
        company: "-"
    },
    {
        id: 4,
        name: "Ananya Singh",
        branch: "Electronics",
        cgpa: 8.3,
        placementStatus: "Placed",
        company: "Amazon"
    },
    {
        id: 5,
        name: "Arjun Reddy",
        branch: "Information Technology",
        cgpa: 8.8,
        placementStatus: "Placed",
        company: "Adobe"
    },
    {
        id: 6,
        name: "Isha Gupta",
        branch: "Computer Science",
        cgpa: 9.1,
        placementStatus: "Placed",
        company: "Google"
    },
    {
        id: 7,
        name: "Rohan Verma",
        branch: "Information Technology",
        cgpa: 7.9,
        placementStatus: "Not Placed",
        company: "-"
    },
    {
        id: 8,
        name: "Anika Joshi",
        branch: "Computer Science",
        cgpa: 8.6,
        placementStatus: "Placed",
        company: "Flipkart"
    }
];

export const partnerCompanies = [
    {
        id: 1,
        companyName: "Google",
        rolesOffered: "SDE, SDE-2",
        studentsHired: 18,
        package: "18-25 LPA"
    },
    {
        id: 2,
        companyName: "Microsoft",
        rolesOffered: "Software Engineer",
        studentsHired: 22,
        package: "15-20 LPA"
    },
    {
        id: 3,
        companyName: "Amazon",
        rolesOffered: "SDE-1, SDE-2",
        studentsHired: 35,
        package: "12-18 LPA"
    },
    {
        id: 4,
        companyName: "Adobe",
        rolesOffered: "Software Engineer",
        studentsHired: 12,
        package: "14-18 LPA"
    },
    {
        id: 5,
        companyName: "Flipkart",
        rolesOffered: "SDE, Data Analyst",
        studentsHired: 28,
        package: "10-15 LPA"
    },
    {
        id: 6,
        companyName: "Oracle",
        rolesOffered: "Application Developer",
        studentsHired: 15,
        package: "8-12 LPA"
    },
    {
        id: 7,
        companyName: "Infosys",
        rolesOffered: "System Engineer",
        studentsHired: 45,
        package: "4-6 LPA"
    },
    {
        id: 8,
        companyName: "TCS",
        rolesOffered: "Developer, Analyst",
        studentsHired: 52,
        package: "3.5-5.5 LPA"
    }
];