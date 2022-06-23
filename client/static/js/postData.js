
function postData(e) {
    e.preventDefault();

    const postData = {
        Title: e.target['title'].value,
        Name: e.target['name'].value,
        Story: e.target['story'].value
    };


    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }

    };

    fetch('http://localhost:3000/posts/Add', options)
        .then(r => r.json())
        .catch(console.warn);
        
    e.target['title'].value = '';
    e.target['name'].value = '';
    e.target['story'].value = '';
};

module.exports = postData;