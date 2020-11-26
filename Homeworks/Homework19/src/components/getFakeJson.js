export async function getFakeJson(target) {
    let url = `https://jsonplaceholder.typicode.com/${target}`;
    let response = await fetch(url);
    let content = await response.json();
    content.filter(el => el.id < 10).forEach(element => console.log(element));
}
