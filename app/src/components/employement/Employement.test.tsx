import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Employement from './Employement'

describe('<Education />', () => {
  it('should render component', () => {
    // Arrange
    const details = {
      company: 'Company',
      location: 'Location',
      projectType: 'Project',
      projectDetails: ['Project 1', 'Project 2'],
      role: 'Job Role',
      roleDetails: ['Role 1', 'Role 2', 'Role 3'],
      yearFrom: 2000,
    }
    // Act
    render(<Employement {...details} />)

    // Assert
    expect(
      screen.getByRole('heading', { name: 'Job Role, Company' }),
    ).toBeInTheDocument()
    expect(screen.getByText('2000 - Current')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getAllByTestId('employement-details')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Project' })).toBeInTheDocument()
    expect(screen.getAllByTestId('employement-projects')).toHaveLength(2)
  })
})
