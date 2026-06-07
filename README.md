# 📅 Calendar App

A clean, lightweight calendar application built with vanilla HTML, CSS, and JavaScript. Create, edit, and delete events on any day — all saved locally in your browser.

Built as part of the [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md) challenge.

---

## Features

- 📆 Monthly calendar view with day-of-week alignment
- ➕ Add events to any day via a modal popup
- ✏️ Edit existing events by clicking the same day
- 🗑️ Delete events with a single click
- 💾 Events persist across page refreshes using `localStorage`
- 📍 Today's date highlighted automatically
- ⬅️ ➡️ Navigate between months

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- localStorage API

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- [VS Code](https://code.visualstudio.com/) with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

### Run locally

1. Clone the repo:
   ```bash
   git clone https://github.com/QuantumAlchemist03/calender-app.git
   cd calender-app
   ```

2. Open `index.html` with Live Server in VS Code, or simply open the file directly in your browser.

---

## Project Structure

```
calendar-app/
├── index.html      # App structure and modal
├── style.css       # Styling and grid layout
└── script.js       # Calendar logic and event handling
```

---

## How It Works

- `renderCalendar(year, month)` builds the grid dynamically using JavaScript, calculating the first weekday of the month to offset the starting cell correctly.
- Events are stored as a key-value object in `localStorage`, where each key is a `year-month-day` string.
- The modal opens on any day click, pre-filling the input if an event already exists.

---

## Roadmap

- [ ] Drag events between dates
- [ ] Set reminders with browser notifications
- [ ] Dark mode toggle
- [ ] Support multiple events per day

---

## Acknowledgements

- Project idea from [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas)
- Built day-by-day as a portfolio project during BSc Artificial Intelligence at Anglia Ruskin University
