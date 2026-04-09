const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = '/data/visits.txt'; 

const APP_MSG = process.env.APP_MESSAGE || "Hello World";
const DB_USER = process.env.DATABASE_USER || "unknown";

app.get('/', (req, res) => {
    const timestamp = new Date().toISOString();
    
    console.log(`Visite reçue à : ${timestamp}`);

    fs.appendFileSync(DATA_FILE, `Visite le ${timestamp}\n`);

    res.send(`
        <h1>Kubernetes Lab</h1>
        <p><strong>Message:</strong> ${APP_MSG}</p>
        <p><strong>DB User:</strong> ${DB_USER}</p>
        <p><em>Donnée enregistrée sur le volume à ${timestamp}</em></p>
    `);
});

app.listen(PORT, () => {
    console.log(`L'app tourne sur le port ${PORT}`);
    if (!fs.existsSync('/data')) fs.mkdirSync('/data');
});