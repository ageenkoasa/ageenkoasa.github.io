const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздаём все статические файлы из текущей папки
app.use(express.static(path.join(__dirname)));

// Маршрутизация
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/langs', (req, res) => {
  res.sendFile(path.join(__dirname, 'langs.html'));
});

app.get('/digital_economy', (req, res) => {
  res.sendFile(path.join(__dirname, 'digital_economy.html'));
});

app.get('/business_and_management', (req, res) => {
  res.sendFile(path.join(__dirname, 'business_and_management.html'));
});

app.get('/it', (req, res) => {
  res.sendFile(path.join(__dirname, 'it.html'));
});

app.get('/eplatform_lichba', (req, res) => {
  res.sendFile(path.join(__dirname, 'eplatform_lichba.html'));
});

app.get('/english_test', (req, res) => {
  res.sendFile(path.join(__dirname, 'english_test.html'));
});

app.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, 'news.html'));
});

app.get('/russian_for_chinese', (req, res) => {
  res.sendFile(path.join(__dirname, 'russian_for_chinese.html'));
});

// Подключение страницы 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});


// слушаем на всех сетевых интерфейсах
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
