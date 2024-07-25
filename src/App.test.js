import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all sections with correct name attributes', () => {
  const { container } = render(<App />);
  
  const home = container.querySelector('div[name="home"]');
  expect(home).toBeInTheDocument();

  const about = container.querySelector('div[name="about"]');
  expect(about).toBeInTheDocument();
  
  const skills = container.querySelector('div[name="skills"]');
  expect(skills).toBeInTheDocument();
  
  const resume = container.querySelector('div[name="resume"]');
  expect(resume).toBeInTheDocument();
  
  const contact = container.querySelector('div[name="contact"]');
  expect(contact).toBeInTheDocument();
});
