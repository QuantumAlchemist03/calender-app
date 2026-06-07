let currentDate = new Date()
let events = JSON.parse(localStorage.getItem('events')) || {}
let selectedKey = null

function renderCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  document.getElementById('month-title').textContent =
    new Date(year, month).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  const grid = document.getElementById('calendar-grid')
  grid.innerHTML = ''

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="cell empty"></div>`
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${month}-${day}`
    const hasEvent = events[key] ? 'has-event' : ''

    const today = new Date()
const isToday = day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()

grid.innerHTML += `
  <div class="cell ${hasEvent} ${isToday ? 'today' : ''}" data-key="${key}">
        <span class="day-number">${day}</span>
        ${events[key] ? `<p class="event-label">${events[key]}</p>` : ''}
      </div>`
  }

  document.querySelectorAll('.cell:not(.empty)').forEach(cell => {
    cell.addEventListener('click', () => openModal(cell.dataset.key))
  })
}

function openModal(key) {
  selectedKey = key
  const [year, month, day] = key.split('-')

  // Show a readable date in the modal title
  const readable = new Date(year, month, day).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })

  document.getElementById('modal-date').textContent = readable
  document.getElementById('event-input').value = events[key] || ''
  document.getElementById('modal').classList.remove('hidden')

  // Only show Delete if an event already exists
  const deleteBtn = document.getElementById('delete-btn')
  deleteBtn.classList.toggle('hidden', !events[key])
}

document.getElementById('save-btn').addEventListener('click', () => {
  const val = document.getElementById('event-input').value.trim()
  if (val) events[selectedKey] = val
  saveAndClose()
})

document.getElementById('delete-btn').addEventListener('click', () => {
  delete events[selectedKey]
  saveAndClose()
})

document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden')
})

function saveAndClose() {
  localStorage.setItem('events', JSON.stringify(events))
  document.getElementById('modal').classList.add('hidden')
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth())
}

document.getElementById('prev').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1)
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth())
})

document.getElementById('next').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1)
  renderCalendar(currentDate.getFullYear(), currentDate.getMonth())
})

renderCalendar(currentDate.getFullYear(), currentDate.getMonth())

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden')
  }
})