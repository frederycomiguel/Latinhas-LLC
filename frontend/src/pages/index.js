// pages/index.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDemands, createDemand, updateDemand, deleteDemand } from '../redux/actions/demandsActions';

const initialState = {
    description: '',
};

export default function Home() {
    const [form, setForm] = useState(initialState);
    const demands = useSelector((state) => state.demands);
    const dispatch = useDispatch();

    useEffect(() => {
        // Carregar as demandas ao montar o componente
        dispatch(fetchDemands());
    }, [dispatch]);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddDemand = () => {
        // Criar uma nova demanda
        dispatch(createDemand(form.description));
        setForm({ description: '' });
    };

    const handleEditDemand = (id, description) => {
        // Editar uma demanda existente
        const updatedDescription = prompt('Editar demanda:', description);
        if (updatedDescription !== null) {
            dispatch(updateDemand(id, updatedDescription));
        }
    };

    const handleDeleteDemand = (id) => {
        // Remover uma demanda
        if (window.confirm('Tem certeza de que deseja excluir esta demanda?')) {
            dispatch(deleteDemand(id));
        }
    };

    return (
        <div>
            <h1>Sistema de Planejamento de Demandas</h1>
            <form>
                <label>
                    Descrição:
                    <input type="text" name="description" value={form.description} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleAddDemand}>
                    Adicionar Demanda
                </button>
            </form>
            <ul>
                {demands.map((demand) => (
                    <li key={demand.id}>
                        {demand.description}
                        <button type="button" onClick={() => handleEditDemand(demand.id, demand.description)}>
                            Editar
                        </button>
                        <button type="button" onClick={() => handleDeleteDemand(demand.id)}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
