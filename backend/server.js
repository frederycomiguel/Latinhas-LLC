const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3001;

// Cria uma instância do SQLite em memória
const db = new sqlite3.Database(':memory:');

// Cria a tabela 'demands' se ela não existir
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS demands (id TEXT PRIMARY KEY, description TEXT)');
});

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para cadastrar uma nova demanda
app.post('/api/demands', (req, res) => {
    const { id, description } = req.body;
    // Insere a demanda no banco de dados
    db.run(`INSERT INTO demands (id, description) VALUES (?, ?)`, [id, description], (err) => {
        if (err) {
            res.status(500).send('Erro ao criar a demanda');
        } else {
            res.status(201).send('Demanda criada com sucesso');
        }
    });
});

// Rota para visualizar todas as demandas
app.get('/api/demands', (req, res) => {
    // Busca todas as demandas no banco de dados
    db.all('SELECT * FROM demands', (err, rows) => {
        res.json(rows);
    });
});

// Rota para editar uma demanda existente
app.put('/api/demands/:id', (req, res) => {
    const { description } = req.body;
    const { id } = req.params;
    // Atualiza a descrição da demanda no banco de dados
    db.run('UPDATE demands SET description = ? WHERE id = ?', [description, id], (err) => {
        if (err) {
            res.status(500).send('Erro ao atualizar a demanda');
        } else {
            res.status(200).send('Demanda atualizada com sucesso');
        }
    });
});

// Rota para remover uma demanda
app.delete('/api/demands/:id', (req, res) => {
    const { id } = req.params;
    // Remove a demanda do banco de dados
    db.run('DELETE FROM demands WHERE id = ?', [id], (err) => {
        if (err) {
            res.status(500).send('Erro ao excluir a demanda');
        } else {
            res.status(200).send('Demanda excluída com sucesso');
        }
    });
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
