# Backend Integration Guide

This document outlines how to integrate the React frontend with your backend API.

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Backend API Configuration
REACT_APP_API_URL=http://localhost:3001/api

# Development settings
REACT_APP_ENV=development
```

## Backend API Endpoints Expected

The frontend expects the following API endpoints:

### Authentication Endpoints

#### POST /api/auth/login
**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "email": "email@example.com",
      "type": "college" | "company",
      "collegeName": "College Name" // if type is college
      "companyName": "Company Name" // if type is company
    }
  }
}
```

#### POST /api/auth/register/college
**Request Body:**
```json
{
  "password": "string",
  "collegeName": "string",
  "email": "string",
  "contactNo": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "email": "email@example.com",
      "type": "college",
      "collegeName": "College Name"
    }
  }
}
```

#### POST /api/auth/register/company
**Request Body:**
```json
{
  "companyName": "string",
  "password": "string",
  "email": "string",
  "contactNo": "string",
  "industry": "string",
  "companySize": "string",
  "location": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "email": "email@example.com",
      "type": "company",
      "companyName": "Company Name"
    }
  }
}
```

#### GET /api/auth/me
**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "email@example.com",
    "type": "college" | "company",
    "collegeName": "College Name" // if type is college
    "companyName": "Company Name" // if type is company
  }
}
```

#### POST /api/auth/logout
**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

### Error Response Format

All endpoints should return errors in this format:

```json
{
  "success": false,
  "message": "Error message here"
}
```

## Frontend Features Implemented

### 1. Authentication Context
- Global state management for user authentication
- Automatic token handling
- Session persistence
- Logout functionality

### 2. Form Validation
- Client-side validation for all forms
- Real-time error display
- Password strength validation
- Email format validation
- Phone number validation

### 3. API Integration
- Axios-based HTTP client
- Request/response interceptors
- Automatic token attachment
- Error handling

### 4. User Experience
- Loading states during API calls
- Success/error message display
- Form validation feedback
- Responsive design

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment:**
   - Create `.env` file with your backend URL
   - Update `REACT_APP_API_URL` to match your backend

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Backend Requirements:**
   - Ensure your backend is running on the configured port
   - Implement the required API endpoints
   - Set up CORS for frontend domain
   - Implement JWT token authentication

## CORS Configuration

Your backend should allow requests from the frontend domain:

```javascript
// Example for Express.js
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));
```

## Testing the Integration

1. **Test Registration:**
   - Navigate to register page
   - Fill out the form
   - Submit and verify backend receives data

2. **Test Login:**
   - Use registered credentials
   - Verify token is stored
   - Check user state updates

3. **Test Authentication:**
   - Verify protected routes work
   - Test logout functionality
   - Check token persistence

## Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Ensure backend allows frontend origin
   - Check if credentials are enabled

2. **Token Issues:**
   - Verify JWT implementation
   - Check token expiration
   - Ensure proper header format

3. **API Connection:**
   - Verify backend URL in .env
   - Check if backend is running
   - Test endpoints with Postman/curl

### Debug Mode:

Add this to your `.env` for detailed logging:
```env
REACT_APP_DEBUG=true
```

## Next Steps

After successful integration:

1. Implement protected routes
2. Add profile management
3. Integrate placements API
4. Add real-time notifications
5. Implement file uploads
6. Add social login options

