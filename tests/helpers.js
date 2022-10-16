const axios = require('axios');
const { exec } = require('child_process');
const util = require('util');

const asyncExec = util.promisify(exec);
const DB_RESTORE = __dirname + '/../dbtools/restore.sh';

const restoredb = async () => {
    await asyncExec(DB_RESTORE);
};

const api = axios.create({ baseURL: 'http://localhost:8080' });

// Some permanent test data
const ADMIN_USER_ID = 23;
const ACCOUNTANT_USER_ID = 55;

module.exports = {
    restoredb,
    api
}