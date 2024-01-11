const { v4: uuidv4 } = require('uuid');
const Demand = require('../models/demandModel');

const getAllDemands = (req, res) => {
    res.json(Demand.getAllDemands());
};

const createDemand = (req, res) => {
    const { demand } = req.body;
    const newDemand = Demand.createDemand(uuidv4(), demand);
    res.json(newDemand);
};

const updateDemand = (req, res) => {
    const { id } = req.params;
    const { demand } = req.body;
    const updatedDemand = Demand.updateDemand(id, demand);
    res.json(updatedDemand);
};

const deleteDemand = (req, res) => {
    const { id } = req.params;
    Demand.deleteDemand(id);
    res.json({ message: 'Demanda deletada com sucesso' });
};

module.exports = {
    getAllDemands,
    createDemand,
    updateDemand,
    deleteDemand,
};
