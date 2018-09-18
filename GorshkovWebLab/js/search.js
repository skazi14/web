 var input, search, pr, result, result_arr, locale_HTML, result_store;

        function func() {
            locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Первоначальный)
        }
        setTimeout(func, 1000);  //ждем подгрузки Jsona и выполняем

        function FindOnPage(name) {

            input = document.getElementById(name).value; //получаем значение из поля в html

            if (input.length < 3) {
                alert('To search, you must enter three or more characters');
                function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
            }

            if (input.length >= 3) {
                function FindOnPageGo() {

                    search = '/' + input + '/g';  //делаем из строки регуярное выражение
                    pr = document.body.innerHTML;   // сохраняем в переменную весь body
                    result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
                    result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

                    var warning = true;
                    for (var i = 0; i < result.length; i++) {
                        if (result[i].match(eval(search)) != null) {
                            warning = false;
                        }
                    }
                    if (warning == true) {
                        alert('Not found');
                    }

                    for (var i = 0; i < result.length; i++) {
                        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#29c5e6;">' + input + '</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
                    }
                    for (var i = 0; i < result.length; i++) {
                        pr = pr.replace(result[i], result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
                    }
                    document.body.innerHTML = pr;  //заменяем html код
                }
            }
            function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
           FindOnPageBack(); FindOnPageGo();  //чистим прошлое и Выделяем найденное
            
        }