import { useState } from 'react'

const links = [['Science', '#science'], ['Shop', '#science'], ['Care', '#care'], ['Journeys', '#stories'], ['Doctor', '#doctor']]

export function Navbar() {
  const [menu, setMenu] = useState(false)
  return <header className="mm-nav"><a href="#home" className="mm-logo" aria-label="Man Matters home"><span>MAN</span><b>MATTERS</b><i>®</i></a><nav className={menu ? 'open' : ''}>{links.map(([label, href]) => <a key={label} href={href} onClick={()=>setMenu(false)}>{label}</a>)}</nav><div className="mm-nav-actions"><a className="mm-login" href="#care">Log in</a><a className="mm-nav-cta" href="#care">Get started <span>↗</span></a></div><button className="mm-menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu ? '×' : '☰'}</button></header>
}
