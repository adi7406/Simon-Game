# 🎮 Simon Game

An interactive browser-based memory game inspired by the classic Simon Game, where players must repeat an increasingly long sequence of colors and sounds.

---

## 📌 Project Overview

This project challenges the player's memory by generating a random sequence of colors. The player must replicate the sequence correctly to progress to higher levels. A wrong input resets the game.

---

## 🚀 Features

- Random color sequence generation  
- Sound effects for each button  
- Visual animations for button presses  
- Level progression system  
- Game over detection with reset option  

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (jQuery)  

---

## 📂 Project Structure

📁 Simon-Game  
│── index.html  
│── styles.css  
│── game.js  
│── sounds/  

---

## 🎮 How to Play

1. Press any key to start the game  
2. Watch the sequence of colors carefully  
3. Click the buttons in the same order  
4. Each level adds a new color to the sequence  
5. If you click the wrong color → Game Over  
6. Press any key to restart  

---

## ⚙️ How It Works

- A random color is generated and added to the sequence  
- The game plays the sequence using sounds and animations  
- User inputs are stored and checked step-by-step  
- If correct → next level  
- If incorrect → game resets  

---

## 🔑 Key Functions

- newSequence() → Generates next color and increases level  
- playSound(color) → Plays sound and animation  
- checkAnswer() → Validates user input  
- animatePress(color) → Button press animation  

---

## 🖥️ How to Run Locally

1. Download or clone the project  
2. Ensure all files are in the same folder  
3. Open index.html in your browser  

---

## 📌 Notes

- Requires internet connection for jQuery CDN  
- Ensure the sounds folder contains all required audio files  
