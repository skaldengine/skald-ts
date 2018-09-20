/**
 * Helper function to copy the provided object. This function only copies the first level of the 
 * object, and not its attributes.
 *
 * @param {any} object - The source object.
 * @return {any} The copied object.
 */
// tslint:disable:no-any
export default function shallowCopy(object: any): object {
  let result: any = {}

  Object.keys(object).forEach((x: any) => {
    result[x] = object[x]
  })

  return result
}
// tslint:enable:no-any