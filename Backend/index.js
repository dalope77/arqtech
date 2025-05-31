// index.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let consignas = [
  {
    id: 1,
    consigna: "¿Qué preferís para cenar?",
    opcionA: "Pizza",
    opcionB: "Empanadas",
    votosA: 0,
    votosB: 0
  }
];

app.get('/api/consigna', (req, res) => {
  res.json(consignas[0]);
});

app.post('/api/votar', (req, res) => {
  const { opcion } = req.body;
  if (opcion === 'A') {
    consignas[0].votosA++;
  } else if (opcion === 'B') {
    consignas[0].votosB++;
  } else {
    return res.status(400).json({ error: 'Opción inválida' });
  }

  res.json({ mensaje: 'Voto registrado', consigna: consignas[0] });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor escuchando en puerto ${PORT}`);
});
