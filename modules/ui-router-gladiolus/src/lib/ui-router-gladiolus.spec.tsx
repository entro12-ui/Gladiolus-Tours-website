import { render } from '@testing-library/react';

import UiRouterGladiolus from './ui-router-gladiolus';

describe('UiRouterGladiolus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiRouterGladiolus />);
    expect(baseElement).toBeTruthy();
  });
});
