//postgres param and connection
const { Pool } = require("pg");
const pool = new Pool({
  host: "192.168.100.10",
  port: 5433,
  user: "postgres",
  password: "password",
  max: 100,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
});
module.exports = async function ({ context, eventHubMessage }) {
  eventHubMessage.forEach(async (els) => {
    els.forEach(async (el) => {
      try {
        const client = await pool.connect();
        const res = await client.query(
          `INSERT INTO public.transactions(value) VALUES (${
            Math.random() * 10
          })`
        );
        context.log(
          `idle: ${pool.idleCount} waiting: ${pool.waitingCount} total: ${pool.totalCount}`
        );
        client.release();
      } catch (err) {
        context.log(err);
      }
    });
  });
  Promise.all([pool.end(() => {})]).then(() => {
    context.log(`Close All Connection`);
  });
};
