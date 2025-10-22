# HNG-PROFILE-CARD
Hng Frontend Task 1&2

Profile Card Project

A simple, self-contained profile card built with plain HTML, CSS, and JavaScript.

Features

· Responsive Design: Adapts to different screen sizes
· Real-time Clock: Displays current time with automatic updates
· Social Media Links: GitHub, LinkedIn, and Twitter profiles
· Local Assets: All resources are embedded directly in the HTML
· Clean Styling: Gradient backgrounds and modern UI elements
· No External Dependencies: Completely self-contained

File Structure

```
index.html
about.html
cobtact.html
style.css
app.js
```

That's it! The entire project is contained in a single HTML file with:

·  CSS styles
·  JavaScript
· Base64-encoded avatar image
· Inline SVG icons

Code Overview


🧪 Testing & Accessibility

Data Test IDs

All interactive elements include data-testid attributes for automated testing:

Profile Page:

· test-profile-card - Main container
· test-user-name - User's name
· test-user-bio - Biography text
· test-user-time - Real-time clock
· test-user-avatar - Profile image
· test-user-social-links - Social media container
· test-user-hobbies - Hobbies list
· test-user-dislikes - Dislikes list

Contact Page:

· test-contact-name - Full name input
· test-contact-email - Email input
· test-contact-subject - Subject input
· test-contact-message - Message textarea
· test-contact-submit - Submit button
· test-contact-error-* - Error messages
· test-contact-success - Success message

About Page:

· test-about-page - Main container
· test-about-bio - Biography section
· test-about-goals - Goals section
· test-about-confidence - Confidence areas
· test-about-future-note - Future notes
· test-about-extra - Additional thoughts

CSS Features

· Flexbox & Grid: Used for responsive layout
· CSS Gradients: Background and text effects
· Media Queries: Responsive design for mobile and desktop
· Custom Properties: Consistent color scheme
· Smooth Transitions: Hover effects and animations

JavaScript Functionality

· Real-time Clock: Updates every second using setInterval()
· Time Formatting: 12-hour format with AM/PM indicator

Key Components

Avatar

· Circular design with gradient background
· Local resource

Social Media Icons

· GitHub, LinkedIn, and Twitter SVG icons
· Hover effects with scaling animation
· External links open in new tabs

Time Display

· Monospace font for better readability
· Background with subtle shadow
· Automatic updates every second

Tag System

· Hobbies: Purple-themed tags
· Dislikes: Red-themed tags
· Responsive flexbox layout

Device Compatibility

· Works in all modern device
· Progressive responsiveness

