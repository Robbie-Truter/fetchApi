import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/(Note: Have to enter valid user id for Bitbucket results)/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders correctly', () => {
  const tree = renderer
      .create(<App page="http://localhost:8000/github/Timothylang-tech">Instagram</App>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
  const tree = renderer
      .create(<App page="http://localhost:8000/gitlab/test">Instagram</App>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});


