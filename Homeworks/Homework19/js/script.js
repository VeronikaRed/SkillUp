async function getGitPhoto(userName) {
    let url = `https://api.github.com/users/${userName}`;
    let response = await fetch(url);
    let content = await response.json();
    let img = document.createElement("img");
    img.setAttribute("src", content.avatar_url);
    document.body.prepend(img);
}
getGitPhoto("VeronikaRed");


async function getFakeJson(target) {
    let url = `https://jsonplaceholder.typicode.com/${target}`;
    let response = await fetch(url);
    let content = await response.json();
    content.filter(el => el.id < 10)
        .forEach(element => console.log(element));
}
getFakeJson("posts");