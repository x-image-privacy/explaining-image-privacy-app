import { WORD_CLOUD_LOCAL_ROUTE } from '../../src/config/routes';
import { DISPLAY_IMAGE_CY } from '../../src/config/selectors';

describe('Word Cloud Local Page', () => {
  beforeEach(() => {
    cy.visit(WORD_CLOUD_LOCAL_ROUTE);
  });
  it('displays image', () => {
    cy.getById(DISPLAY_IMAGE_CY).should('be.visible');
  });
});
