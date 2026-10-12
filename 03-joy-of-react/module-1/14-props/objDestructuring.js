const user = { name: 'Haris', age: 22, city: 'Sarajevo'};

/* 
    We put these 2 below into own scope, since if it is in the same scope,
    it will say that name, age, city have already been defined
*/
{
// Without Destructuring
const name = user.name;
const age = user.age;
const city = user.city;
}

{
// With Destructuring
const { name, age, city } = user;
}
