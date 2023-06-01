require("./mongodb");
const mongoose = require("mongoose");
const dadoModel = require("../models/dadoModel");
const dados = require("./dados.json");

async function carregarDados() {
    try {
        await dadoModel.deleteMany({});
        for (const dado of dados) {
            await dadoModel.create(dado);
        }
        console.log("Cadastro feito!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();