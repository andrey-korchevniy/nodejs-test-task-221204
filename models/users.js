// const { readFile } = require('fs/promises');
// const { join } = require('path');

// const users_path = join(__dirname, 'users.json');

// const listUsers = async () => {
//   const data = await readFile(users_path);
//   return JSON.parse(data);
// };

// const getUserInfo = async () => {};

// const getMaxFollowing = async () => {};

// const getNotFollowing = async () => {};
// // // /users - endpoint для отримання усіх юзерів (з підписками).
// // // /users/123/friends?order_by=id&order_type=desc - endpoint для отримання інформації про юзера з друзями та доступним сортуванням за вказаним полем. (за друзів будемо вважати взаємну підписку).
// // // /max-following - endpoint для отримання топ-5 юзерів, які зробили найбільше підписок.
// // // /not-following - endpoint для отримання юзерів, якi зробили 0 підписок.

// module.exports = {
//   listUsers,
//   getUserInfo,
//   getMaxFollowing,
//   getNotFollowing,
// };
