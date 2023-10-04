import { useState } from 'react'
import './App.css'

type Page = {
  name: string,
  width: number,
  offset: number
}

function App() {

  const pages : Page[] = [
    {
      name: "Home",
      width: 3.3,
      offset: 0.4
    },{
      name: "About",
      width: 3.6,
      offset: 4.4
    },{
      name: "Projects",
      width: 4.9,
      offset: 8.8
    },{
      name: "Contact",
      width: 4.6,
      offset: 14.4
    }
  ]

  const [active, setActive] = useState(pages[0].name)
  const [theme, setTheme] = useState('dark')

  function changePage(page: Page) {
    const nav : HTMLDivElement | null = document.querySelector('.nav')
    setActive(page.name)
    nav?.style.setProperty('--nav-item-active-width', 
      (page.width).toString().concat('vw'))
    nav?.style.setProperty('--nav-item-active-offset', 
      (page.offset).toString().concat('vw'))
  }

  function changeTheme(theme: string) {
    setTheme(theme)
    switch(theme) {
      case 'light':
        document.body.style.setProperty('--bg-color', 'rgb(233,233,233)')
        document.body.style.setProperty('--nav-item-color', 'rgb(136, 133, 133)')
        document.body.style.setProperty('--nav-item-hover-color', 'rgb(96, 96, 96)')
        document.body.style.setProperty('--nav-item-active-bg', 'rgba(112, 108, 108, 0.4)')
        break
      case 'dark':
        document.body.style.setProperty('--bg-color', '#202020')
        document.body.style.setProperty('--nav-item-color', 'rgb(136, 133, 133)')
        document.body.style.setProperty('--nav-item-hover-color', 'white')
        document.body.style.setProperty('--nav-item-active-bg', 'rgba(112, 108, 108, 0.2)')
        break
    }
  }

  return (
    <>
      <section className='nav-container'>
        <div className='nav'>
          {pages.map((page, index) => {
            return <button
              className={page.name === active ? 'nav-item active' : 'nav-item'}
              key={index}
              tabIndex={index+1}
              onClick={() => changePage(page)}>{page.name}</button>
          })}
        </div>
        <div 
            className='color-theme'
            onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
            tabIndex={pages.length + 1}
          >Ooo</div>
      </section>
    </>
  )
}

export default App