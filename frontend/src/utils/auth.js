// Mock authentication utility.
// TODO: Replace with real auth integration.

export function getCurrentUser() {
	return {
		role: 'company',
		name: 'John Doe'
	};
}
