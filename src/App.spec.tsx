import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('<App/>', () => {
  it('should render hello world', () => {
    render(<App />)

    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
