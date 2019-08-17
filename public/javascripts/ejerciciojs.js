//var numeros = [6, 5, 3, 1, 8, 7, 2, 4];

//for( var i =0; i < numeros,)

//+sacar promedios+
//function promedio(num1, num2, num3, num4, num5){
//var sumar = num1+num2+num3+num4+num5;
//var result = sumar/5;
//alert(result);
//}

//promedio(7, 5, 8, 9, 10);


// ejecicio fizzbuzz
//--  for(var i=1; i<=100; i++){
    //if(i%5==0 && i%3==0){
      // console.log('FizzBuzz');
    //}
    //else if(i%5==0){
      //  console.log('buzz');
    //}
    //else if(i%3==0){
      //  console.log('Fizz');
    //}
    //else{
      //  console.log(i);
    //}       
//}

//var edadIan = 28;
//var edadBeto = 23;


  //  if(edadIan<edadBeto){
    //  var dif = edadBeto-edadIan;
    //console.log('Beto es mayor por ' + dif );
    //}
    //else{
      //  var dif = edadIan-edadBeto;
        //console.log('Ian es Mayor por ' + dif);
    //}

var factura = {
    emisor: {
        nombre:'casa campesino',
        direccion: 'colonia centro',
        telefono: '7711234565',
        rs: 'moral'
    },
    receptor:{
        nombre:'carlos',
        direccion:'colonia ramos',
        telefono:'7712097654',
        rs:'fisica'
    },
    concepto:[
        {descripcion:'pala', cantidad:2, precio:200},
        {descripcion:'lampara', cantidad:1, precio:90},
        {descripcion:'tornillos', cantidad:20, precio:1},
        {descripcion:'caguamas', cantidad:24, precio:190},
    ],
    datos:{
        iva:16,
        pago:'efectivo'
    },
};
let total = 0;
for (let index = 0; index < factura.concepto.length; index++) {
    console.log(factura.concepto[index].descripcion);
    var cantidad = factura.concepto[index].cantidad;
    var precio = factura.concepto[index].precio;
    
    var result = cantidad * precio;
    total += result;
}

var iva = factura.datos.iva;
var totalMasIva = total+(total*.16)
console.log(totalMasIva);






