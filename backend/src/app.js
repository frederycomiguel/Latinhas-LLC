const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const demandsRouter = require('./routes/demandsRoutes');
app.use('/api/demands', demandsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
