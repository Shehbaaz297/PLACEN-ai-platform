// Mock authentication utility.
// TODO: Replace with real auth integration.
export function getCurrentUser() {
  return {
    role: "student", // 👈 THIS controls access
    name: "Shebaaz"
  };
}

