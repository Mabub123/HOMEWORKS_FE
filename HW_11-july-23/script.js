// 1.Вывести в консоль каждое второе число от 0 до 10
let a = 0;

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }

// 2.Вывести в консоль все числа от 55 до 20
 let b = 55;

 for (let i = 55; i >= 20; i--) {
     console.log(i);
   }

// 3. а)Вывести в консоль все числа из массива
  const numbers = [3, 5, 11, 2, 8, 1, 6];

 console.log("Числа из массива:");
 for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
 }

 //3. б)Создать новый массив с элементами, возведенными в квадрат
 const numbers_squared = [];
 for (let i = 0; i < numbers.length; i++) {
   numbers_squared.push(numbers[i] ** 2);
}

// 3. в)В переменную last_elem передать последний элемент
//      из сформированного массива numbers_squared 
  console.log("Массив numbers_squared:");
  console.log(numbers_squared);

const last_elem  = [numbers_squared];
const  numbers_squared1 = numbers_squared[numbers_squared.length-1]
console.log(numbers_squared1);

// 4.Сформировать строку
const user = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 20,
    salary: 500
  };
  
  const AboutUser = `User's name is ${user.firstName} ${user.lastName}. He is ${user.age} years old. Salary ${user.salary}`;
  
  console.log(AboutUser);