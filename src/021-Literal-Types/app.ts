// const сохраняет конкретное значение как литеральный тип 'test'.
const _test = 'test';

// Явный литеральный тип разрешает только значение 'a_test'.
let _a: 'a_test' = 'a_test';

// Union из литералов ограничивает метод списком допустимых строк.
const fetchWithAuth = (_url: string, _method: 'post' | 'get'): 1 | -1 => {
  // Возвращаемое значение тоже ограничено литералами 1 или -1.
  return 1;
};

// Строка 'post' подходит, потому что входит в тип 'post' | 'get'.
fetchWithAuth('s', 'post');

// let расширяет тип до string, поэтому ниже нужно уточнение типа.
let method = 'post';

// as 'post' сообщает TypeScript, что здесь method точно равен 'post'.
fetchWithAuth('s', method as 'post');
