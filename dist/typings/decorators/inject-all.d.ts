import InjectionToken from "../providers/injection-token";
/**
 * Parameter decorator factory that allows for interface information to be stored in the constructor's metadata
 *
 * @return {Function} The parameter decorator
 */
declare function injectAll(token: InjectionToken<any>): (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => any;
export default injectAll;
