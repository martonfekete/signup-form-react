import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('displays welcome text', () => {
    render(<App />);
    const title = screen.getByText(/welcome/i);
    expect(title).toBeInTheDocument();
  })

  test('displays form', () => {
    render(<App />);
    const form = document.querySelector('form');
    expect(form).toBeDefined();
  })
})
