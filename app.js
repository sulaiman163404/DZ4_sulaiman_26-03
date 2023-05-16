
var data = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo'];

// Создаем объект, где ключами будут типы данных, а значениями - массивы данных данного типа
var groupedData = {};

// Итерируемся по элементам списка и добавляем их в соответствующие массивы
for (const item of data) {
    const type = typeof item;

    if (!(type in groupedData)) {
        groupedData[type] = [];
    }
    groupedData[type].push(item);

}

// Получаем массив массивов, где каждый внутренний массив содержит элементы одного типа данных
var result = Object.values(groupedData);

// Сортируем массивы по количеству элементов, от большего к меньшему
result.sort((a, b) => b.length - a.length);

console.log(result);


