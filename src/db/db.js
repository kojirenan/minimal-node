import postgres from 'postgres';

const URL = `postgres://postgres:12345@localhost:5432/postgres`;
const sql = postgres(URL);

export default sql;
