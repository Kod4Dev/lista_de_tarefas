import { kodaTarefa } from "./criaTarefas.js";

export const criaData = (data) => {
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY')

    const dataTopo = document.createElement('li');
    const conteudo = `<p class="data_top">${dataMoment.format('DD/MM/YYYY')}</p>`;

    dataTopo.innerHTML = conteudo;

    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')

        const diff = dataMoment.diff(dia)

        if(diff == 0) {
            dataTopo.appendChild(kodaTarefa(tarefa, id))
        }

    }))

    return dataTopo

}