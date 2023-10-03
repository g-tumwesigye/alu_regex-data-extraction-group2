#!/usr/bin/node

// Sample HTML content from a webpage
const webpageContent = `
  <p>Contact us at support@example.com for assistance.</p>
  <p>For inquiries, email info@website.com.</p>
`;

// Regular expression to match email addresses
const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;

// Extract email addresses from the webpage content
const extractedEmails = webpageContent.match(emailRegex);

// Print the extracted email addresses
if (extractedEmails) {
  console.log("Extracted Email Addresses:", extractedEmails);
} else {
  console.log("No email addresses found.");
}

