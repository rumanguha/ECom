class checkoutPage
{
    getCheckoutButton()
    {
      return cy.get(':nth-child(5) > :nth-child(5) > .btn')
    }
    getCoutry()
    {
      cy.get('#country').type('ind')
      cy.wait(5000)
      cy.get('ul li a').each(($el, index, $list) =>{
        if($el.text()==='India')
        {
          return cy.wrap($el).click()
        }
      })
    }
    getCheckBox()
    {
      return cy.get('[for="checkbox2"]')
    }
    getPurches()
    {
      return cy.get('.ng-untouched > .btn')
    }
    getSuccessValidation()
    {
      cy.get('.alert').then(function(element)
      {
        const succesMessage = element.text()
        expect(succesMessage.includes('Success')).to.be.true
      })
    }
    amountValidation()
    {
      var sum = 0
      cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount= $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = sum + res
        return sum
      })
    }
}

export default checkoutPage;