import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { findByText } = render(<App />);
    expect(findByText(/Gladiolus Tours/gi)).toBeTruthy();
  });
});
