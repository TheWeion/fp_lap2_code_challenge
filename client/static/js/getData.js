async function getData() {
    const response = await fetch('http://localhost:3000/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
}

async function getAllPosts() {

    document.getElementById('posts-section').innerHTML = '';

    postsData = await getData();

}

module.exports ={ getAllPosts }