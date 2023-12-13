import { render } from '@testing-library/react';

import UiCompGladiolusSafaris from './ui-comp-gladiolus-safaris';

describe('UiCompGladiolusSafaris', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompGladiolusSafaris />);
    expect(baseElement).toBeTruthy();
  });
});
