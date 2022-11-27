/// <reference types="Cypress" />
import homePage from '../pageObjects/homePage'
import productsPage from '../pageObjects/productsPage'
import checkoutPage from '../pageObjects/checkoutPage'
describe('First test', () => {

  
  before(() => {
    cy.fixture('example')
    })
  })
    it('E2E test', () => {
      const hpage = new homePage();
      const pPage = new productsPage();
      const cPage = new checkoutPage();
      cy.visit("https://rahulshettyacademy.com/angularpractice/")
      hpage.getEditBox().type('Ruman')
      hpage.getGender().select('Female')
      hpage.getEditBox().should('have.value','Ruman')
      hpage.getEditBox().should('have.attr','minlength','2')
      hpage.getEnterRadioButton().should('be.disabled')
      hpage.getShopButton().click()
      pPage.getProductToCart()
      pPage.getCheckout().click()
      cPage.getCheckoutButton().click()
      cPage.getCoutry()
      cPage.getCheckBox().click()
      cPage.getPurches().click()
      cPage.getSuccessValidation()
    })
  