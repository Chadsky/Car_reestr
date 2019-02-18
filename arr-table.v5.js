avtoM = new Object();      
              var arrCar = [];
              var index; var start; var stop; var counterPage = 1; var itemsOnPages = 5; var div;
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

                var serialObj = JSON.stringify(arr); //сериализуем его
                localStorage.setItem("listAvto", serialObj); //запишем его в хранилище по ключу
                console.log("Создание хранилища");
              }
              showCars();
                                                                                         
              function showCars () {
                start = (counterPage)*itemsOnPages-5;   //alert(start);
                stop = (counterPage+1)*itemsOnPages-6;  //alert(stop);
                
                div = document.getElementById('listTable');
                div.innerHTML = '';
                div.innerHTML +="<h1 style='margin-left:150px'>Реестр автомобилей</h1>";
                div.innerHTML +="<table border='1' width='75%'><tr><th style='width: 150px; color: red; text-align: center;'>ID</th><th style='width: 150px; color: red; text-align: center;'>Модель</th><th style='width: 150px; color: red; text-align: center;'>Номер</th><th style='width: 150px; color: red; text-align: center;'>Цвет</th><th style='width: 150px; color: red; text-align: center; border= 1;'>Действия</th></tr>";
                

                //document.write("<h1 id='tableHead' style='margin-left:150px'>Реестр автомобилей</h1>");
                //document.write("<table id='listingTable' border='1' width='75%'>");
                //document.write("<tr><td class='tableOut'>ID</td>");
                //document.write("<td class='tableOut' style='width: 150px; color: red; text-align: center;'>Модель</td>");
                //document.write("<td class='tableOut' style='width: 150px; color: red; text-align: center;'>Номер</td>");
                //document.write("<td class='tableOut' style='width: 150px; color: red; text-align: center;'>Цвет</td>");
                //document.write("<td style='width: 150px; color: red; text-align: center;'>Действия</td></tr>");
               
              arrCar = JSON.parse(localStorage.getItem('listAvto'));
              console.log("длина массива" + arrCar.length); 
              
                for (var i = start; i <= stop; i++) {
                  div.innerHTML += "<table border='1' width='75%'><tr><td style='width: 150px; text-align: center;'> "+ (i+1) +" </td><td style='width: 150px; text-align: center;'> "+ arrCar[i].model +" </td><td style='width: 150px; text-align: center;'>" + arrCar[i].number + "</td><td style='width: 150px; text-align: center;'>" + arrCar[i].color + "</td><td style='width: 150px; text-align: center;'><button onclick='delCar(this)'>Удалить</button><button onclick='editCar(this)'>Редактировать</button></td></tr>";

                  //document.write("<tr><td class='tableIn' style='width: 150px; text-align: center;'>" + (i+1) + "</td>");
                  //document.write("<td class='tableIn' style='width: 150px; text-align: center;'>" + arrCar[i].model + "</td>");
                  //document.write("<td class='tableIn' style='width: 150px; text-align: center;'>" + arrCar[i].number + "</td>");
                  //document.write("<td class='tableIn' style='width: 150px; text-align: center;'>" + arrCar[i].color + "</td>");
                  //document.write("<td class='tableIn' style='width: 150px; text-align: center;'><button onclick='delCar(this)'>Удалить</button><button onclick='editCar(this)'>Редактировать</button></td></tr>");
                }
                div.innerHTML +="</table>";
                //document.write("</table>");   
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
                      var serialObj = JSON.stringify(arrCar); //сериализуем его
                      localStorage.setItem("listAvto", serialObj); //запишем его в хранилище по ключу

                      showCars();
                    }
                  
                    function delCar (obj) {  // удалить автомобиль
                      var tr = getParentNode(obj, 'TR');
                        if(tr) {
                          alert(tr.rowIndex);
                          index = tr.rowIndex-1;
                          arrCar = JSON.parse(localStorage.getItem('listAvto'));
                          arrCar.splice(index,1);
                          var serialObj = JSON.stringify(arrCar); //сериализуем его
                          localStorage.setItem("listAvto", serialObj);
                        }
                      showCars();
                    }

                    function getParentNode(oThis, sNodeName) {  //поиск элемента по индексу
                      while(oThis.nodeName != sNodeName && oThis.nodeName != 'body' ) {
                        oThis=oThis.parentNode;
                      }
                      return oThis.nodeName!='body'?oThis:null;
                    }   

                    function editCar(obj){  //редактировать автомобиль
                      var tr = getParentNode(obj, 'TR');
                        if(tr) {
                          index = tr.rowIndex-1;
                          alert(tr.rowIndex);
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
                      }
                    
                    function saveCar(){
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
                      
                      var serialObj = JSON.stringify(arrCar); //сериализуем его
                      localStorage.setItem("listAvto", serialObj);

                      myModal1.style.display = "none";
                    }

                    function prevPage(){
                      counterPage--;//alert (counterPage);
                        if (counterPage < 1) {
                          counterPage = 1;
                      }
                      showCars ();
                    }
                    
                    function nextPage(){
                      counterPage++;
                        if ( Math.ceil(arrCar.length/itemsOnPages) > arrCar.length) {
                        counterPage = arrCar.length; //это ограничение не работает
                        } else if (Math.ceil(arrCar.length/itemsOnPages) < arrCar.length) { 
                          showCars ();
                          //alert (counterPage); 
                          }
                    }
                                                                                        
            // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}