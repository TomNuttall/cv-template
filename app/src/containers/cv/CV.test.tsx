import { render, screen } from '@testing-library/react'

import CV from './CV'

describe('<CV />', () => {
  it('should render container', () => {
    // Arrange

    // Act
    render(<CV />)

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Employment' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Education' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })
})
