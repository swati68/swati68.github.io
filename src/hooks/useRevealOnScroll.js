import { useEffect } from 'react'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

export default useRevealOnScroll
