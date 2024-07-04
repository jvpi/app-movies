const {Pool} = require('pg')

export const pool = new pg.Pool({
	user:'postgres',
	host:'localhost',
	password: "123456",
	port:"5432",
	database:"series" 

})
avaScript
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'banco',
  password: 'password',
});

const transferirDinero = async (cuentaOrigen, cuentaDestino, monto) => {
  await client.connect();

  try {
    await client.begin();

    // Restar el monto de la cuenta de origen
    await client.query('UPDATE cuentas SET balance = balance - $1 WHERE id = $2', [monto, cuentaOrigen]);

    // Verificar si hay fondos suficientes
    const saldoOrigen = await client.query('SELECT balance FROM cuentas WHERE id = $1', [cuentaOrigen]);
    if (saldoOrigen.rows[0].balance < 0) {
      throw new Error('Fondos insuficientes en la cuenta de origen');
    }

    // Sumar el monto a la cuenta de destino
    await client.query('UPDATE cuentas SET balance = balance + $1 WHERE id = $2', [monto, cuentaDestino]);

    // Confirmar la transacción
    await client.commit();
    console.log('Transferencia realizada con éxito.');
  } catch (err) {
    console.error('Error durante la transferencia:', err.stack);
    await client.rollback();
  } finally {
    await client.end();
  }
};

// Ejemplo de uso
transferirDinero(1, 2, 1000)
  .then(() => {
    console.log('Transacción completada.');
  })
  .catch(err => {
    console.error('Error al completar la transacción:', err.message);
  });