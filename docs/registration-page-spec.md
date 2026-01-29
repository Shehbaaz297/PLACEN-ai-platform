# Role-Based Registration Page Specification

## Supported Roles
- Student
- Company
- Alumni
- TPO

## Common Fields (All Roles)
- Full Name
- Email
- Password
- Confirm Password

## Role-Specific Fields

### Student
- College Name
- Branch
- Batch
- Phone Number

### Company
- Company Name
- Industry
- Contact Person Name
- Phone Number
- Website

### Alumni
- College Name
- Branch
- Graduation Year
- Current Company

### TPO
- College Name
- Official Email
- Phone Number
- College ID / Verification Code

## Functional Requirements
- Role selection before form display
- Dynamic form fields based on role
- Client-side validation
- Password strength check
- Terms & Conditions checkbox
- Submit button disabled until valid

## Output
- Create user with role and PENDING status
- Trigger email verification
