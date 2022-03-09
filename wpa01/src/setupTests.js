// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});