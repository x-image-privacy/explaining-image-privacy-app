import { DEFAULT_LANGUAGE } from '../../src/config/constants';
import { LANGUAGE_SELECT_CY } from '../../src/config/selectors';

describe('Language', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('change language', () => {
    cy.getById(LANGUAGE_SELECT_CY).should('have.value', DEFAULT_LANGUAGE);
    // change the language to french
    cy.getById(LANGUAGE_SELECT_CY).select('fr');
    // check that the language is french
    cy.getById(LANGUAGE_SELECT_CY).should('have.value', 'fr');
  });
});
