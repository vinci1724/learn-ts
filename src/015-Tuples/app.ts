// Tuple: строго два элемента - число и строка.
const skill: [number, string] = [1, 'Dev'];

// Деструктуризация tuple сохраняет типы по позициям.
const [skillId, skillName] = skill;

// Первые два элемента фиксированы, дальше может быть любое число boolean.
const arr: [number, string, ...boolean[]] = [1, 'test', true, false, true];

console.log(skillId, skillName);
console.log(arr);
