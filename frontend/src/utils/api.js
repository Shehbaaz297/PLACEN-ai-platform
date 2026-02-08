/**
 * Centralized API configuration and utility functions
 * Provides a single source of truth for all backend API calls
 * Falls back to mock data if backend is unavailable
 */

import {
  studentStats as defaultStats,
  getStudentApplications as getMockApplications,
  getAvailableJobs as getMockJobs,
  applyToJob as applyToJobMock
} from './mockData';

// Get API base URL from environment or default to localhost

const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
};


export const API_BASE = getApiBaseUrl();

/**
 * Wrapper for fetch with error handling and logging
 * @param {string} endpoint - The API endpoint (without base URL)
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<{data?: any, error?: string, success: boolean}>}
 */
export const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error.message);
    return { error: error.message, success: false };
  }
};

/**
 * Get student stats with fallback to mock data
 * @returns {Promise<{stats: object, fromMock: boolean}>}
 */
export const getStudentStats = async () => {
  const result = await apiFetch('/student/stats');
  
  if (result.success) {
    return {
      stats: {
        applications: result.data.applicationsSubmitted,
        interviews: result.data.interviewsScheduled,
        offers: result.data.offersReceived,
        profileCompletion: result.data.profileCompletion
      },
      fromMock: false
    };
  }

  console.warn('Using mock stats data');
  return {
    stats: defaultStats,
    fromMock: true
  };
};

/**
 * Fetch student applications with fallback to mock data
 * @returns {Promise<{applications: array, fromMock: boolean}>}
 */
export const fetchStudentApplications = async () => {
  const result = await apiFetch('/student/applications');
  
  if (result.success) {
    const applications = result.data.map(app => ({
      company: app.companyName,
      role: app.position,
      appliedDate: app.appliedDate,
      status: app.status
    }));
    return { applications, fromMock: false };
  }

  console.warn('Using mock applications data');
  const mockApps = getMockApplications();
  return { applications: mockApps, fromMock: true };
};

/**
 * Fetch available jobs with fallback to mock data
 * @returns {Promise<{jobs: array, fromMock: boolean}>}
 */
export const fetchAvailableJobs = async () => {
  const result = await apiFetch('/jobs');
  
  if (result.success) {
    const jobs = result.data.map(job => ({
      id: job.id,
      company: job.companyName,
      title: job.position,
      type: job.jobType,
      location: job.location,
      package: job.salary,
      skills: [],
      applied: false
    }));
    return { jobs, fromMock: false };
  }

  console.warn('Using mock jobs data');
  const mockJobs = getMockJobs();
  return { jobs: mockJobs, fromMock: true };
};

/**
 * Apply to a job with fallback to mock apply
 * @param {number} jobId - The job ID to apply to
 * @returns {Promise<{success: boolean, error?: string, usedMock: boolean}>}
 */
export const applyToJobAPI = async (jobId) => {
  const result = await apiFetch('/student/apply', {
    method: 'POST',
    body: JSON.stringify({ jobId })
  });

  if (result.success) {
    return { success: true, usedMock: false };
  }

  console.warn('Using mock apply logic');
  const mockSuccess = applyToJobMock(jobId);
  
  if (!mockSuccess) {
    return {
      success: false,
      error: 'Already applied to this job',
      usedMock: true
    };
  }

  return { success: true, usedMock: true };
};

/**
 * Check backend health / connectivity
 * @returns {Promise<boolean>}
 */
export const checkBackendHealth = async () => {
  const result = await apiFetch('/health');
  return result.success;
};
