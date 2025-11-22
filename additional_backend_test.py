#!/usr/bin/env python3
"""
Additional Backend Tests for Contact Form - Data Persistence and Sorting
"""

import requests
import json
import time
from datetime import datetime

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

def test_multiple_submissions_and_sorting():
    """Test multiple contact submissions and verify sorting"""
    print("\n🧪 Testing multiple submissions and sorting...")
    
    # Submit multiple messages with delays to ensure different timestamps
    test_messages = [
        {
            "name": "Carlos Rodríguez",
            "email": "carlos@example.com",
            "phone": "+54 11 2222-3333",
            "message": "Consulta sobre muebles de oficina"
        },
        {
            "name": "Laura Martínez", 
            "email": "laura@example.com",
            "phone": "+54 11 4444-5555",
            "message": "Interesada en cocinas integrales"
        },
        {
            "name": "Diego Fernández",
            "email": "diego@example.com", 
            "phone": "+54 11 6666-7777",
            "message": "Necesito cotización para living completo"
        }
    ]
    
    submitted_ids = []
    
    for i, message in enumerate(test_messages):
        try:
            response = requests.post(
                f"{BASE_URL}/api/contact",
                json=message,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                submitted_ids.append(data.get("id"))
                print(f"✅ Submitted message {i+1}: {message['name']}")
                time.sleep(1)  # Ensure different timestamps
            else:
                print(f"❌ Failed to submit message {i+1}: Status {response.status_code}")
                return False
                
        except Exception as e:
            print(f"❌ Error submitting message {i+1}: {str(e)}")
            return False
    
    # Now retrieve all messages and verify sorting
    try:
        response = requests.get(f"{BASE_URL}/api/contact", timeout=10)
        
        if response.status_code == 200:
            messages = response.json()
            print(f"✅ Retrieved {len(messages)} total messages")
            
            # Verify sorting by created_at (most recent first)
            if len(messages) >= 2:
                timestamps = []
                for msg in messages:
                    created_at = msg.get('created_at')
                    if created_at:
                        # Parse ISO timestamp
                        dt = datetime.fromisoformat(created_at.replace('Z', '+00:00'))
                        timestamps.append(dt)
                        print(f"  - {msg['name']}: {created_at}")
                
                # Check if sorted in descending order (newest first)
                is_sorted = all(timestamps[i] >= timestamps[i+1] for i in range(len(timestamps)-1))
                
                if is_sorted:
                    print("✅ Messages are correctly sorted by created_at (newest first)")
                    return True
                else:
                    print("❌ Messages are NOT correctly sorted by created_at")
                    return False
            else:
                print("⚠️ Not enough messages to verify sorting")
                return True
                
        else:
            print(f"❌ Failed to retrieve messages: Status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error retrieving messages: {str(e)}")
        return False

def test_data_persistence():
    """Test that submitted data persists correctly in MongoDB"""
    print("\n🧪 Testing data persistence...")
    
    test_data = {
        "name": "Sofía Herrera",
        "email": "sofia@example.com",
        "phone": "+54 11 8888-9999", 
        "message": "Consulta sobre muebles para niños"
    }
    
    try:
        # Submit the message
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code != 200:
            print(f"❌ Failed to submit test message: Status {response.status_code}")
            return False
            
        submit_data = response.json()
        message_id = submit_data.get("id")
        
        # Wait a moment then retrieve messages
        time.sleep(1)
        
        response = requests.get(f"{BASE_URL}/api/contact", timeout=10)
        
        if response.status_code != 200:
            print(f"❌ Failed to retrieve messages: Status {response.status_code}")
            return False
            
        messages = response.json()
        
        # Find our submitted message
        found_message = None
        for msg in messages:
            if msg.get("id") == message_id:
                found_message = msg
                break
        
        if not found_message:
            print(f"❌ Submitted message with ID {message_id} not found in database")
            return False
        
        # Verify all fields match
        fields_to_check = ["name", "email", "phone", "message"]
        for field in fields_to_check:
            if found_message.get(field) != test_data[field]:
                print(f"❌ Field '{field}' mismatch: expected '{test_data[field]}', got '{found_message.get(field)}'")
                return False
        
        # Verify additional fields
        if found_message.get("status") != "new":
            print(f"❌ Status field incorrect: expected 'new', got '{found_message.get('status')}'")
            return False
            
        if not found_message.get("created_at"):
            print("❌ Missing created_at timestamp")
            return False
        
        print("✅ Data persistence verified - all fields match and additional fields present")
        return True
        
    except Exception as e:
        print(f"❌ Error testing data persistence: {str(e)}")
        return False

def main():
    """Run additional backend tests"""
    print("=" * 60)
    print("🔬 ADDITIONAL BACKEND TESTS - DATA PERSISTENCE & SORTING")
    print("=" * 60)
    
    results = {
        "data_persistence": test_data_persistence(),
        "sorting_and_multiple": test_multiple_submissions_and_sorting()
    }
    
    print("\n" + "=" * 60)
    print("📊 ADDITIONAL TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} additional tests passed")
    
    return results

if __name__ == "__main__":
    main()