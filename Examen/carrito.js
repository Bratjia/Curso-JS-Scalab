"use strict"

const bd=[
    {
        id: 1,
        marca: 'Samsumg',
        tamaño: 60,
        resolucion: 'QHD',
        valor: 600000,
        stock: 3,
        imagen: './Capture001.png'
    },
    {
        id: 2,
        marca: 'LG',
        tamaño: 55,
        resolucion: 'QHD',
        valor: 550000,
        stock: 2,
        imagen: './Capture001.png'        
    },
    {
        id: 3,
        marca: 'Samsumg',
        tamaño: 32,
        resolucion: 'HD',
        valor: 230000,
        stock: 5,
        imagen: './Capture001.png'        
    },
    {
        id: 4,
        marca: 'Dell',
        tamaño: 55,
        resolucion: 'FHD',
        valor: 480000,
        stock: 2,
        imagen: './Capture001.png'        
    },
    {
        id: 5,
        marca: 'LG',
        tamaño: 32,
        resolucion: 'HD',
        valor: 300000,
        stock: 3,
        imagen: './Capture001.png'        
    },   
    {
        id: 6,
        marca: 'Dell',
        tamaño: 60,
        resolucion: 'FHD',
        valor: 760000,
        stock: 6,
        imagen: './Capture001.png'        
    }         
];

//https://programmerclick.com/article/69651527957/
// seleccionar todo
function selectAll(){
    var obj = document.getElementsByClassName("selectOne");
    var btSelectAll = document.getElementById("allCheck").checked;
    for(inputCheck of obj){
        inputCheck.checked = btSelectAll;
    }
}
// eliminación única
function deleteChild(obj){
    var nowtr = obj.parentElement.parentElement;
    var nowtable = nowtr.parentElement;
    nowtable.removeChild(nowtr);
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
}
// eliminación por lotes
function selectDelete(){
    var obj = document.getElementsByClassName("selectOne");
    for (var i = obj.length - 1;i >= 0;i--){
        var nowCheck = obj[i];
        if (nowCheck.checked == true){
            deleteChild(nowCheck);
        }
    }
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
}

// reducir en cantidad
function reduce(obj){
    var textElement = obj.parentElement.children[1];
    if (textElement.value == "1"){
        return;
    }
    textElement.value = eval(textElement.value + "-1");
    // Subtotal
    var singelSumElement = obj.parentElement.parentElement.children[5];
    singleSubTotal(singelSumElement);
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
}
// Incrementa el número de
function plus(obj){
    var textElement = obj.parentElement.children[1];
    textElement.value = eval(textElement.value + "+1");
    // Subtotal
    var singelSumElement = obj.parentElement.parentElement.children[5];
    singleSubTotal(singelSumElement);
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
}
// Inicializar todos los subtotales de productos
function singleAllSubTotal(){
    var obj = document.getElementsByClassName("shopCount");
    for(shopCount of obj){
        singleSubTotal(shopCount);
    }
}
// Calcula el subtotal de un solo producto
function singleSubTotal(obj){
    var price = obj.parentElement.children[3].innerHTML;
    var count = obj.parentElement.children[4].children[1].value;
    obj.innerHTML = eval(price + "*" + count);
}
// El precio total de todos los bienes
function allShopPriceTotal(){
    var obj = document.getElementById("resultTotalMoney");
    var allSingelSubElement = document.getElementsByClassName("shopCount");
    var sum = "0";
    for (singelSubElement of allSingelSubElement){
        if (sum != ""){
            sum += "+";
        }
        sum += singelSubElement.innerHTML;
    }
    obj.innerHTML = eval(sum);
}
// La suma de los puntos disponibles
function allIntegralTotal(){
    // puntos totales
    var obj = document.getElementById("integralTotal");
    // integral simple
    var allSingelIntegralElement = document.getElementsByClassName("integral");
    // conjunto de cálculo
    var sum = "0";
    for (singelIntegralElement of allSingelIntegralElement){
        // Cantidad
        var count = singelIntegralElement.parentElement.children[4].children[1].value;
        if (sum != ""){
            sum += "+";
        }
        sum += singelIntegralElement.innerHTML + "*" + count;
    }
    obj.innerHTML = eval(sum);
}
// Compra ahora
function buyNow(){
    var result = confirm("¡Ya sea para comprar todo!");
    if (result == false){
        return
    }
    var obj = document.getElementById("mytable");
    obj.innerHTML = "";
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
    alert("¡Compra exitosa!");
}

// Añadir al carrito
function addToCart(obj){
    var result = confirm(¿Añadir este producto al carrito de la compra? ');
    if (result == false){
        return;
    }
    // Formulario de carrito de compras
    var cartBox = document.getElementById("mytable");
    // Objeto de mercancía
    var shop = {
        shopImg:obj.children[0].src,
        shopIntegral:parseInt(eval(obj.children[2].innerHTML + "/20")),
        shopPrice:obj.children[2].innerHTML
    }
    // Determine si el producto existe
    var img = document.getElementsByClassName("imgbackground");
    var result = "-1";
    for (var i = 0;i < img.length;i++){
        if (shop.shopImg == img[i].children[0].src){
            result = i;
        }
    }
    if (result != "-1"){
        var count = img[result].parentElement.children[4].children[1];
        count.value = eval(count.value + "+1");
        // Recalcular el subtotal
        singleAllSubTotal();
    }else{
        // Crea un objeto de carrito de compras
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = '<input type="checkbox"  class="selectOne" />';
        var td2 = document.createElement("td");
        td2.className = "imgbackground";
        td2.innerHTML = '<img src="'+ shop.shopImg +'" height="100" width="100"/>';
        var td3 = document.createElement("td");
        td3.className = "integral";
        td3.innerHTML = shop.shopIntegral;
        var td4 = document.createElement("td");
        td4.innerHTML = shop.shopPrice;
        var td5 = document.createElement("td");
        td5.innerHTML = '<button οnclick="reduce(this)">-</button>&nbsp;'
                    + '<input type="text" size="1" readonly="true" value="1"/>'
                    + '&nbsp;<button οnclick="plus(this)">+</button>';
        var td6 = document.createElement("td");
        td6.className = "shopCount";
        td6.innerHTML = parseInt(shop.shopPrice);
        var td7 = document.createElement("td");
        td7.innerHTML = '<a href="#" class="delete" οnclick="deleteChild(this)"> Eliminar </a>';
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        // Añadir al carrito
        cartBox.appendChild(tr);
    }
    
    // Precio total
    allShopPriceTotal();
    // puntos totales
    allIntegralTotal();
    // cambiar de color
    changeBackground();
}
// El movimiento del mouse cambia el color de fondo
function changeBackground(){
    var imgtd = document.getElementsByClassName("imgbackground");
    for (singeltd of imgtd){
        singeltd.onmousemove = function(){
            this.style.backgroundColor = "orange";
        }
        singeltd.onmouseleave = function(){
            this.style.backgroundColor = "white";
        }
    }
}
    // Inicializar el contenido de la interfaz
    window.onload = function(){
        changeBackground();
        singleAllSubTotal();
        allShopPriceTotal();
        allIntegralTotal();
    }

