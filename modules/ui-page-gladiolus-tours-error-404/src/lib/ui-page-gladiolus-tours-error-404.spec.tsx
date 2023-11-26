import { render } from '@testing-library/react';

import UiPageGladiolusToursError404 from './ui-page-gladiolus-tours-error-404';

describe('UiPageGladiolusToursError404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageGladiolusToursError404 />);
    expect(baseElement).toBeTruthy();
  });
});
