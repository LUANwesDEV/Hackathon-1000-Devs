const { Pool } = require('pg');

const pool = new Pool({
    user: 'gerty',
    host: 'itcpostgresql.postgres.database.azure.com',
    database: 'db011',
    password: '%&unsas_aew27011',
    port: 5432,
    ssl: true
});

const showVacinasCount = async() => {
    const result = await pool.query('SELECT count(*) from VACINA');
    console.log(result.rows);
}
console.log(pool.options.user);
console.log(pool.options.database);
showVacinasCount();