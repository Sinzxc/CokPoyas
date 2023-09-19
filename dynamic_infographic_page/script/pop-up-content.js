const content1 = document.getElementById('dpop1');
const content2 = document.getElementById('dpop2');
const content3 = document.getElementById('dpop3');
const content4 = document.getElementById('dpop4');
const content5 = document.getElementById('dpop5');
function read() {
    const url = new URL(window.location.href);
    const doc = url.searchParams.get('docs');
    let file = '';
    file1 = 'script/1.md';
    file2 = 'script/2.md';
    file3 = 'script/3.md';
    file4 = 'script/4.md';
    file5 = 'script/5.md';

    if (file1 !== '') {
        fetch(file1)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content1.innerHTML = window.marked.marked(response);
            })
    }
    if (file2 !== '') {
        fetch(file2)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content2.innerHTML = window.marked.marked(response);
            })
    }
    if (file3 !== '') {
        fetch(file3)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content3.innerHTML = window.marked.marked(response);
            })
    }
    if (file4 !== '') {
        fetch(file4)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content4.innerHTML = window.marked.marked(response);
            })
    }
    if (file5 !== '') {
        fetch(file5)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content5.innerHTML = window.marked.marked(response);
            })
    }
}
if (window.marked) {
    read();
}