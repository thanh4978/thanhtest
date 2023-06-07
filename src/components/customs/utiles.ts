export const isString = (value: any): value is string => {
    return typeof value === 'string';
};

export const isNumber = (x: any): x is number => typeof x === 'number';
