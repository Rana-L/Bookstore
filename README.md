# My Bookshop

A responsive front-end bookstore web application where users can browse books and complete purchases through a payment flow.

## Features

- Book catalogue with cover images, descriptions, author names, and prices
- Responsive design with a hamburger navigation menu for mobile screens
- Payment form with client-side validation for card number, CVV, and expiry date
- Order confirmation page that displays the last four digits of the card used

## Tech Stack

- **HTML5** — Page structure
- **CSS3** — Styling and responsive layout using CSS Grid and Media Queries
- **JavaScript** — DOM manipulation, form validation, and API integration
- **Bootstrap 5** — UI components and responsive utilities
- **Font Awesome** — Icons

## Project Structure

```
Book_store/
│
├── index.html          # Homepage — book catalogue
├── pay.html            # Payment page
├── success.html        # Order confirmation page
├── about_us.html       # About us page
├── contact_us.html     # Contact us page
├── style.css           # Global stylesheet
│
├── JavaScript/
│   └── script.js       # Navigation toggle, payment validation & API call
│
└── Images/             # Book covers and payment icons
```

## Getting Started

No installation required — this is a pure front-end project.

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/Bookstore.git
   ```

2. Open `index.html` in your browser
   ```bash
   cd Bookstore/Book_store
   open index.html
   ```

## Payment Validation

The payment form validates the following before submitting:

- **Card number** — Must be a valid Mastercard format
- **CVV** — Must be 3–4 digits
- **Expiry date** — Must be a future date
