import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { User } from '../../assets/icons'

import './Header.css'

type HeaderLink = {
  name: string
  src: string
}

type HeaderProps = {
  links: HeaderLink[]
  name: string
}

const Header: React.FC<React.PropsWithChildren<HeaderProps>> = ({
  links,
  name,
  children,
}) => {
  const location = useLocation()

  useEffect(() => {
    const match = links.find((link) => link.src === location.pathname)
    document.title = `${name} - ${match?.name}`
  }, [location])

  const titleName = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <User title="user" />
          {titleName}
        </div>
        <nav className="header__nav">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.src}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default Header
