import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Page, getPageOffset, getPageWidth, getPages } from './assets/NavPage'
import './App.css'

function App() {

  const pages = getPages()
  const [active, setActive] = useState(pages.get(1).id)
  const [theme, setTheme] = useState('dark')

  window.onload = () => { document.body.style.transitionDuration = '3s' }
  window.onresize = () => { updateActive(active) }

  function updateActive(pageId: number) {
    const nav : HTMLDivElement = document.querySelector('.nav') as HTMLDivElement
    const newWidth = getPageWidth(window.innerWidth, pageId)
    const newOffset = getPageOffset(window.innerWidth, pageId)
    nav.style.setProperty('--nav-item-active-width', 
      (newWidth).toString().concat('rem'))
    nav.style.setProperty('--nav-item-active-offset', 
      (newOffset).toString().concat('rem'))
  }

  function changePage(page: Page) {
    setActive(page.id)
    updateActive(page.id)
  }

  function changeTheme(newTheme: string) {
    setTheme(newTheme)
    const lightIcon : HTMLImageElement = document.querySelector('.theme-icon:nth-child(1)') as HTMLImageElement 
    const darkIcon : HTMLImageElement = document.querySelector('.theme-icon:nth-child(2)') as HTMLImageElement
    switch(newTheme) {
      case 'light':
        lightIcon.style.marginLeft = '-6rem'
        darkIcon.style.marginLeft = '0rem'
        document.body.style.setProperty('--bg-color', '#FFFFFF')
        document.body.style.setProperty('--nav-item-hover-color', 'black')
        document.body.style.setProperty('--nav-bg-color', 'rgba(219, 219, 219, 0.4)')
        document.body.style.setProperty('--nav-item-active-bg', 'rgba(112, 108, 108, 0.1)')
        break
      case 'dark':
        lightIcon.style.marginLeft = '0rem'
        darkIcon.style.marginLeft = '6rem'
        document.body.style.setProperty('--bg-color', '#202020')
        document.body.style.setProperty('--nav-item-hover-color', 'white')
        document.body.style.setProperty('--nav-bg-color', 'rgba(60, 60, 60, 0.2)')
        document.body.style.setProperty('--nav-item-active-bg', 'rgba(112, 108, 108, 0.2)')
        break
    }
  }

  return (
    <>
      <section className='nav-container'>
        <div className='nav'>
          {Array.from(pages.values()).map((page) => {
            return <button
              className={page.id === active ? 'nav-item active' : 'nav-item'}
              key={page.id}
              tabIndex={page.id}
              onClick={() => changePage(page)}>{page.name}</button>
          })}
        </div>
        <button 
            className='color-theme'
            onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
            tabIndex={pages.size + 1}
        >
          <img className='theme-icon' src='light_icon.png' />
          <img className='theme-icon' src='dark_icon.png' />
        </button>
      </section>
      <Toaster />
    </>
  )
}

export default App