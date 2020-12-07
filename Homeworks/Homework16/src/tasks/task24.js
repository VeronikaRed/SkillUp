function User(name, online) {
    (this.name = name), (this.online = online);
}
const user1 = new User('Alan', false);
const user2 = new User('Jeff', true);
const user3 = new User('Sarah', false);
const arr = [user1, user2, user3];
function checkOnline(array) {
    return array.filter(user => user.online);
}
export function showOnlineUsers() {
    const onlineUsers = checkOnline(arr);
    onlineUsers.forEach(element => console.log(element.name));
}
