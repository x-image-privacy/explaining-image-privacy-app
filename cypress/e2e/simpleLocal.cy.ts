import { SIMPLE_LOCAL_ROUTE } from '../../src/config/routes';
import { DISPLAY_IMAGE_CY } from '../../src/config/selectors';

describe('Simple Local Page', () => {
  beforeEach(() => {
    cy.visit(SIMPLE_LOCAL_ROUTE);
  });
  it('displays image', () => {
    cy.getById(DISPLAY_IMAGE_CY).should('be.visible');
  });
});
