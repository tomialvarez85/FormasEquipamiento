#!/usr/bin/env python3
"""
Backend API Testing for Formas Equipamiento Contact Form
Tests the FastAPI backend endpoints for contact form functionality
"""

import requests
import json
import sys
from datetime import datetime
import time

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

print(f"🔗 Testing backend at: {BASE_URL}")

# Test data
VALID_CONTACT_DATA = {
    "name": "María González",
    "email": "maria@example.com", 
    "phone": "+54 11 1234-5678",
    "message": "Me interesa cotizar muebles para mi cocina"
}

INVALID_EMAIL_DATA = {
    "name": "Juan Pérez",
    "email": "invalid-email",
    "phone": "+54 11 9876-5432", 
    "message": "Consulta sobre muebles de dormitorio"
}

MISSING_FIELDS_DATA = {
    "name": "Ana López",
    "email": "ana@example.com"
    # Missing phone and message
}

def test_post_contact_valid_data():
    """Test POST /api/contact with valid data"""
    print("\n🧪 Testing POST /api/contact with valid data...")
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=VALID_CONTACT_DATA,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "Gracias por tu mensaje" in data.get("message", ""):
                print("✅ POST /api/contact with valid data: PASSED")
                return True, data.get("id")
            else:
                print("❌ POST /api/contact with valid data: FAILED - Invalid response format")
                return False, None
        else:
            print(f"❌ POST /api/contact with valid data: FAILED - Status {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ POST /api/contact with valid data: FAILED - {str(e)}")
        return False, None

def test_post_contact_invalid_email():
    """Test POST /api/contact with invalid email"""
    print("\n🧪 Testing POST /api/contact with invalid email...")
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=INVALID_EMAIL_DATA,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ POST /api/contact with invalid email: PASSED - Correctly rejected")
            return True
        else:
            print(f"❌ POST /api/contact with invalid email: FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/contact with invalid email: FAILED - {str(e)}")
        return False

def test_post_contact_missing_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n🧪 Testing POST /api/contact with missing fields...")
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=MISSING_FIELDS_DATA,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ POST /api/contact with missing fields: PASSED - Correctly rejected")
            return True
        else:
            print(f"❌ POST /api/contact with missing fields: FAILED - Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ POST /api/contact with missing fields: FAILED - {str(e)}")
        return False

def test_get_contact_messages():
    """Test GET /api/contact to retrieve messages"""
    print("\n🧪 Testing GET /api/contact...")
    
    try:
        response = requests.get(
            f"{BASE_URL}/api/contact",
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ GET /api/contact: PASSED - Retrieved {len(data)} messages")
                
                # Check if messages are sorted by created_at descending
                if len(data) > 1:
                    dates = [msg.get('created_at') for msg in data if msg.get('created_at')]
                    if dates == sorted(dates, reverse=True):
                        print("✅ Messages correctly sorted by created_at descending")
                    else:
                        print("⚠️ Messages may not be sorted correctly by created_at")
                
                return True, data
            else:
                print("❌ GET /api/contact: FAILED - Response is not a list")
                return False, None
        else:
            print(f"❌ GET /api/contact: FAILED - Status {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ GET /api/contact: FAILED - {str(e)}")
        return False, None

def test_backend_health():
    """Test if backend is running"""
    print("\n🧪 Testing backend health...")
    
    try:
        response = requests.get(f"{BASE_URL}/api/", timeout=5)
        if response.status_code == 200:
            print("✅ Backend is running")
            return True
        else:
            print(f"❌ Backend health check failed - Status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Backend is not accessible: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 FORMAS EQUIPAMIENTO BACKEND API TESTS")
    print("=" * 60)
    
    # Test results tracking
    results = {
        "backend_health": False,
        "post_valid": False,
        "post_invalid_email": False,
        "post_missing_fields": False,
        "get_messages": False
    }
    
    # Test backend health first
    results["backend_health"] = test_backend_health()
    
    if not results["backend_health"]:
        print("\n❌ Backend is not accessible. Stopping tests.")
        return results
    
    # Test POST /api/contact with valid data
    success, contact_id = test_post_contact_valid_data()
    results["post_valid"] = success
    
    # Small delay to ensure message is saved
    if success:
        time.sleep(1)
    
    # Test POST /api/contact with invalid email
    results["post_invalid_email"] = test_post_contact_invalid_email()
    
    # Test POST /api/contact with missing fields
    results["post_missing_fields"] = test_post_contact_missing_fields()
    
    # Test GET /api/contact
    success, messages = test_get_contact_messages()
    results["get_messages"] = success
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
    else:
        print("⚠️ Some tests failed. Check the details above.")
    
    return results

if __name__ == "__main__":
    main()