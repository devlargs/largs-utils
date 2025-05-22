export const coercedGet = <T>(
  obj: T,
  path: string,
  defaultValue?: any
): any => {
  try {
    const travel = (regexp: RegExp) =>
      String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => {
          return res !== null && res !== undefined && typeof res === "object"
            ? (res as Record<string, any>)[key]
            : res;
        }, obj);

    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
  } catch (ex) {
    console.error("Error coercedGet", ex);
  }
};
