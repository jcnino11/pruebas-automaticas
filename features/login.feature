Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

Scenario Outline: Login sucesfully with valid inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login

    Examples:
      | email                 | password |
      |camilo.ninoj@gmail.com |Asdf1234$ |

Scenario Outline: Sing up with scenarios diverse

  Given I go to losestudiantes home screen
    When I open the login screen
    And I type <nombre> , <apellido>, <email> , <password> and <terminos> fields
    And I try to sing up
    Then I expect to see <error>

    Examples:
      | nombre | apellido | email | password | terminos | error |
      | camilo | niño | | 123456789 | true | Ingresa un correo valido |
      | camilo | niño | falso@midominio.edu |  | true | Ingresa una contraseña |
      | camilo | niño | falso@midominio.edu | 123456789 | false | Debes aceptar los términos y condiciones |
