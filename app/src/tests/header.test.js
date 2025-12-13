import { render, screen } from '@testing-library/react';
import Header from '../components/header.jsx';

describe('Header Component', () => {

    it('should have a page title', () => {
        const expectedTitle = 'Cool Title';
        render(<Header title={expectedTitle}/>);

        const pageTitle = screen.getByTestId('pageTitle');

        expect(pageTitle.textContent).toEqual(expectedTitle);
    });

    it('should have a page title that it gets from a prop', () => {
        const expectedTitle = 'Awesome Title';
        render(<Header title={expectedTitle}/>);

        const pageTitle = screen.getByTestId('pageTitle');

        expect(pageTitle.textContent).toEqual(expectedTitle);
    });

});