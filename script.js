// var spisok = [100432543564787, 299, 3757,"nuernirnifininfi",4,5];
// const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const manthInYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var leson1 = ["zad1", "zad11", "zad111"];
// var leson2 = ["za2", "zad22", "zad222"];
// var leson3 = ["zad3", "zad33", "zad333"];
// var leson4 = ["zad3", "zad33", "zad333", "zad22", "zad222", "zad22", "zad222", "zad22", "zad222", "zad22", "zad222", "zad22", "zad222", "zad22", "zad222", "zad22", "zad222"];
// var leson5 = ["za2", "zad22", "zad222"];
// var leson6 = ["zad3", "zad33", "zad333"];
// var lesonAll = [];
// lesonAll.push(leson1, leson2, leson3,leson4,leson5,leson6);

// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth() + 1;
// const year = today.getFullYear();

// const todayDate = day + "." + month + "." + year;
// console.log(todayDate);
// document.getElementById("all2").textContent = todayDate;

// for (let i = 0; i < spisok.length; i++) {

//     let div = document.createElement('div');
//     div.id = "div" + (i + 1);

//     let button = document.createElement('button');
//     button.textContent = spisok[i]; // Значение из массива
//     button.id = "button" + (i + 1);
//     div.appendChild(button);
    
//     for (let j = 0; j < lesonAll[i].length; j++) { // Correct loop
//         let text = document.createElement('p'); // Создаём отдельный элемент для текста
//         text.textContent = lesonAll[i][j]; // Use correct index for lesonAll
//         text.style.display = "none"; // Текст скрыт по умолчанию
        
        // button.addEventListener("click", function () {
        //     text.style.display = text.style.display === "none" ? "block" : "none"; // Toggle visibility
        // });

//         // Add the text under the button
//         div.appendChild(text);
//     }
//         document.getElementById("all").appendChild(div);
//     // Add the button to the container
    
// }

// for(let i = 0; i<lesons.length;i++){
//     let div = document.createElement('div');
//     div.id = "div" + (i + 1);
//     let task = document.createElement('button');
//     task.textContent = lesons[i];
//     task.id = "button" + (i + 1);
//     div.appendChild(task);
//     for(let j = 0; j < zadania[i].length;j++){
//         let divtotext = document.createElement('div');
//         divtotext.className  = "divtotext";

//         let divtext = document.createElement('div');
//         // divtext.id = "divbuttondiv" + (i + 1);
//         divtext.className  = "divtext";
//         divtext.style.display = 'none';

//             let text = document.createElement("p")
//             text.textContent = zadania[i][j]
//             text.className  = "text";
//             // text.style.display = 'none';
//             let da = document.createElement('button');

//             let divbutton = document.createElement('div');
//             divbutton.className = "divbutton";
//             // divbutton.style.display = 'none'
//             da.textContent = "✔";
//             da.className  = "otwetda";
//             let net = document.createElement('button');
//             net.textContent = "×";
//             net.className  = "otwetnet";

//     task.addEventListener("click", function () {
//         //text.style.display = text.style.display === "none" ? "block" : "none";
//         divtext.style.display = divtext.style.display === "none" ? "block" : "none"; // Toggle visibility
//         });
        
//         divbutton.appendChild(da);
//         divbutton.appendChild(net);     
//         divtotext.appendChild(text);
//         divtext.appendChild(divtotext);  
//         // divtext.appendChild(divbutton);
//         divtext.appendChild(divbutton);   
//         div.appendChild(divtext);

//     }
    
    
//     document.getElementById("task").appendChild(div);

// }







// task.addEventListener("click", function () {
//     divtext.style.display = divtext.style.display === "none" ? "block" : "none"; // Toggle visibility
//     });
    

var lesons = [1,2,3,4]
let zadania = [[1,2,3,"Переводчикна 100+ языковЯндекс Переводчик — синхронный перевод для 102 языков, подсказки при наборе, словарь с транскрипцией, произношением и примерами употребления слов, а также многое другое.Самые популярные направления переводаРусский  АнглийскийАнглийский  РусскийРусский  НемецкийНемецкий  РусскийРусский  КазахскийКазахский  РусскийРусский  КитайскийКитайский  РусскийРусский  ФранцузскийФранцузский  РусскийРусский  ИспанскийИспанский  РусскийРусский  ТурецкийТурецкий  РусскийРусский  УзбекскийУзбекский  РусскийРусский  ИтальянскийИтальянский  РусскийРусский  УкраинскийУкраинский  Русский"],[11,22,33,44],[111,222,333,444],[1111,2222,3333,4444]];
let datetask = [["11-4-2025","11-4-2025","11-4-2025","11-4-2025"],["11-5-2025","11-5-2025","11-5-2025","11-5-2025"],["11-4-2025","11-4-2025","11-4-2025","11-4-2025"],["11-5-2025","11-5-2025","11-5-2025","11-5-2025"]];
// let dateanswer = [[true,false,true,false],[false,true,true,false],[false,false,false,false],[true,true,true,true]];
let dateanswer = [];
let coltrue = 0;
let sumcol = 0;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
let textDate = document.getElementById('date');
textDate.textContent = (day + "." + month + "." + year);

const dateInput = document.getElementById('datedate');
const NameTask = document.getElementById('NameTask');
const WriteTask = document.getElementById('WriteTask');
const AddTaskButton = document.getElementById('AddTaskButton');
const add = document.getElementById('add');

AddTaskButton.addEventListener("click", function () {
    dateInput.style.display = dateInput.style.display === "none" ? "block" : "none";
    NameTask.style.display = NameTask.style.display === "none" ? "block" : "none";
    WriteTask.style.display = WriteTask.style.display === "none" ? "block" : "none";
    AddTaskButton.textContent = AddTaskButton.textContent === "+" ? "-" : "+";
    // add.style.display = add.style.display === "none" ? "block" : "none";
});


dateInput.addEventListener('change', function () {
    console.log(dateInput.value); // теперь сработает, когда ты выбрал дату
});

function checkDate(){
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let results = [];

    for(let i = 0; i < datetask.length; i++){
        for(let j = 0; j < datetask[i].length; j++){
            let dateStr = datetask[i][j];
            let [day, month, year] = dateStr.split("-").map(Number);
            let taskDate = new Date(year, month - 1, day);

            if(taskDate < today){
                results.push(false);
            } 
            else {
                results.push(true);
            }
        }
        dateanswer.push(results)
        results = []
    }
    
    return results,dateanswer;
}

console.log(checkDate());

function createGlobalDiv() {
    let globalDiv = document.createElement('div');
    globalDiv.className = "globaldiv";
    return globalDiv;
}
function createDiv() {
    let innerDiv = document.createElement('div');
    return innerDiv;
}
function createButton(text) {
    let btn = document.createElement('button');
    btn.textContent = text;
    return btn;
}
function createText(text) {
    let txt = document.createElement('p');
    txt.textContent = text;
    // txt.style.display = 'none'
    return txt;
}

function main() {
    let globalDiv = createGlobalDiv();
    for(let i = 0; i < lesons.length;i++){         
        let Div = createDiv(); 
        globalDiv.appendChild(Div); 
        
        for(let k = 0; k < dateanswer[i].length;k++){
            sumcol ++;
            if (dateanswer[i][k] === true){
                coltrue ++;
            }
            
        }
        let btn = createButton(lesons[i]+" | " + coltrue + "/" + sumcol);
        coltrue = 0;
        sumcol = 0;
        Div.appendChild(btn);
        
        let DivText = createDiv();
        DivText.className = "DivText";

        for(let j = 0; j < zadania[i].length;j++){   
            let DivTextandButton = createDiv();
            DivTextandButton.className = "DivTextandButton";  
            DivTextandButton.style.display = 'none';

            let Divsum = createDiv();
            Divsum.className = "Divsum";

            let DivsumDateAndBtn = createDiv();
            DivsumDateAndBtn.className = "DivsumDateAndBtn";
            
            let DivTxt = createDiv();
            DivTxt.className = "DivTxt";

            let Divbtn = createDiv();
            Divbtn.className = "Divbtn";

            let Divdate = createDiv();
            Divdate.className = "Divdate";
            
            DivText.appendChild(DivTextandButton);

            let textElement = createText(zadania[i][j]);
            DivTxt.appendChild(textElement);

            let dateElement = createText(datetask[i][j]);
            
            if (dateanswer[i][j] === true){
                dateElement.style.color = "green";
            }
            else{
                dateElement.style.color = "red";
            }

            Divdate.appendChild(dateElement);

            let textButton = createButton("✔");
            Divbtn.appendChild(textButton);


            Divsum.appendChild(DivTxt);
            DivsumDateAndBtn.appendChild(Divdate);
            DivsumDateAndBtn.appendChild(Divbtn);
            Divsum.appendChild(DivsumDateAndBtn);
            DivTextandButton.appendChild(Divsum);
            Div.appendChild(DivText);
            btn.addEventListener("click", function () {
                DivTextandButton.style.display = DivTextandButton.style.display === "none" ? "block" : "none";
        });

        }
        
      }
    document.getElementById("task").appendChild(globalDiv);
}

main();
















































// num = 0
// function OnclickButon(el){
//     num += 1
//     el.innerHTML = num
//     el.style.cssText = "border-radius:5px;color: red;background-color: brown;"
// }
// function Oninput(el){
//     console.log(el.value)
// }



// var text = document.getElementById("text");
// text.title = "New Text";
// console.log(text.title)

// text.style.color = "white"
// text.style.backgroundColor = "black"

// text.innerHTML = "New<br>string"

// var spans = document.getElementsByTagName('span');
// for (var i = 0; i < spans.length; i++){
//     console.log(spans[i].innerHTML);
// }

// var text = document.createElement('button')
// text.textContent = "text1"
// document.getElementById("all").appendChild(text); // Добавляем в контейнер

// var spisok = [100, 299, 3757, 47.8, 5.87, 665];
// var teksty = ["100", "299", "3757", "47.8", "5.87", "665"];

// for (var i = 0; i < spisok.length; i++) {
//     var button = document.createElement('button');
//     button.textContent = spisok[i]; // Выводим значение из массива
//     button.id = "button" + (i + 1);
//     document.getElementById("all").appendChild(button);
// }

// for (var i = 0;i<teksty.length;i++){
//     var text = document.createElement('p');
//     text.textContent = teksty[i];
//     document.getElementById("button" + (i + 1)).appendChild(text);
// }