"use strict"

const getUsers = async () => {
    let url = 'data/users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
};

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();