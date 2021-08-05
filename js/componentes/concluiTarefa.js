const concluirTarefa = (atualiza, id) => {

    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    tarefas[id].done = !tarefas[id].done

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    atualiza()
}


const BotaoConcluir = (atualiza, id) => {

    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'Concluir';
    botaoConcluir.addEventListener('click', () => concluirTarefa(atualiza, id));
    return botaoConcluir;

}

export default BotaoConcluir;