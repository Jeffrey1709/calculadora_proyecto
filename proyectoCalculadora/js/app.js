window.onload=function(){
  var tecla=document.getElementsByClassName("tecla")
  var display=document.getElementById("display");

     var calculador={
        numeroA:0,
        numeroB:0,
        operacion:"",
        presion_teclas:function(tecla_presion){
          tecla_presion.addEventListener("mousedown",function(evt){
            var num_pixeles=evt.height
            num_pixeles.replace("px","")
            parseInt(num_pixeles)
            alert(num_pixeles)
            evt.height=5+num_pixeles+"px"
          })
        },
        addscreen:function(num,numero){
           numero.addEventListener("click", function() {
             if(display.textContent==="0"){
               display.textContent=num
             }else{
               if(display.textContent.length <= 7){
                  display.textContent+=num
                 }
                else{
                alert("no cumple codicion")
                  return 0
                }
               }
          })
         /* numero.addEventListener("mousedown",function(){
              numero.style.width=73+"px"
              numero.style.heignt=58+"px"
          })
          numero.addEventListener("mouseup", function() {
            numero.style.width = 78 + "px"
            numero.style.heignt = 63 + "px"
          })*/
        },
        operando:function(sig,signo){
          signo.addEventListener("click",function(){
            numeroA = display.textContent
            display.innerHTML=""
            switch(sig){
              case "s":
                operacion="s"
                break
              case "r":
                operacion="r"
                break
              case "d":
                operacion="d"
                break
              case "m":
                operacion="m"
                break
            }
          })

        },
        operation:function(igual){
          igual.addEventListener("click",function(){
              numeroB=display.textContent
              switch(operacion){
                case "s":
                  display.textContent=Number(numeroA) +Number(numeroB)
                     break
                case "r":
                  display.textContent=Number(numeroA) -Number(numeroB)
                     break
                case "m":
                  display.textContent=Number(numeroA) *Number(numeroB)
                    break
                case "d":
                  display.textContent=Number(numeroA) /Number(numeroB)
                    break
              }
          })
        },
        add_punto:function(tecla){
          tecla.addEventListener("click", function(){
                if (display.textContent. indexOf(".")=== -1) {
                  display.textContent+="."
                } else {
                  console.log("existe un punto en la pantalla")
                }
          })
        },
        reset:function(tecla){
          tecla.addEventListener("click",function(){
                display.textContent="0"
                numeroA=0
                numeroB=0
                operacion=""
          })
        },
        mas_menos:function(tecla){
          tecla.addEventListener("click",function(){
            if(display.textContent==="0")
            {
              return 0
            }else{
              if(display.textContent.includes("-")){
                display.textContent=display.textContent.replace("-","")
              }else{
                display.textContent="-"+display.textContent
              }
            }
          })
        }

      }
  //asignando metodos a los numeros
  var numero1=calculador
   numero1.addscreen("1",tecla[12])
   numero1.presion_teclas(tecla[12])
  var numero2=calculador
  numero2.addscreen("2",tecla[13])
  var numero3=calculador
  numero3.addscreen("3",tecla[14])
  var numero4=calculador
  numero4.addscreen("4",tecla[8])
  var numero5=calculador
  numero5.addscreen("5",tecla[9])
  var numero6=calculador
  numero6.addscreen("6",tecla[10])
  var numero7=calculador
  numero7.addscreen("7",tecla[4])
  var numero8=calculador
  numero8.addscreen("8",tecla[5])
  var numero9=calculador
  numero9.addscreen("9",tecla[6])
  var numero0 = calculador
  numero0.addscreen("0", tecla[15])
//asignando metodos a signos
  var suma=calculador
      suma.operando("s",tecla[18])
  var resta=calculador
      resta.operando("r",tecla[11])
  var multiplicacion=calculador
      multiplicacion.operando("m",tecla[7])
  var division=calculador
      division.operando("d",tecla[3])
//metodos para el igual
  var igual=calculador
      igual.operation(tecla[17])
//asignar metodos para el  punto, on/c, +/-

  var punto=calculador
  punto.add_punto(tecla[16])
  var on_c = calculador
  on_c.reset(tecla[0])
  var mas_menos=calculador
  mas_menos.mas_menos(tecla[1])
}
