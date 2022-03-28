/**
 * @param success
 * @param message
 * @param data
 * @type {(success: boolean, message: string, data: any) => {success: boolean, message: string, data: any}}
 */
export default (success, message, data) => {
  return {
    success,
    message,
    data
  }
}