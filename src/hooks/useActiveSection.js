import { useEffect, useState } from 'react'

function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    let frameId = null

    const updateActiveSection = () => {
      frameId = null
      const pageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8

      if (pageBottom) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      const marker = Math.min(window.innerHeight * 0.36, 320)
      const activeSection = sections.reduce((current, section) => {
        return section.getBoundingClientRect().top <= marker ? section : current
      }, sections[0])

      setActiveId(activeSection.id)
    }

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('hashchange', requestUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('hashchange', requestUpdate)
    }
  }, [sectionIds])

  return { activeId, hasScrolled }
}

export default useActiveSection
