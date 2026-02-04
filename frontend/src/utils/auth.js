// Mock authentication utility.
// TODO: Replace with real auth integration.
export function getCurrentUser() {
  return {
    role: "tpo", // 👈 THIS controls access
    name: "Shebaaz"
  };
}

