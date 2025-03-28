import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

describe('<Header />', () => {
  it('should render component', () => {
    // Arrange
    const links = [
      { name: 'CV', src: '/' },
      { name: 'Covering Letter', src: '/covering-letter' },
    ]

    // Act
    render(
      <MemoryRouter>
        <Header links={links} name={'Test User'} />
      </MemoryRouter>,
    )

    // Assert
    expect(screen.getByRole('link', { name: 'CV' })).toBeInTheDocument()
  })
})
