import React from 'react'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className='py-6 flex justify-center bg-black/50'>Copyright © {year} Ben Batres</footer>
  )
}
