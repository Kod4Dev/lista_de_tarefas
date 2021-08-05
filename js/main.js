import { carregaTarefa } from './componentes/carregaTarefa.js';
import { kodaNovoItem, kodaTarefa } from './componentes/criaTarefas.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', kodaNovoItem);

carregaTarefa();
