import { useState } from 'react'
import './App.css'

function App() {

  const [active, setActive] = useState<String>('Home')

  const pages : String[] = ['Home', 'About', 'Projects', 'Contact']

  function handleClick(val: String) {
    setActive(val)
  }

  return (
    <>
      <section className='nav-container'>
        <div className='nav'>
          {pages.map((page, index) => {
            return <button
              className={active == page ? 'nav-item active' : 'nav-item'}
              key={index}
              tabIndex={index+1}
              onClick={() => handleClick(page)}>{page}</button>
          })}
        </div>
      </section>
    </>
  )
}

export default App