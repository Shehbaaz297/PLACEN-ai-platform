# Authentication & Role System Design

## Roles
- Student
- Company
- Alumni
- TPO

## Registration Flow
1. User selects role
2. Role-based registration form
3. Account created with PENDING status
4. Email verification required
5. Account becomes ACTIVE after verification

## Login Flow
- Email + Password
- Role validation on backend
- Redirect to role-specific dashboard

## Access Control
- Backend enforces role-based access
- Frontend only controls UI visibility

## User Status
- PENDING: Registered but not verified
- ACTIVE: Verified and allowed access
- BLOCKED: Access disabled by admin/TPO
