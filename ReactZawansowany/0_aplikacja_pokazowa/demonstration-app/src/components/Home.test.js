import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
    render(<Home />);
    const el = screen.getByText('To jest komponent home.');
    expect(el).toBeInTheDocument();
});

test('sprawdzenie czy Home ma klasę', () => {
    render(<Home />);
    const paragraf = screen.getByText('Text');
    expect(paragraf).toHaveClass("testowaKlasa");
});

test('renders a message', () => {
    const {getByText} = render(<Home />);
    const rabbit = getByText("Królik");
    expect(rabbit).toContainHTML("Królik");
});