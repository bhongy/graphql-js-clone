// @flow strict

export function invariant(condition: boolean, errorMessage: string): void {
  if (!condition) {
    throw new Error(errorMessage);
  }
}

/**
 * A helper to set instance stringified tag (e.g. `[object GraphQL.Source]`)
 */
export function defineToStringTag(ctor: Class<mixed>, tag: string): void {
  Object.defineProperty(ctor.prototype, Symbol.toStringTag, {
    enumerable: false,
    configurable: false,
    writable: false,
    value: tag,
  });
}
