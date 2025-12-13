import { render } from '@testing-library/react'
import { jest } from '@jest/globals'; 

export function mockElement(element) {
    const mockedComponent = jest.fn().mockReturnValue(() => {
        console.log('MOCK!!!!!');
        return (<div data-testid={element}></div>)
    });

    // console.log(mockedComponent);

    // return mockedComponent;

    // return {
    //     __esModule: true,
    //     default: mockedComponent
    // }

    return {
        __esModule: true,
        default: () => <div data-testid={element}></div>
    }
}

export function createElement(element) {
    return render(element).container;
}


export function getElement(parent, element) {
    const foundElement = parent.querySelector(element); 
    const testId = 'div[data-testid="' + element + '"]';
    return foundElement != null ? foundElement : parent.querySelector(testId);
}

export function getAllElements(parent, element) {
    const foundElements = parent.querySelectorAll(element);  
    const testId = 'div[data-testid="' + element + '"]';
    return foundElements.length > 0 ? foundElements : parent.querySelectorAll(testId);
}

export * from '@testing-library/react'