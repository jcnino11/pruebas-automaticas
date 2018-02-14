describe('Los estudiantes login', function() {
    it('Search a teacher', function() {
      //Creacion cuenta
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Busca un profesor o materia...').click()
      cy.get('input[role="combobox"]').invoke('keypress', 'A')
  })
})
