async function getGitPhoto() {
    let url = "https://api.github.com/users/VeronikaRed";
    let response = await fetch(url);
    let content = await response.json();
    let img = document.createElement("img");
    img.setAttribute("src", content.avatar_url);
    document.body.prepend(img);
}
getGitPhoto();


async function getFakeJson(target) {
    let url = `https://jsonplaceholder.typicode.com/${target}`;
    let response = await fetch(url);
    let content = await response.json();
    content.filter(el => el.id < 10)
        .forEach(element => console.log(element));
}
getFakeJson("posts");