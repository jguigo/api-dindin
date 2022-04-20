const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

const CursoController = {
   cadastrarCurso(req, res) {
      const { titulo, descricao, professor } = req.body;

      if (!titulo || !descricao || !professor) {
         return res
            .status(400)
            .json({ error: "Você precisa passar os atributos corretamente" });
      }

      listaDeCursos.push({
         titulo,
         descricao,
         professor
      });
      console.log(req.body); // deletar depois
      console.log(listaDeCursos); //deletar depois
      fs.writeFileSync("./src/models/cursos.json", JSON.stringify(listaDeCursos));
      console.log(listaDeCursos.length);
      return res.status(201).json({message: "Cadastro efetuado com sucesso!"});
   },
};

module.exports = CursoController;
