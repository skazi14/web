 var input, search, pr, result, result_arr, locale_HTML, result_store;

        function func() {
            locale_HTML = document.body.innerHTML;   // ��������� � ���������� ���� body (��������������)
        }
        setTimeout(func, 1000);  //���� ��������� Jsona � ���������

        function FindOnPage(name) {

            input = document.getElementById(name).value; //�������� �������� �� ���� � html

            if (input.length < 3) {
                alert('To search, you must enter three or more characters');
                function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
            }

            if (input.length >= 3) {
                function FindOnPageGo() {

                    search = '/' + input + '/g';  //������ �� ������ ��������� ���������
                    pr = document.body.innerHTML;   // ��������� � ���������� ���� body
                    result = pr.match(/>(.*?)</g);  //�������� ��� ���� � �������� ������ �����
                    result_arr = [];   //� ���� ������� ����� ������� ��������� ������ (���������)

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
                        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:#29c5e6;">' + input + '</span>'); //������� ������ ��������, ������ ����� � ��������� � ����� ������
                    }
                    for (var i = 0; i < result.length; i++) {
                        pr = pr.replace(result[i], result_arr[i])  //�������� � ���������� � html ����� �� ����� �� ������� ������
                    }
                    document.body.innerHTML = pr;  //�������� html ���
                }
            }
            function FindOnPageBack() { document.body.innerHTML = locale_HTML; }
           FindOnPageBack(); FindOnPageGo();  //������ ������� � �������� ���������
            
        }