import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Main testing', () => {

  it('should have a main div in the application', () => {
    render(<App />);

    const mainDiv = screen.getByTestId('main');
    
    expect(mainDiv).toBeInTheDocument();
  });

});
