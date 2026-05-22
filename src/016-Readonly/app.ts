// Readonly tuple: значения доступны для чтения, но изменить элементы нельзя.
const skill: readonly [number, string] = [1, 'Dev'];
console.log(skill);

// Readonly array запрещает методы, которые меняют массив.
const skills: readonly string[] = ['DevOps', 'Dev'];
// skills.push('test');
console.log(skills);

// Альтернативная запись readonly-массива через generic-тип.
const skills2: ReadonlyArray<string> = ['DevOps', 'Dev'];
console.log(skills2);
