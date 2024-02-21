let user = {
    name: "Ilo",
    gender: "female",
    birthday: "24.11.2003"
};
user.age = new Date().getFullYear() - parseInt(user.birthday);
delete user.birthday;
console.log(user);