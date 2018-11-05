// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //urlDB = process.env.NODE_ENV.MONGO_URI;
    urlDB = 'mongodb://cafe-user:Jerga123@ds151863.mlab.com:51863/cafe'
}
process.env.URLDB = urlDB;