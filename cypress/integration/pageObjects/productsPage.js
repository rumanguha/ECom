class productsPage
{
    getProductToCart()
    {
        var array = ["Nokia Edge", "iphone X", "Blackberry"]
      array.forEach(function(element)
      {
        return cy.selectProduct(element)
      })
    }
    getCheckout()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
}

export default productsPage;