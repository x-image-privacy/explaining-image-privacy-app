import { DEFAULT_LANGUAGE } from '../../src/config/constants';
import {
  COLOR_SWITCH_BUTTON_CY,
  LANGUAGE_SELECT_CY,
  MAIN_CONTAINER_CY,
  MAIN_HEADING_CY,
  MORE_INFO_BUTTON_CY,
  MORE_INFO_MODAL_CLOSE_BUTTON_CY,
  MORE_INFO_MODAL_CY,
  MORE_INFO_MODAL_TITLE_CY,
  chakraModal,
} from '../../src/config/selectors';

describe('Main Screen', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('displays default layout', () => {
    // check that main container is visible
    cy.getById(MAIN_CONTAINER_CY).should('be.visible');
    // check that language select is visible and has the default language
    cy.getById(LANGUAGE_SELECT_CY)
      .should('be.visible')
      .and('have.value', DEFAULT_LANGUAGE);
    // check that color mode switch is displayed
    cy.getById(COLOR_SWITCH_BUTTON_CY).should('be.visible');
    // check that the title is visible
    cy.getById(MAIN_HEADING_CY).should('be.visible');
    // check that the more info button is displayed
    cy.getById(MORE_INFO_BUTTON_CY).should('be.visible');

    // open more info modal
    cy.getById(MORE_INFO_BUTTON_CY).click();
    cy.getById(chakraModal(MORE_INFO_MODAL_CY)).should('be.visible');
    cy.getById(MORE_INFO_MODAL_TITLE_CY).should('be.visible');
    cy.getById(MORE_INFO_MODAL_CLOSE_BUTTON_CY).should('be.visible').click();
    // check modal is closed
    cy.getById(chakraModal(MORE_INFO_MODAL_CY)).should('not.exist');

    // cy.get('.circle-packing')
    //   .should('be.visible')
    //   .and((chart) => {
    //     expect(chart.height()).to.be.greaterThan(200);
    //   });
  });
});
