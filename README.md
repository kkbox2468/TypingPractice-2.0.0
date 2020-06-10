# Noob.Typing 
![](https://i.imgur.com/9HVS8NS.png =500x)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kkbox2468/TypingPractice-2.0.0) ![GitHub language count](https://img.shields.io/github/languages/count/kkbox2468/TypingPractice-2.0.0) ![GitHub top language](https://img.shields.io/github/languages/top/kkbox2468/TypingPractice-2.0.0) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/kkbox2468/TypingPractice-2.0.0)

想要學習程式設計，卻苦於打字速度很慢？
正在學習程式語言，可是各種程式語法不熟悉？
經常打錯字導致debug老半天？

試試[**NoobTyping**](https://www.noobtyping.com/)吧!

[**NoobTyping**](https://www.noobtyping.com/)是款主打純淨、簡單好用的打字練習網站，乾淨的介面讓你更能專注練習，提供Ruby語法讓你可以同時練習打字與記憶語法格式，並提供即時對戰的功能增添打字練習的趣味。是由4位非程式相關領域的學習者，經過2個月的學習，及1個月的開發而成。

![](https://i.imgur.com/XeYgfxX.gif =500x)

# 特色介紹
## 純淨的頁面，療癒的文字～
![](https://i.imgur.com/kDY2TAj.gif =500x)

告別廣告或絢麗的特效，採用2020最流行得Neumorphism風格設計，讓你可以專注在打字上，大幅提升練習效益。

## 不只打字，也打code！
![](https://i.imgur.com/Gg26TUw.jpg =500x)

學習程式設計老是打錯語法？沒關係，現在你可以在打字練習的同時，用身體記憶語法格式，一次練習雙倍進步，打code再也不痛苦！

## 個人成長一覽無遺！
![](https://i.imgur.com/2kpnz3b.jpg=500x)

![](https://i.imgur.com/ffAY7ZN.jpg=500x)

在打字練習的過程中，所有的過程結果都會記錄下來，你可以在個人報表的頁面查找，清楚的紀錄讓練習過程看得見，找出問題的關鍵，讓練習更有效率。

## 客製化關卡，想練的題目自己開！
![](https://i.imgur.com/Kn1xyHE.gif =500x)

老是打錯某些字？把這些字都搜集起來，自己開一個關卡吧！反覆的練習是進步的唯一關鍵，客製題目的關卡一定可以幫助你突破難關。

## 切換情境，打字更開心
![](https://i.imgur.com/CxBRMJH.gif =500x)

純淨的背景看久了有點膩？換換口味挑個喜歡的配色吧！偶爾換個心情放鬆一下，練習起來會更有效率喔！

## 一個人練習太無聊，來一場對戰吧！
![](https://i.imgur.com/Xqe4vXS.gif =500x)

一個人練習久了總也想知道自己現在的程度在哪裡，找你的好朋友來對戰一場吧！NoobTyping 提供即時對戰功能，不論你與好友相隔多遠，都可以隨時隨地連上同一個對戰聊天時，暢快地輸贏，增添打字練習的緊張、刺激！

# 開發環境與工具
任務管理：Trello

前端：Figma、HTML5、CSS、SCSS、JavaScript、jQuery、Bootstrap

後端：Rails 6.0.2.2、Ruby 2.6.5

版本控制：Git、GitHub

資料庫：PostgreSQL

其他套件：Device、Chart.js、AOS、stimulus_reflex、Rails-Admin、Redis、foreman...等


網站部署：Heroku

# 安裝套件須知

本專案基於 Rails 6.0.2.2 / Ruby 2.6.5 版本開發，並使用PostgreSQL做為資料庫。若你想fork一份進行修改，請務必在clone後，進行以下步驟：

1. 確保所有使用的套件都正常安裝
```
$ bundle install
```

2. 先在本地端建立PostgreSQL資料庫。如果你的電腦尚未安裝PostgreSQL，則先請安裝，安裝方法請參考[PostgreSQL官網](https://www.postgresql.org/)
```
$ rails db:create
```

3. 建立資料表
```
$ rails db:migrate
```
4. 如果看到下列訊息，請依照指示執行：
```
$ yarn install --check-files
```

![](https://i.imgur.com/sKZHG2T.png)


4. seed會提供預設的練習題。
```
$ rails db:seed
```
- 自己clone後的使用者若想修改非customization的題目也可以直接進後台修改，比較方便喔~~~

# Browser Support
NoobTyping 可以在以下瀏覽器中順利執行：

- Chrome (latest)
- Firefox (latest)
- Internet Explorer 11

# Mobile/Tablets
NoobTyping 專注於提供舒適的打字體驗，因此不支援行動平台。

# 開發者
高巧蓉
- email : **inorgpod@gmail.com**
- GitHub : [**inorgpod**](https://github.com/inorgpod)

劉恩慈
- email : **tainn_50554@yahoo.com.tw**
- GitHub : [**EnEnLiu**](https://github.com/EnEnLiu)

盧昱偉
- email : **willie91734563@gmail.com**
- GitHub : [**kkbox2468**](https://github.com/kkbox2468)

洪澤洋
- email : **arixxle@gmail.com**
- GitHub : [**Arixxle**](https://github.com/Arixxle)

# License
Copyright 2020 © NoobTyping