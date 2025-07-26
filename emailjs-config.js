// EmailJS Configuration Instructions
// 
// To set up EmailJS for your contact form:
//
// 1. Go to https://www.emailjs.com/ and create a free account
//
// 2. Add an Email Service:
//    - Click "Add New Service"
//    - Choose "Gmail" or "Outlook"
//    - Connect your email account (uvecodes@gmail.com)
//    - Note down your Service ID
//
// 3. Create an Email Template:
//    - Go to "Email Templates"
//    - Click "Create New Template"
//    - Use this template:
//
//    Subject: New Contact Form Submission - {{subject}}
//
//    Name: {{from_name}}
//    Email: {{from_email}}
//    Subject: {{subject}}
//    Message: {{message}}
//
//    - Save the template and note down the Template ID
//
// 4. Get your Public Key:
//    - Go to "Account" > "API Keys"
//    - Copy your Public Key
//
// 5. Update the configuration in script.js:
//    - Replace "YOUR_PUBLIC_KEY" with your actual public key
//    - Replace "YOUR_SERVICE_ID" with your service ID
//    - Replace "YOUR_TEMPLATE_ID" with your template ID
//
// Example:
// emailjs.init("user_abc123def456");
// emailjs.send('service_xyz789', 'template_abc123', templateParams)
//
// The form will then send emails directly to uvecodes@gmail.com
// without any activation process required. 