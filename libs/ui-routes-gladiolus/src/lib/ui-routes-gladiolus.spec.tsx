import { render } from '@testing-library/react';

import UiRoutesGladiolus from './ui-routes-gladiolus';

describe('UiRoutesGladiolus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiRoutesGladiolus />);
    expect(baseElement).toBeTruthy();
  });
});
