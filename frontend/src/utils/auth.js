// Mock authentication utility.
// Uses localStorage for session persistence.

const AUTH_KEY = 'placen_user';

export function getCurrentUser() {
  try {
    const userStr = localStorage.getItem(AUTH_KEY);
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  } catch (error) {
    console.error('Error reading user from localStorage:', error);
    return null;
  }
}

export function login(name, role) {
  const user = { name, role };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}

