import BotaoConcluir from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
import { carregaTarefa } from './carregaTarefa.js';


export const kodaNovoItem = (event) => {

    event.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY');

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    
    const valor = input.value;
    const done = false

    const dados = {
        valor, 
        dataFormatada,
        horario,
        done
    }

    const tarefasAtt = [... tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtt));

    input.value = " "

    carregaTarefa();
}


export const kodaTarefa = ({valor, horario, done}, id) => {
 
    const tarefa = document.createElement('li');


    if( done ) {
        tarefa.classList.add('done')
    }
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConcluir(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;
}