let demands = [];

const getAllDemands = () => demands;

const createDemand = (id, demand) => {
    const newDemand = { id, demand };
    demands.push(newDemand);
    return newDemand;
};

const updateDemand = (id, updatedDemand) => {
    demands = demands.map((demand) =>
        demand.id === id ? { ...demand, demand: updatedDemand } : demand
    );
    return { id, demand: updatedDemand };
};

const deleteDemand = (id) => {
    demands = demands.filter((demand) => demand.id !== id);
};

module.exports = {
    getAllDemands,
    createDemand,
    updateDemand,
    deleteDemand,
};
