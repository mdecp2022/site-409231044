var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n <br/><br/><br/> \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'CP2022', 'text': ' Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n', 'tags': '', 'url': 'CP2022.html'}, {'title': 'W1', 'text': '', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '學會用.replit同步個人倉儲 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '設定SSH和倉儲設定 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '因電腦的ipv6有問題 而導致隨堂考試沒辦法準時登入 \n 分小組 6個人一組 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '因運動會 所以不上課 \n 乙班有用JSON檔統計上缺考的人 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '因為準備比賽所以缺考考試 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w12', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n', 'tags': '', 'url': 'w12.html'}]};