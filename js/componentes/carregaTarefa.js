import { ordenaData, removeData } from "../../service/data.js";
import { criaData } from "./criarData.js";

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " "
    const datasUnicas = removeData(tarefasCadastradas);
    ordenaData(datasUnicas)

    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia));

    })

}
