import { render } from '@testing-library/react';

import UiLayoutGladiolus from './ui-layout-gladiolus';

describe('UiLayoutGladiolus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLayoutGladiolus />);
    expect(baseElement).toBeTruthy();
  });
});
