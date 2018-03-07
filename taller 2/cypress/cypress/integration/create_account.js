describe('Los estudiantes login', function() {
    it('Create count los estudiantes and fails at login', function() {
      //Creacion cuenta
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Camilo")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Niño")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("camilo.ninoj@gmail.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
      cy.get('.cajaSignUp').find('input[value="on"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("1234567890")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ok').click()

      //Login y Logout
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("camilo.ninoj@gmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("Asdf1234$")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.get('#cuenta').click()
      cy.contains('Salir').click()

      //Crear cuenta existente
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Camilo")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Niño")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("camilo.ninoj@gmail.com")
      cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
      cy.get('.cajaSignUp').find('input[value="on"]').check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("Asdf1234$")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ok').click()
  })
})
