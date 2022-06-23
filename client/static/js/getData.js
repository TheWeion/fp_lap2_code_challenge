//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

let htmlCode = '';

// ────────────────────────────────────────────────────────────────────────────────

getData();

function getUrlData() {
    let url_str = window.location.href;
    let url = new URL(url_str);
    let search_params = url.searchParams; 

    let id = search_params.get('id');

    return id;
}

async function getData(){
    await fetch(`http://localhost:3000/post/{${getUrlData()}}`) // BUG: Percent-encoded output instead of id value e.g 1 -> %7B1%7D
        .then(response => response.json())
        .then(appendPost)
        .catch(console.warn)
};

function appendPost(e){
    htmlCode += `
        <section id="post-modal">
            <i><a href="#">x</a></i>
            <h2>${e.title}</h2>
            <h3>${e.name}</h3>
            <article>
                ${e.story}
            </article>
            <button>Close</button>
        </section>
        `
        const postRender = document.querySelector('.container');
        postRender.innerHTML = htmlCode;
};