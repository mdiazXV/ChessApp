import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Main testing', () => {

  it('should have a main div in the application', () => {
    render(<App />);

    const mainDiv = screen.getByTestId('main');
    
    expect(mainDiv).toBeInTheDocument();
  });

  it('should have a header inside of the main div', () => {
    render(<App />);

    const headerComponent = screen.getByTestId('pageTitle');

    expect(headerComponent).not.toBeNull();
  });

});
