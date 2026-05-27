// Union-тип: id может быть строкой, числом или boolean.
const _logId = (id: string | number | boolean) => {
  // typeof сужает тип внутри конкретной ветки условия.
  if (typeof id === 'string') {
    console.log('string - ', id);
  }
  else if (typeof id === 'number') {
    console.log('number - ', id);
  }
  else {
    console.log('boolean - ', id);
  }
};

// Для массива используем Array.isArray, потому что typeof вернул бы "object".
const _logError = (err: string | string[]) => {
  if (Array.isArray(err)) {
    console.log('array - ', err);
  }
  else {
    console.log('string - ', err);
  }
};

// Оператор in проверяет наличие свойства и определяет форму объекта.
const _logObject = (obj: { a: number } | { b: number }) => {
  if ('a' in obj) {
    console.log('a in obj - ', obj.a);
  }
  else {
    console.log('b in obj - ', obj.b);
  }
};

// При равенстве TypeScript оставляет общий возможный тип для a и b - string.
const _logMultipleIds = (a: string | number, b: string | boolean) => {
  if (a === b) {
    console.log('a and b is string - ', a, b);
  }
  else {
    console.log('a is number - ', a);
  }
};
