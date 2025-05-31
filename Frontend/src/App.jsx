import { useEffect, useState } from 'react';

function App() {
  const [consigna, setConsigna] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/consigna')
      .then(res => res.json())
      .then(data => setConsigna(data));
  }, []);

  const votar = (opcion) => {
    fetch('http://localhost:3001/api/votar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ opcion }),
    })
      .then(res => res.json())
      .then(data => setConsigna(data.consigna));
  };

  if (!consigna) return <p>Cargando...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>DuelApp 🥊</h1>
      <h2>{consigna.consigna}</h2>
      <button onClick={() => votar('A')}>{consigna.opcionA}</button>
      <button onClick={() => votar('B')}>{consigna.opcionB}</button>
      <div style={{ marginTop: '1rem' }}>
        <p>{consigna.opcionA}: {consigna.votosA} votos</p>
        <p>{consigna.opcionB}: {consigna.votosB} votos</p>
      </div>
    </div>
  );
}

export default App;
