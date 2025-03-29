import { render, screen } from '@testing-library/react'

import CoveringLetter from './CoveringLetter'

describe('<CoveringLetter />', () => {
  it('should render container', () => {
    // Arrange

    // Act
    render(<CoveringLetter />)

    // Assert
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(1)
  })
})
