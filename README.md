# Smart Counter

A simple yet powerful Smart Counter application built with React and deployed on Vercel.

Live Demo: https://smart-counter-one.vercel.app

---

## Overview

Smart Counter is a responsive web application that allows users to:

- Increment and decrement values
- Add custom numbers
- Perform arithmetic operations
- Reset values efficiently

The goal of this project is to practice core React fundamentals such as:

- Component-based architecture
- State management using `useState`
- Event handling
- Controlled inputs
- Conditional logic
- Clean UI structuring

---

## Tech Stack

- React
- JavaScript (ES6+)
- Vite (for fast development and bundling)
- CSS
- Vercel (Deployment)

---

## Project Structure


smart-counter/<br>
│<br>
├── src/<br>
│ ├── components/<br>
│ ├── App.jsx<br>
│ ├── main.jsx<br>
│ └── styles.css<br>
│<br>
├── index.html<br>
├── package.json<br>
└── vite.config.js<br>


---

## Features

### 1. Dynamic Counter Control

Users can:
- Increase the counter
- Decrease the counter
- Add custom numeric input
- Handle decimal calculations properly

### 2. Controlled Input Field

- Input is fully controlled using React state
- Supports Enter key submission
- Prevents invalid behavior

---

## Concepts Practiced

This project reinforces:

- `useState` hook
- Controlled components
- Synthetic events in React
- Conditional rendering
- Handling numeric edge cases
- Functional updates in state
- Clean component logic separation

---

## Installation & Setup

To run locally:

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the folder
cd smart-counter

# Install dependencies
npm install

# Start development server
npm run dev

Then open:

http://localhost:5173
Deployment

The project is deployed using Vercel.

## To deploy your own version:
npm run build

Then deploy the dist folder to your preferred hosting provider.

```
## Future Improvements

- Add step size selector

- Add history of operations

- Add dark/light theme toggle

- Convert to TypeScript

- Add unit testing (Vitest / Jest)

## Learning Purpose

This project was built as part of a structured React learning journey, focusing on mastering:

- State-driven UI

- Component thinking

- Precision handling in JavaScript

- Clean UI logic

## Author

Built by Sagar Pani<br>
LinkedIn: https://www.linkedin.com/in/sagarpani