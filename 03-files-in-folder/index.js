const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }

      if (stats.isFile()) {
        const extension = path.extname(file).slice(1);
        const sizeInKb = Math.ceil(stats.size / 1024);

        console.log(`${file}-${extension}-${sizeInKb}kb`);
      }
    });
  });
});