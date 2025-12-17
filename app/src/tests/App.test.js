import { mockElement, createElement, getElement, getElementProps } from './testHelpers';
import App from '../App';

jest.mock('../components/header', () => mockElement('Header'));

describe('App Main testing', () => {

  it('should have a main div in the application', () => {
    const element = createElement(<App />);

    const mainDiv = getElement(element, 'main');
    
    expect(mainDiv).not.toBeNull();
  });

  it('should have a header inside of the main div', () => {
    const element = createElement(<App />);

    const headerComponent = getElement(element, 'Header');

    expect(headerComponent).not.toBeNull();

    const headerProps = getElementProps(headerComponent);

    expect(headerProps.title).toEqual('Chess Game');
  });

});
