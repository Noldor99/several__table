import { useState, useEffect } from "react"

const useMenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuToggleHandler = () => {
    if (window.innerWidth < 768) {
      setMenuOpen((prevState) => !prevState)
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [menuOpen])

  return { menuOpen, menuToggleHandler, closeMenu }
}

export default useMenuToggle
