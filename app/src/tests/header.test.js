import { mockElement, createElement, getElement, getAllElements } from './testHelpers';
import Header from '../components/header.jsx';

describe('Header Component', () => {

    it('should have a page title', () => {
        const expectedTitle = 'Cool Title';
        const element = createElement(<Header title={expectedTitle}/>);

        const pageTitle = getElement(element, 'pageTitle');

        expect(pageTitle).not.toBeNull();
        expect(pageTitle.textContent).toEqual(expectedTitle);
    });

    it('should have a page title that it gets from a prop', () => {
        const expectedTitle = 'Awesome Title';
        const element = createElement(<Header title={expectedTitle}/>);

        const pageTitle = getElement(element, 'pageTitle');

        expect(pageTitle.textContent).toEqual(expectedTitle);
    });

});