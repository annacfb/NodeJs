const dadoModel = require('../models/dadoModel');

class DadoController {
    async salvar(req, res) {
        try {
          let dado = req.body;
          const max = await dadoModel.findOne({}).sort({ id: -1 });
          dado.id = max == null ? 1 : max.id + 1;
          const resultado = await dadoModel.create(dado);
          if(resultado)
          res.status(201).json('Usuário cadastrado com sucesso. Verifique no banco!');
          else {
            res.status(404).json({ error: 'Dado não encontrado' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao salvar dado' });
        } 
      }
       
      async listar(req, res) {
        try {
          const resultado = await dadoModel.find({});
          if(resultado)
          res.status(200).json(resultado);
          else {
            res.status(404).json({ error: 'Dado não encontrado' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao listar dados' });
        }
      }
      
      async buscarPorId(req, res) {
        try {
          const id = req.params.id;
          const resultado = await dadoModel.findOne({ 'id': id });
          if (resultado) {
            res.status(200).json(resultado);
          } else {
            res.status(404).json({ error: 'Dado não encontrado' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar dado por ID' });
        }
      }
      

      async filtroDados(req, res) {
        try {
          const { filtro } = req.params;

          console.log(filtro)
      
          const result = await dadoModel.find({ $or: [
            { nome: filtro },
            { sobrenome: filtro },
            { cidade: filtro },
            { estado: filtro },
            { status: filtro },
          ]});
      
          res.status(200).json(result);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao listar usuários' });
        }
      }
      
      
    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const resultado = await dadoModel.findOne({ 'nome': nome });
        res.status(200).json(resultado);
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const resultado = await dadoModel.findOne({ 'sobrenome': sobrenome });
        res.status(200).json(resultado);
    }  
    
    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const resultado = await dadoModel.findOne({ 'cidade': cidade });
        res.status(200).json(resultado);
    }  

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const resultado = await dadoModel.findOne({ 'estado': estado });
        res.status(200).json(resultado);
    }  

    async buscarPorStatus(req, res) {
        const status = req.params.status;
        const resultado = await dadoModel.findOne({ 'status': status });
        res.status(200).json(resultado);
    } 

    async atualizar(req, res) {
        try {
          const id = req.params.id;
          const dadoExistente = await dadoModel.findOne({ 'id': id });
      
          if (!dadoExistente) {
            return res.status(404).json({ error: 'Dado não encontrado' });
          }
      
          const _id = String(dadoExistente._id);
          await dadoModel.findByIdAndUpdate(_id, req.body);
      
          res.status(200).json({ message: 'Registro atualizado com sucesso. Verifique no banco!' });
        } catch (error) {
          res.status(500).json({ error: 'Erro ao atualizar dado' });
        }
      }      
      
      async excluir(req, res) {
        try {
          const id = req.params.id;
          const dadoExistente = await dadoModel.findOne({ 'id': id });
      
          if (!dadoExistente) {
            return res.status(404).json({ error: 'Dado não encontrado' });
          }
      
          const _id = String(dadoExistente._id);
          const dadoDeletado = await dadoModel.findByIdAndRemove(_id);
      
          res.status(200).json({ message: 'Registro deletado com sucesso', deletedData: dadoDeletado });
        } catch (error) {
          res.status(500).json({ error: 'Erro ao excluir dado' });
        }
      }
      
      
}

module.exports = new DadoController();