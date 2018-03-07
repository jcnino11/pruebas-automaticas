describe('Los estudiantes pagina profesor', function() {
    it('Create count los estudiantes and fails at login', function() {
      //Creacion cuenta
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.get('.profesores').first('.jsx-633353764').first('.profesor').find('a').first().click()
      cy.wait(2000)
      cy.get('.materias').find('input[name="id:MATE1214"]').check()
  })
})
