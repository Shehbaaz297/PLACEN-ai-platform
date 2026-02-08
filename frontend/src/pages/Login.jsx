import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

function Login() {
	const [name, setName] = useState('');
	const [role, setRole] = useState('student');
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		
		if (!name.trim()) {
			alert('Please enter your name');
			return;
		}

		// Save user to localStorage
		login(name, role);

		// Redirect based on role
		const routes = {
			student: '/student/dashboard',
			company: '/company/dashboard',
			alumni: '/alumni/dashboard',
			tpo: '/tpo/dashboard'
		};

		navigate(routes[role] || '/');
	};

	return (
		<div style={{
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'linear-gradient(135deg, var(--primary, #6a6ff5) 0%, var(--primary-dark, #7a5cf0) 100%)',
			padding: '24px'
		}}>
			<div style={{
				background: 'var(--card-bg, #fff)',
				padding: '40px',
				borderRadius: '16px',
				boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
				width: '100%',
				maxWidth: '420px'
			}}>
				{/* Header */}
				<div style={{ textAlign: 'center', marginBottom: '32px' }}>
					<h1 style={{
						fontSize: '28px',
						fontWeight: '700',
						margin: '0 0 8px 0',
						color: 'var(--text-dark)'
					}}>
						Welcome to PlaCEN
					</h1>
					<p style={{
						fontSize: '14px',
						color: 'var(--text-muted)',
						margin: 0
					}}>
						AI-Powered Placement Portal
					</p>
				</div>

				{/* Login Form */}
				<form onSubmit={handleLogin}>
					{/* Name Input */}
					<div style={{ marginBottom: '20px' }}>
						<label style={{
							display: 'block',
							fontSize: '14px',
							fontWeight: '600',
							color: 'var(--text-dark)',
							marginBottom: '8px'
						}}>
							Name
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Enter your name"
							style={{
								width: '100%',
								padding: '12px 16px',
								fontSize: '14px',
								border: '1px solid var(--border-color, #e5e7eb)',
								borderRadius: '8px',
								outline: 'none',
								transition: 'border-color 0.2s ease',
								boxSizing: 'border-box'
							}}
							onFocus={(e) => {
								e.target.style.borderColor = 'var(--primary, #6a6ff5)';
							}}
							onBlur={(e) => {
								e.target.style.borderColor = 'var(--border-color, #e5e7eb)';
							}}
						/>
					</div>

					{/* Role Dropdown */}
					<div style={{ marginBottom: '28px' }}>
						<label style={{
							display: 'block',
							fontSize: '14px',
							fontWeight: '600',
							color: 'var(--text-dark)',
							marginBottom: '8px'
						}}>
							Role
						</label>
						<select
							value={role}
							onChange={(e) => setRole(e.target.value)}
							style={{
								width: '100%',
								padding: '12px 16px',
								fontSize: '14px',
								border: '1px solid var(--border-color, #e5e7eb)',
								borderRadius: '8px',
								outline: 'none',
								transition: 'border-color 0.2s ease',
								boxSizing: 'border-box',
								background: 'var(--card-bg, #fff)',
								cursor: 'pointer'
							}}
							onFocus={(e) => {
								e.target.style.borderColor = 'var(--primary, #6a6ff5)';
							}}
							onBlur={(e) => {
								e.target.style.borderColor = 'var(--border-color, #e5e7eb)';
							}}
						>
							<option value="student">Student</option>
							<option value="company">Company</option>
							<option value="alumni">Alumni</option>
							<option value="tpo">TPO (Training & Placement Officer)</option>
						</select>
					</div>

					{/* Login Button */}
					<button
						type="submit"
						style={{
							width: '100%',
							padding: '14px',
							fontSize: '16px',
							fontWeight: '600',
							color: '#ffffff',
							background: 'var(--primary, #6a6ff5)',
							border: 'none',
							borderRadius: '8px',
							cursor: 'pointer',
							transition: 'all 0.2s ease'
						}}
						onMouseEnter={(e) => {
							e.target.style.background = 'var(--primary-dark, #7a5cf0)';
							e.target.style.transform = 'translateY(-1px)';
							e.target.style.boxShadow = '0 6px 20px rgba(106, 111, 245, 0.4)';
						}}
						onMouseLeave={(e) => {
							e.target.style.background = 'var(--primary, #6a6ff5)';
							e.target.style.transform = 'translateY(0)';
							e.target.style.boxShadow = 'none';
						}}
					>
						Login
					</button>
				</form>

				{/* Demo Info */}
				<div style={{
					marginTop: '24px',
					padding: '16px',
					background: 'rgba(106, 111, 245, 0.08)',
					borderRadius: '8px',
					borderLeft: '4px solid var(--primary, #6a6ff5)'
				}}>
					<p style={{
						fontSize: '12px',
						color: 'var(--text-muted)',
						margin: 0,
						lineHeight: '1.5'
					}}>
						<strong style={{ color: 'var(--text-dark)' }}>Demo Mode:</strong> Enter any name and select a role to explore the portal. No real authentication required.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
