const userInfo = {}

var a = 0

for (let i = 1; i <= 10; i++) {
    do {
        var userName = prompt('Введите имя ?')
    } while ( !isNaN(userName) );
    do {
        var userAge = +prompt('Введите возраст ?')
    } while (isNaN(userAge));
    
    userInfo[a = a + 1] = {
        name: userName,
        age: userAge
    }

    for (const key in userInfo) {
        for (const newkey in userInfo[key]) {
            console.log(`Ползователь - ${key} \n Имя: ${userInfo[key].name} \n Возраст: ${userInfo[key].age}`);
        }
    }
}

 console.log(userInfo);
