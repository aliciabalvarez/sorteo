var nodoBtn = document.querySelector("#boton-guardar");
var nodoBtnSortear = document.querySelector("#boton-sortear");
listaNombres = []

nodoBtn.addEventListener("click",function(){
    addCardElementDOM_append();
});

function addCardElementDOM_append(){

    let nodoDivCaja = document.createElement("div");
    nodoDivCaja.classList.add("caja");
    let nodoh3 = document.createElement("h3");
    nodoh3.classList.add("noconseguido");

    let entradaNombre = nombre.value;
    console.log(entradaNombre)
    nodoh3.innerHTML = entradaNombre;


    let nodoA = document.createElement("a");
    nodoA.innerHTML = "Ver perfil completo"
    
    nodoDivCaja.append(nodoh3);

    let nodoTotalCajas = document.querySelector(".total-cajas");
    nodoTotalCajas.append(nodoDivCaja);

    var numeroAleatorio = Math.random();
    aleatorio = numeroAleatorio*10
 

    let datos = nombre.value;
    listaNombres.push(datos)
    console.log(listaNombres)
    
};

nodoBtnSortear.addEventListener("click", function(){

    nodoBtnSortear.disabled = true;

    sumaContador = 0;
    finContador = 20;
   
    let time = setInterval(function(){
    
        sumaContador++;
        console.log(sumaContador)
        funcionSortear();

        if(sumaContador >= finContador){
            clearInterval(time)
            sumaContador = 0;
            nodoBtnSortear.disabled = false;
        }

}, 200)


});


function funcionSortear(){

    var desaparecer = document.querySelectorAll(".caja")
    
    for(let i=0; i<desaparecer.length; i++){
        desaparecer[i].classList.remove("conseguido");
    }
        var numeroAleatorioReal = Math.random();
        var aleatorioReal = numeroAleatorioReal * (listaNombres.length-1);

        console.log(listaNombres[aleatorioReal.toFixed(0)] + " conseguido")

        let candidatosHtml = document.querySelectorAll(".caja");
        candidatosHtml[aleatorioReal.toFixed(0)].classList.add("conseguido")
};
