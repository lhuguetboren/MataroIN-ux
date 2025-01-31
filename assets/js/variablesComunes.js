const servicios = new Map([
    ["wifi", "servicio gratuito de señal de wifi en todo el recinto del hotel."],
    ["piscina", "servicio de piscina todos los dias, desde las 10:00 hasta las 21:00 horas."],
    ["solarium", "servicio de solarium, de 10:00 hasta las 21:00 horas."],
    ["infantil", "servicio de zona infantil, con juegos y entretenimiento hasta 12 años."],
    ["juegos", "salon de juegos desde las 17:00 hasta las 01:00. Solo adultos."],
    ["gimnasio", "gimnasio equipado con diferentes maquinas de ejercicio. Mayores de 18 años."],
    ["atraccion", "actuaciones en vivo, apto para todos los publicos."],
    ["hamacas", "servicio de hamacas para uso en la playa. Desde las 12:00 hasta las 20:00 horas."],
    ["sombrillas", "servicio de sombrillas para uso en la playa. Desde las 12:00 hasta las 20:00 horas."],
    ["bar", "bar en zona piscina con horario de 12:00 a 22:00."]
  ]);
  
  const serviciosIMG = new Map([
    ["wifi", "/Imagenes/wifi.png"],
    ["piscina", "/Imagenes/piscina.png"],
    ["solarium", "/Imagenes/solarium.png"],
    ["infantil", "/Imagenes/infantil.png"],
    ["juegos", "/Imagenes/juegos.png"],
    ["gimnasio", "/Imagenes/gimnasio.png"],
    ["atraccion", "/Imagenes/atraccion.png"],
    ["hamacas", "/Imagenes/hamaca.png"],
    ["sombrillas", "/Imagenes/sombrilla.png"],
    ["bar", "/Imagenes/bar.png"]
  ]);
  
const archivos = [
    { archivo: "Newsletter.xml", nombre: "Newsletter" },
    { archivo: "Feed.xml", nombre: "Feed" },
    { archivo: "SocialMedia.xml", nombre: "SocialMedia" },
    { archivo: "clientes.xml", nombre: "Clientes" },
    { archivo: "proveedores.xml", nombre: "Proveedores" },
    { archivo: "alojamientos.xml", nombre: "Alojamientos" },
    { archivo: "transportes.xml", nombre: "Transportes" },
    { archivo: "municipios.xml", nombre: "Municipios" },
    { archivo: "idiomas.xml", nombre: "Idiomas" },
    { archivo: "biblioteca.xml", nombre: "Biblioteca" },
    { archivo: "blog.xml", nombre: "Blog" }

];

let Blog=[];
let BlogJson=[];
let Municipios=[];
let MunicipiosJson=[];
let Clientes=[];
let ClientesJson=[];
let Alojamientos=[];
let AlojamientosJson=[];
let Proveedores=[];
let ProveedoresJson=[];
let Transportes=[];
let TransportesJson=[];
let Idiomas=[];
let IdiomasJson=[];
let Biblioteca=[];
let BibliotecaJson=[];
let Videos=[];
let VideosJson=[];




//objeto parametros url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let hotelP = urlParams.get('id');
let username = urlParams.get('username');
let password = urlParams.get('password');
