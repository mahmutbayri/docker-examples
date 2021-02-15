document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.innerText = 'Some text from script'
    document.querySelector('body').appendChild(title)
});
