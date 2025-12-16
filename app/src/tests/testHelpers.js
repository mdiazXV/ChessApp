import { render } from '@testing-library/react'

export function mockElement(element) {
    return {
        __esModule: true,
        default: (props) => {
            return (
                <div data-testid={element}>
                    <div data-testid="mocked-props">
                        {JSON.stringify(props)}
                    </div>
                </div>
            );
        }
    };
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

export function getElementProps(element) {

    const props = element.querySelector('div[data-testid="mocked-props"]');

    if (props != null) {
        return JSON.parse(props.textContent);
    }

    return {};
}

export * from '@testing-library/react'