class Aluno {
  #matrícula; // visibilidade é privada
  #curso;
  #escola; // atributo público

  setMatrícula(matrícula) {
    this.#matrícula = matrícula;
  }

  setCurso(curso) {
    this.#curso = curso;
  }

  setEscola(escola) {
    this.#escola = escola;
  }

  getMatrícula() {
    return this.#matrícula;
  }

  getCurso() {
    return this.#curso;
  }

  getEscola() {
    return this.#escola;
  }
}

// Exportar a classe (se necessário em outro arquivo)
export default Aluno;
