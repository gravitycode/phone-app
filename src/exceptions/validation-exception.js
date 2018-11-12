/**
 * Error de validacion.
 */
export default class ValidationException extends Error {

  /**
   *
   * @param message
   * @param validations   Objeto que contiene los errores de validacion.
   *                      la key es el nombre del atributo y el objeto contiene
   *                      path (ruta hasta parametro), value (valor de parametro )y message (mensaje de error)
   *                      Se escoge esta forma para unificarlo con los errores de validacion de mongoose
   */
  constructor(message = "phone.api.validation.exception") {
    super(message);
    this.code = 400;
    this.message = message;
  }
}
