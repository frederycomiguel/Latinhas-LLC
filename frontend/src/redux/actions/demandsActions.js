export const fetchDemands = () => async (dispatch) => {
    try {
        // Você pode fazer requisições à API aqui para obter as demandas do backend
        const demands = [
            { id: '1', description: 'Demanda 1' },
            { id: '2', description: 'Demanda 2' },
            { id: '3', description: 'Demanda 3' },
        ];

        dispatch({ type: 'FETCH_DEMANDS_SUCCESS', payload: demands });
    } catch (error) {
        console.error('Erro ao buscar as demandas:', error);
    }
};

export const createDemand = (demand) => async (dispatch) => {
    try {
        // Você pode fazer requisições à API aqui para criar uma demanda no backend
        dispatch({ type: 'CREATE_DEMAND_SUCCESS', payload: demand });
    } catch (error) {
        console.error('Erro ao criar a demanda:', error);
    }
};

export const updateDemand = (id, demand) => async (dispatch) => {
    try {
        // Você pode fazer requisições à API aqui para atualizar uma demanda no backend
        dispatch({ type: 'UPDATE_DEMAND_SUCCESS', payload: { id, ...demand } });
    } catch (error) {
        console.error('Erro ao atualizar a demanda:', error);
    }
};

export const deleteDemand = (id) => async (dispatch) => {
    try {
        // Você pode fazer requisições à API aqui para excluir uma demanda no backend
        dispatch({ type: 'DELETE_DEMAND_SUCCESS', payload: id });
    } catch (error) {
        console.error('Erro ao excluir a demanda:', error);
    }
};
