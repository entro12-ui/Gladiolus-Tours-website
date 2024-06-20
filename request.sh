#!/usr/bin/bash

curl -X POST http://localhost:8080/createBooking -H "Content-Type: application/json" -d '{
  "fullName": "John Doe",
  "email": "collo@fastmail.com",
  "subject": "Booking Inquiry",
  "dateFrom": "20/07/2024",
  "dateTo": "25/07/2024",
  "adults": 2,
  "child": 2,
  "moreInfo": "I would like to book a tour.",
  "code": "GT001"
}'

curl -X POST http://localhost:8080/createContact -H "Content-Type: application/json" -d '{
  "firstName": "Jane",
  "lastName": "Doe",
  "subject": "General Inquiry",
  "email": "collo@fastmail.com",
  "phoneNumber": "+255-762-578-062",
  "message": "I have a question about your tours."
}'

