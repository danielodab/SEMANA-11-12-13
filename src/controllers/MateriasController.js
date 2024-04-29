const Curso = require("../models/Curso")
const Materia = require("../models/Materias")

class MateriasController {

    async cadastrar(req, res) {

        try {

            const id_curso = req.body.id_curso // id do curso
            const nm_materia = req.body.nm_materia

            if (!nm_materia) {
                return res.status(400).json({ message: 'O nome da matéria é obrigatório' })
            }
            
            if (!id_curso) {
                return res
                    .status(409)
                    .json({ mensagem: 'O ID do curso é obrigatório' })
            }

            const curso = await Curso.findByPk(id_curso)
            if (!curso) return res.status(404).json({ mensagem: 'O curso não existe' })

            const MateriaExistente = await Materia.findOne({
                where: {
                    materia: nm_materia
                }
            })

            if (MateriaExistente) {
                return res.status(409).json({ mensagem: 'Matéria já cadastrada para esse curso' })
            }
            /* Validar se já existe o mesmo curso para o mesmo aluno */

            const materia = await Materia.create({
                id_curso: id_curso,
                materia: nm_materia
            })

            res.status(201).json(materia)
        } catch (error) {
            res.status(500).json({ mensagem: 'Não foi possível o registro da materia' })
        }

    };

    async listar(req,res){
        cursoRoutes.get('/', auth,  async (req, res) => {
            try {
                let params = {}
                if (req.query.nome) {
                    
                    params = { ...params, nome: req.query.nome }
                }
        
                if (req.query.duracao_horas) {
                    
                    params = { ...params, duracao_horas: req.query.duracao_horas }
                }
        
                const materias = await Materia.findAll({
                    where: params
                })
        
                res.json(materias)
            } catch (error) {
                console.log(error.message)
                res.status(500).json({ error: 'Não possível listar todas as materias' })
            }
        })
    }; 
    
async deletar(req,res){    
        cursoRoutes.delete('/:id', auth, (req, res) => {
            const { id } = req.params
        
            Materia.destroy({
                where: {
                    id: id
                }
            })
        
            res.status(204).json({})
        })
};
    
async alterar(req,res){
        
        cursoRoutes.put('/:id', auth, async (req, res) => {
            const { id } = req.params
        
            const materia = await Materia.findByPk(id)
        
            if (!materia) {
                return res.status(404).json({ message: 'Materia não encontrada' })
            }
        
            materia.update(req.body)
        
            await materia.save()
        
            res.json(materia)
        })
};
        
}


module.exports = new MateriasController()