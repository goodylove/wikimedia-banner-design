# Mood Banner App

## Overview

The Mood Banner App is a simple React application that allows users to select their current mood from a dropdown list. Based on the selected mood, the background image, animation, and mood text update dynamically.

## Features

- Dynamic Mood Selection: Users can select a mood from a dropdown list.
- Background Change: The banner background updates according to the selected mood.
- Animated Mood Display: The mood text appears with an animation specific to the mood.

## Technologies Used

- React: Frontend framework
  -React Testing library

## How It Works

1. The application loads with a default mood (**Thankful**).
2. The user selects a different mood from the dropdown list.
3. The application updates:
   - The mood text
   - The background image
   - The animation effect

## Installation & Setup

### 1️⃣ Clone the Repository

```bash
git https://github.com/goodylove/wikimedia-banner-design.git
cd wikimedia-banner-design
```

### 2️⃣ Install Dependencies

```bash
npm install  # or yarn install
```

### 3️⃣ Start the Application

```bash
npm start  # or yarn start
```

This will run the project in development mode on `http://localhost:3000/`.

## 📜 Code Explanation

### `App.js`

- useState Hooks manage the selected mood, background image, animation, and dropdown value.
- handleMoodChange() updates the state when a new mood is selected.
- The component dynamically renders a mood-related background and animation.

### `data.js`

```js
export const CurrentMood = {
  Thankful: {
    bg: "/thankful.jpg",
    text: "Gratitude fills my heart! 🙏",
    animation: "animate-fade",
  },
  Blessed: {
    bg: "/blessed.jpg",
    text: "I am truly blessed! ✨",
    animation: "animate-bounce",
  },
  Lioness: {
    bg: "/lonliness.jpg",
    text: "Strong and fearless! 🦁",
    animation: "animate-pulse",
  },
  Creativity: {
    bg: "/creativity.jpg",
    text: "Let your imagination run wild! 🎨",
    animation: "animate-fade",
  },
};


## Running Tests

If you have tests written, run them with:

npm test # or yarn test

## License

This project is licensed under the **MIT License**.
```
