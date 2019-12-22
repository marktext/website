// help functions
const easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}

const animatedScrollTo = function (element, to, duration, callback) {
  let start = element.scrollTop
  let change = to - start
  let animationStart = +new Date()
  let animating = true
  let lastpos = null

  const animateScroll = function () {
    if (!animating) {
      return
    }
    requestAnimationFrame(animateScroll)
    const now = +new Date()
    const val = Math.floor(easeInOutQuad(now - animationStart, start, change, duration))
    if (lastpos) {
      if (lastpos === Math.ceil(element.scrollTop)) {
        lastpos = val
        element.scrollTop = val
      } else {
        animating = false
      }
    } else {
      lastpos = val
      element.scrollTop = val
    }
    if (now > animationStart + duration) {
      element.scrollTop = to
      animating = false
      if (callback) {
        callback()
      }
    }
  }
  requestAnimationFrame(animateScroll)
}

const scrollToElement = (selector) => {
  // Scroll to search highlight word
  const container = document.documentElement
  const anchor = document.querySelector(selector)
  if (anchor) {
    const { y } = anchor.getBoundingClientRect()
    const DURATION = 300
    animatedScrollTo(container, container.scrollTop + y - 60, DURATION)
  }
}

export default scrollToElement
