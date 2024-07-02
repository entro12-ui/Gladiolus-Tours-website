#!/usr/bin/bash

# Booking Inquiry
response_booking=$(curl -s -X POST http://localhost:8080/booking -H "Content-Type: application/json" -d '{
  "fullName": "John Doe",
  "email": "info@gladiolustours.com",
  "subject": "Booking Inquiry",
  "dateFrom": "20/07/2024",
  "dateTo": "25/07/2024",
  "adults": 2,
  "child": 2,
  "moreInfo": "I would like to book a tour.",
  "code": "GT001"
}')
echo "$response_booking" | jq .

# General Inquiry
response_contact=$(curl -s -X POST http://localhost:8080/contact -H "Content-Type: application/json" -d '{
  "firstName": "Jane",
  "lastName": "Doe",
  "subject": "General Inquiry",
  "email": "info@gladiolustours.com",
  "phoneNumber": "+255-762-578-062",
  "message": "I have a question about your tours."
}')
echo "$response_contact" | jq .

