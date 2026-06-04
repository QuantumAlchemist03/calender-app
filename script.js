// Store events and track current date
let currentDate = new Date()
let events = JSON.parse(localStorage.getItem('events')) || {}

function renderCalendar(year, month) {

  // Get first day of month (0=Sun, 6=Sat) and total days
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Update the header title
  document.getElementById('month-title').textContent =
    new Date(year, month).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  // Clear the grid before re-rendering
  const grid = document.getElementById('calendar-grid')
  grid.innerHTML = ''

  // Add empty cells before the 1st of the month
  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="cell empty"></div>`
  }

  // Add a cell for each day
  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${month}-${day}`
    const hasEvent = events[key] ? 'has-event' : ''

    grid.innerHTML += `
      <div class="cell ${hasEvent}" data-key="${key}">
        <span class="day-number">${day}</span>
        ${events[key] ? `<p class="event-label">${events[key]}</p>` : ''}
      </div>`
  }

  // Add click listener to each day cell
  document.querySelectorAll('.cell:not(.empty)').forEach(cell => {
    cell.addEventListener('click', () => {
      alert('Day ' + cell.dataset.key + ' clicked!')
    })
  })
}

// Prev/Next button logic
document.getElementById('prev').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1)
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth())
})

document.getElementById('next').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1)
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth())
})

// Kick everything off
renderCalendar(currentDate.getFullYear(), currentDate.getMonth())