import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './components/Navbar';

test('renders email link with correct href', () => {
    render(<Navbar />);
    
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:sample@mail.com?subject=Kontakt via Portfolio');
  });
