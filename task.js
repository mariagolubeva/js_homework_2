// 1) Установить локально пакет fs-extra
// 2) Создать папку
// 3) Создать текстовый файл
// 4) создать вторую папку
// 5) переместить файл из первой папки во вторую
// 6) Удалить файл
// 7) удалить папки

const fs = require('fs-extra');

const folder_1 = './folder_1';
const folder_2 = './folder_2';
const file = 'file.txt';

const path_1 = folder_1 + "/" + file;
const path_2 = folder_2 + "/" + file;

//create folder
fs.ensureDir(folder_1, () => {
    console.log('The first folder is created!');
    //create file
    fs.ensureFile(folder_1 + "/" + file, () => {
        console.log('The file is created!');
        //create folder
        fs.ensureDir(folder_2, () => {
            console.log('The second folder is created!');
            //move file
            fs.move(path_1, path_2, () => {
                console.log('The file is moved!');
                //delete file
                fs.remove(folder_2 + "/" + file, () => {
                    console.log('The file is deleted!');
                    //delete folder 1
                    fs.remove(folder_1, () => {
                        console.log('The first folder is deleted!');
                        //delete folder 2
                        fs.remove(folder_2, () => {
                            console.log('The second folder is deleted!');
                        });
                    });
                });
            });
        });
    });
});
