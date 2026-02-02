const containerStyle = {
	padding: '24px'
};

const cardStyle = {
	background: 'var(--card-bg, #fff)',
	borderRadius: '12px',
	padding: '24px',
	boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
	border: '1px solid var(--border-color, #e5e7eb)'
};

const formGridStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
	gap: '16px'
};

const labelStyle = {
	fontSize: '13px',
	color: 'var(--text-muted, #6b7280)',
	marginBottom: '6px',
	display: 'block'
};

const inputStyle = {
	width: '100%',
	padding: '10px 12px',
	borderRadius: '8px',
	border: '1px solid var(--border-color, #e5e7eb)',
	background: 'var(--input-bg, #fff)',
	fontSize: '14px'
};

const textareaStyle = {
	...inputStyle,
	minHeight: '120px',
	resize: 'vertical'
};

const sectionTitleStyle = {
	margin: '0 0 16px 0',
	fontSize: '18px'
};

function Postjob() {
	return (
		<div style={containerStyle}>
			<h2 style={{ margin: 0 }}>Post a Job</h2>
			<p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
				Create a new opening for students to apply.
			</p>

			<div style={{ marginTop: '24px' }}>
				<div style={cardStyle}>
					<h3 style={sectionTitleStyle}>Job Details</h3>
					<form style={formGridStyle}>
						<div>
							<label style={labelStyle} htmlFor="jobTitle">
								Job Title
							</label>
							<input id="jobTitle" type="text" placeholder="e.g. Frontend Developer" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="jobType">
								Job Type
							</label>
							<select id="jobType" style={inputStyle} defaultValue="">
								<option value="" disabled>
									Select type
								</option>
								<option value="Internship">Internship</option>
								<option value="Placement">Placement</option>
							</select>
						</div>

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={labelStyle} htmlFor="description">
								Description
							</label>
							<textarea
								id="description"
								placeholder="Describe responsibilities, expectations, and benefits"
								style={textareaStyle}
							/>
						</div>

						<div style={{ gridColumn: '1 / -1' }}>
							<label style={labelStyle} htmlFor="skills">
								Required Skills
							</label>
							<input id="skills" type="text" placeholder="e.g. React, Node.js, SQL" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="branch">
								Eligibility - Branch
							</label>
							<input id="branch" type="text" placeholder="e.g. CSE, IT" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="cgpa">
								Eligibility - CGPA
							</label>
							<input id="cgpa" type="text" placeholder="e.g. 7.0+" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="location">
								Location
							</label>
							<input id="location" type="text" placeholder="e.g. Bengaluru" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="package">
								Package / Stipend
							</label>
							<input id="package" type="text" placeholder="e.g. 10 LPA or 25k/month" style={inputStyle} />
						</div>

						<div>
							<label style={labelStyle} htmlFor="deadline">
								Application Deadline
							</label>
							<input id="deadline" type="date" style={inputStyle} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Postjob;
