const scrollToElement = (selector: string): void => {
  // Scroll to search highlight word
  const anchor = document.querySelector(selector)
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default scrollToElement
