// Mock resume parser (no real PDF parsing)
export function parseResume(file) {
  return {
    skills: ["Java", "Python", "React", "SQL"],
    education: "B.Tech in Computer Science",
    experience: "Internship at Google (6 months)"
  };
}
