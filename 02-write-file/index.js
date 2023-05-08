const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const writeText = 'text.txt';
const textPath = path.join(__dirname, writeText);
const writeStream = fs.createWriteStream(textPath, 'utf8');

console.log('Запишите текст в файл, чтобы закрыть программу напишите "exit" или сочетание клавиш ctrl + c');

rl.on('line', (input) => {
    if (input === 'exit') {
      console.log('Завершение работы');
      rl.close();
    } else {
        writeStream.write(input + '\n');
        console.log(`Записано: ${input}`);
    }
  });

  rl.on('close', () => {
    console.log('Программа завершена');
  });