const deletaTarefa = (atualiza, id) => {
    const index = id
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    tarefas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    atualiza()
}

const BotaoDeleta = (atualiza, id) => {

    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete_button')
    botaoDeleta.innerText = 'Deleta';
    botaoDeleta.addEventListener('click', () => deletaTarefa(atualiza, id));
    return botaoDeleta;

}

export default BotaoDeleta;