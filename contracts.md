# Formas Equipamiento - API Contracts

## Frontend-Backend Integration Plan

### Current Mock Data (to be replaced)
**File:** `/app/frontend/src/mock.js`
- `submitContactForm()` - Simulates form submission

### Backend Implementation Needed

#### 1. Contact Form API

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "message": "string (required)"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Gracias por tu mensaje. Te contactaremos pronto.",
  "id": "string"
}
```

**Response (Error - 400/500):**
```json
{
  "success": false,
  "message": "Error message"
}
```

#### 2. Database Schema

**Collection:** `contact_messages`

**Document Structure:**
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "string (default: 'new')"
}
```

### Frontend Changes Required

**File:** `/app/frontend/src/pages/Home.jsx`

**Changes:**
1. Update `handleSubmit` function to call backend API instead of mock
2. Replace mock import: Remove `submitContactForm` from mock.js
3. Use axios to POST to `${API}/contact`
4. Keep existing toast notifications for success/error feedback

**Code Update:**
```javascript
// Remove from imports:
import { submitContactForm } from '../mock';

// Update handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    toast({
      title: "¡Mensaje Enviado!",
      description: response.data.message,
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: error.response?.data?.message || "Hubo un problema al enviar el mensaje.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Backend Implementation Steps

1. Create Pydantic model for contact form validation
2. Create MongoDB collection handler
3. Implement POST endpoint with validation
4. Add error handling for database operations
5. Return proper status codes and messages

### Testing Checklist

- [ ] Form validation works (required fields)
- [ ] Successful submission saves to database
- [ ] Success toast appears on successful submission
- [ ] Error toast appears on failure
- [ ] Form clears after successful submission
- [ ] Database stores all fields correctly with timestamp
- [ ] API returns proper error messages for invalid data
