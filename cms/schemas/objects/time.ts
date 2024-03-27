import {defineType} from 'sanity'

export default defineType({
  name: 'timeInput',
  title: 'Time',
  type: 'string',
  options: {
    list: ALLOWED_TIMES(),
  },
})

// A function that generates an array of times from 00:00 to 23:30
function ALLOWED_TIMES() {
  const times = []
  for (let h = 8; h < 16; h++) {
    for (let m = 0; m < 60; m += 30) {
      times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`)
    }
  }
  return times
}
