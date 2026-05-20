const scrollToElement = (selector: string): void => {
  const anchor = document.querySelector(selector)
  if (!anchor) {
    return
  }

  const headerOffset = 60
  const top = anchor.getBoundingClientRect().top + window.pageYOffset - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default scrollToElement
