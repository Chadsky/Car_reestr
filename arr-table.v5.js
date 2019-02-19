avtoM = new Object();      
              var arrCar = [];
              var index; var start; var stop; var counterPage = 1; var itemsOnPages = 10; var divTable;
              if (localStorage.getItem('listAvto') == null) {
                var arr = [];
                avto = new Object();
                avto.model = 'Lada';
                avto.number = 'nb128v';
                avto.color = 'red';
                        
                arr.push(avto);
                        
                avto1 = new Object();
                avto1.model = 'Honda';
                avto1.number = 'nb111v';
                avto1.color = 'green';

                arr.push(avto1);

                avto2 = new Object();
                avto2.model = 'Mazda';
                avto2.number = 'aa333a';
                avto2.color = 'yellow';

                arr.push(avto2);

                var serialObj = JSON.stringify(arr); //сериализуем
                localStorage.setItem("listAvto", serialObj); //записьв хранилище по ключу
                console.log("Создание хранилища");
              }
              showCars();
                                                                                         
function showCars () {
  arrCar = JSON.parse(localStorage.getItem('listAvto'));
  console.log("длина массива" + arrCar.length); 
    start = (counterPage-1)*itemsOnPages;   
    stop = counterPage*itemsOnPages-1;  
        if (stop > arrCar.length-1) {
          stop = arrCar.length-1;
        } 
        divTable = document.getElementById("listTable");
    divTable.innerHTML = "";
    var divTable2;
        divTable2 += "<h1 style='margin-left:150px'>Реестр автомобилей</h1>";
        divTable2 += "<table id='listTable' border='1' width='150px' style='text-align: center;'>";
        divTable2 += "<tr><th>ID</th>";
        divTable2 += "<th>Модель</th>";
        divTable2 += "<th>Номер</th>";
        divTable2 += "<th>Цвет</th>";
        divTable2 += "<th>Действия</th></tr>";
              
      for (var i = start; i <= stop; i++) {
        divTable2 += "<tr><td style='width: 150px; text-align: center;'>" + (i+1) + "</td>";
        divTable2 += "<td style='width: 150px; text-align: center;'>" + arrCar[i].model + "</td>";
        divTable2 += "<td style='width: 150px; text-align: center;'>" + arrCar[i].number + "</td>";
        divTable2 += "<td style='width: 150px; text-align: center;'>" + arrCar[i].color + "</td>";
        divTable2 += "<td style='width: 150px; text-align: center;'><button onclick='delCar(this)'>Удалить</button><button onclick='editCar(this)'>Редактировать</button></td></tr>";
        }        
        divTable2 += "</table>";
        divTable.innerHTML = divTable2; 
}
                        function addCar () {
                          var model = document.getElementById('model').value;
                          var number = document.getElementById('number').value;
                          var color = document.getElementById('color').value;
                          console.log("цвет = " + color);
                            if (model == '' || number =='' || color=='') {
                              alert("Все поля должны быть заполнены");  
                              return }                      
                          avtoN = new Object();
                          avtoN.model = model;
                          avtoN.number = number;
                          avtoN.color = color;
                          
                          arrCar = JSON.parse(localStorage.getItem('listAvto'));
                          arrCar.push(avtoN);
                          var serialObj = JSON.stringify(arrCar); //сериализуем
                          localStorage.setItem("listAvto", serialObj); //запись в хранилище по ключу
                        }
function delCar (obj) {  // удалить автомобиль
    var tr = getParentNode(obj, 'TR');
        if(tr) {
            index = (tr.rowIndex-1) + itemsOnPages*(counterPage-1);
            arrCar = JSON.parse(localStorage.getItem('listAvto'));
            arrCar.splice(index,1);
            var serialObj = JSON.stringify(arrCar); //сериализуем
            localStorage.setItem("listAvto", serialObj);
        }
    showCars();
}
                        function getParentNode(oThis, sNodeName) {  //поиск элемента по индексу
                          while(oThis.nodeName != sNodeName && oThis.nodeName != 'BODY' ) {
                            oThis=oThis.parentNode;
                          }
                          return oThis.nodeName!='BODY'?oThis:null;
                        }   

function editCar(obj){  //редактировать автомобиль
    var tr = getParentNode(obj, 'TR');
        if(tr) {
            index = (tr.rowIndex-1) + itemsOnPages*(counterPage-1);
            alert("rowIndex = " + tr.rowIndex + " index = " + index + " counterPage =  " + counterPage);
            arrCar = JSON.parse(localStorage.getItem('listAvto'));
                          
            avtoM = arrCar[index]; 
            document.getElementById('model1').value = avtoM.model;
            document.getElementById('number1').value = avtoM.number;
            document.getElementById('color1').value = avtoM.color;

                myModal1.style.display = "block";
                var btn1 = document.getElementById("myBtn1");
                modal.style.display = "none";
        }                        
            var span = document.getElementsByClassName("close1")[0];
                span.onclick = function() {
                myModal1.style.display = "none";
                }
    showCars ();
}
                    
                    function saveCar(){  //сохраняем отредактированый автомобиль
                      var model = document.getElementById('model1').value;
                      var number = document.getElementById('number1').value;
                      var color = document.getElementById('color1').value;
                      console.log("цвет = " + color);
                        if (model == '' || number =='' || color=='') {
                          alert("Все поля должны быть заполнены");  
                          return }                      
                      avtoM.model = model;
                      avtoM.number = number;
                      avtoM.color = color;
                      
                      arrCar[index] = avtoM;
                      
                      var serialObj = JSON.stringify(arrCar); //сериализуем
                      localStorage.setItem("listAvto", serialObj);
                      showCars ();
                      myModal1.style.display = "none";
                    }

function prevPage(){ //pagination previos
    counterPage--;
        if (counterPage < 1) {
            counterPage = 1;
        }
    showCars ();
}
                    
function nextPage(){  // pagination next
    counterPage++;
        if (counterPage > Math.ceil(arrCar.length/itemsOnPages))  {
            counterPage = Math.ceil(arrCar.length/itemsOnPages);
        }
    showCars ();
}

    // Get the modal
var modal = document.getElementById('myModal'); 
var btn = document.getElementById("myBtn");// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
btn.onclick = function() {// When the user clicks the button, open the modal 
  modal.style.display = "block";
}
span.onclick = function() {// When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}
window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}