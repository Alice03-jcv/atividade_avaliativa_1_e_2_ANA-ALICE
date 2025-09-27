import PF from './PF.js';
import Disciplina from './Disciplina.js'


class Aluno extends PF {
  
  #matricula;
  #curso;
  #disciplina;

  setMatricula(matricula) {
    if (matricula && matricula.length === 8 && matricula.startsWith("20")) {
      this.#matricula = matricula;
      return true;
    }
    return false;
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    if (curso && (curso === 'ADS' || curso === 'SI')) {
      this.#curso = curso;
      return true;
    }
    return false;
  }

  getCurso() {
    return this.#curso;
  }

  setDisciplina(disciplina) {
    this.#disciplina = disciplina;
  }

  getDisciplina() {
    return this.#disciplina;
  }
}

export default Aluno;