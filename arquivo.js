const links = document.querySelectorAll('.incio123 a');
const secoes = document.querySelectorAll('section[id]');

function atualizarMenu() {
    let idAtual = 'inicio';

    secoes.forEach(function (secao) {
        const topo = secao.offsetTop - 100;
        if (window.scrollY >= topo) {
            idAtual = secao.id;
        }
    });

    const chegouNoFim = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    if (chegouNoFim) {
        idAtual = 'contato';
    }

    links.forEach(function (link) {
        link.classList.remove('inicio--ativo');

        if (link.getAttribute('href') === '#' + idAtual) {
            link.classList.add('inicio--ativo');
        }
    });
}

window.addEventListener('scroll', atualizarMenu);
atualizarMenu();