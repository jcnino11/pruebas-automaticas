var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaSignUp');

        var nombreInput = cajaLogIn.element('input=nombre');
        nombreInput.click();
        nombreInput.keys('Camilo');

        var apellidoInput = cajaLogIn.element('input=apellido');
        apellidoInput.click();
        apellidoInput.keys('Niño');

        var mailInput = cajaLogIn.element('input=correo');
        mailInput.click();
        mailInput.keys('camilo.ninoj@gmail.com');

        var univerInput = cajaLogIn.element('select=idUniversidad');
        univerInput.select('Universidad de los Andes');

        var maestriaInput = cajaLogIn.element('value=on');
        maestriaInput.click();

        var programaInput = cajaLogIn.element('select=idPrograma');
        programaInput.select('Maestría en Ingeniería de Software');

        var passInput = cajaLogIn.element('input=password');
        mailInput.click();
        mailInput.keys('1234567890');

        var mailInput = cajaLogIn.element('select=acepta');

        cajaLogIn.element('button=Registrarse').click()

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Usuario ya ha sido creado.');
    });
});
