var tipuesearch = {"pages": [{'title': 'About', 'text': '40923104 江宜珊 四設三甲 \n 倉儲連結: 409231044 \n 靜態網站: site-40923104 \n / \n 課程的公布欄: mde.tw \n 課程teams: cp2022 teams \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n <br/><br/><br/> \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'CP2022', 'text': ' Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n', 'tags': '', 'url': 'CP2022.html'}, {'title': 'W4', 'text': '學會用.replit同步個人倉儲,進入倉儲修改其內容,也可以直接推到遠端 \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '設定SSH和Key,還有倉儲改版的設定 \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W8~9', 'text': '期中考周 \n', 'tags': '', 'url': 'W8~9.html'}, {'title': 'W10', 'text': '因電腦的ipv6有問題 而導致隨堂考試沒辦法準時登入 \n 分小組 6個人一組 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '因運動會 所以不上課 \n 乙班有用JSON檔統計上缺考的人 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '因為準備比賽所以缺考考試 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w10 HW1', 'text': '心得: \n \n ///////////// 老師上課內容 ////////////// \n \n 利用 Python 或 Brython 讀取  JSON  檔案: \n 1b w10 小考結果 為  JSON  檔案格式, 請各小組編寫程式處理這個檔案資料, 並回答下列問題: \n 1) 請問是否能夠以此 小考結果檔案 作為輸入, 直接列出該班缺考人員學號? \n 2) 承上, 若將缺考者得分視為 0 分, 是否可以列出以該班選課人員學號作為第一欄資料, 而第二欄位則為本次考試的成績? \n \n \n', 'tags': '', 'url': 'w10 HW1.html'}, {'title': 'w10 HW2', 'text': '心得:我有自己試寫了程式便去試試看怎樣才能使結果變成可以直接 輸出 1, 3, 5, 7, 9 不會跳行,但還沒找出為甚麼跳行的原因,以下有實際操作的截圖 \n \n (自己修改的程式以及解釋) \n \n a = "" for i in range(1, 10, 2):\xa0 --------從1開始到小於10的數字,並每一次增量2  print(a + str(i) + ",")\xa0 ------------------數字顯示不跳行,並以逗號隔開 print(a) \n \n 1.這是一開始一直失敗的畫面 \n \n \n 2.後來稍微成功,但數字會同時顯示兩次 \n \n \n 3.後來成功一半的畫面,但是有換行的部分 \n \n \n ///////////// 老師上課內容 ////////////// \n \n a = ""  for i in range(1, 10, 1):  a + str(i) + ","  print(a) \n \n \n \n # 1, 3, 5, 7, 9 \n 如何修改上列程式, 可以輸出 1, 3, 5, 7, 9 \n \n \n \n \n', 'tags': '', 'url': 'w10 HW2.html'}, {'title': 'w12', 'text': '', 'tags': '', 'url': 'w12.html'}, {'title': 'hw1', 'text': '\xa0 hw1 \xa0(有做出來的連結) \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n //// 在自己的倉儲中新增New Gist\xa0///// \n \n \n', 'tags': '', 'url': 'hw1.html'}, {'title': 'hw2', 'text': 'ex2 \xa0 (有做出來的連結) \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n /', 'tags': '', 'url': 'hw2.html'}]};