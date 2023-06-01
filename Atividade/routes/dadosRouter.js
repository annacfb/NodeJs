const express = require('express');
const router = express.Router();
const dadoController = require('../controllers/dadoController');

router.get('/', dadoController.listar);
router.post('/', dadoController.salvar);
router.get('/:id', dadoController.buscarPorId);
router.get('/filtro/:filtro', dadoController.filtroDados);
 // As vezes funciona, as vezes não. Caso não fucionar, utilizar as rotas comentadas abaixo para listar por nome, sobre, etc. 
// router.get('/nome/:nome', dadoController.buscarPorNome)
// router.get('/sobrenome/:sobrenome', dadoController.buscarPorSobrenome)
// router.get('/cidade/:cidade', dadoController.buscarPorCidade)
// router.get('/estado/:estado', dadoController.buscarPorEstado)
// router.get('/status/:status', dadoController.buscarPorStatus)
router.put('/:id', dadoController.atualizar);
router.delete('/:id', dadoController.excluir);

module.exports = router;
