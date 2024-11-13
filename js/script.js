const usuarios = [
    { nome: "Jessye Késsia de Carvalho Pereira", idade: "26", cpf: "434.943.784-75" },
    { nome: "Lucas Andadre dos Santos", idade: "21", cpf: "232.432.033-90" },
    { nome: "Johnner Yelcde", idade: "21", cpf: "437.868.123-89" }
];

const listaNomesElement = document.createElement('ul');
document.body.appendChild(listaNomesElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirNovoUsuario() {
    const inputNomeElement = document.querySelector('#nome').value;
    const inputIdadeElement = document.querySelector('#idade').value;
    const inputCPFElement = document.querySelector('#CPF').value;

    const novoUsuario = {
        nome: inputNomeElement,
        idade: inputIdadeElement,
        cpf: inputCPFElement
    };

    inserirUsuarioNaLista(novoUsuario);
}

function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');

    const spanElement = document.createElement('span');
    spanElement.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}, CPF: ${usuario.cpf} `;

    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';
    botaoRemoverElement.addEventListener('click', (event) => {
        liElement.remove();
    });

    spanElement.addEventListener('click', event => {
        const inputElement2 = document.createElement('input');
        inputElement2.value = usuario.nome;

        inputElement2.addEventListener('blur', () => {
            usuario.nome = inputElement2.value;
            spanElement.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}, CPF: ${usuario.cpf} `;
            liElement.replaceChild(spanElement, inputElement2);
        });

        liElement.replaceChild(inputElement2, spanElement);
        inputElement2.focus();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);

    listaNomesElement.appendChild(liElement);
}



