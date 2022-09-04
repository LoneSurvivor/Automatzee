import React from 'react'

export default function Footer() {
    let footsty={
        position:"fixed",
left:"0",
bottom:"0",
right:"0",

    }
  return (

  <footer className="bg-dark text-light py-0"style={footsty}>
      <p className="text-center">
     Copyright &copy; Automatzee.com
      </p>
      </footer>)
}