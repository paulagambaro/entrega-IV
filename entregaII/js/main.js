// ===== SPA - mostrar/ocultar seções =====
const menuLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').replace('#', '');
        sections.forEach(sec => sec.style.display = 'none');
        document.getElementById(target).style.display = 'block';
    });
});

// ===== Template de cards de projetos =====
const projects = [
    { name: "Plataforma ONG", link: "https://github.com/paulagambaro/plataforma-ong" },
    { name: "To Do List", link: "https://github.com/paulagambaro/projeto-to-do-list" },
    { name: "Portfólio", link: "https://github.com/paulagambaro/paulagambaro" }
];

const projectsContainer = document.querySelector('.projects .cards');
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${proj.name}</h3>
        <a href="${proj.link}" target="_blank">Ver no GitHub</a>
    `;
    projectsContainer.appendChild(card);
});

// ===== Validação do formulário =====
const form = document.querySelector('.contact form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    [nameInput, emailInput, messageInput].forEach(input => {
        if(input.value.trim() === '') {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = 'var(--cor-secundaria)';
        }
    });

    if(valid) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
