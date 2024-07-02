function cambiarIdioma() {
    var idiomaSeleccionado = document.getElementById("idioma").value;
    var boton = document.getElementById("boton");
    var boton1=document.getElementById("boton1");
    
    if (idiomaSeleccionado === "cat") {
        document.getElementById("ini").innerText = "Inicià Sessió";
    }if (idiomaSeleccionado === "es") {
            document.getElementById("ini").innerText = "Iniciar Sesión";        
    } if (idiomaSeleccionado === "en") {
        document.getElementById("ini").innerText = "Log in";
    }if(idiomaSeleccionado === "man"){
        document.getElementById("ini").innerText = "登入";  
    }if (idiomaSeleccionado === "ger") {
        document.getElementById("ini").innerText = "Anmeldung";
    } if (idiomaSeleccionado === "it") {
            document.getElementById("ini").innerText = "Login";
    } if (idiomaSeleccionado === "fr") {
        document.getElementById("ini").innerText = "Commencer la session";
    } if (idiomaSeleccionado === "rus") {
        document.getElementById("ini").innerText = "Aвторизоваться";
    } if (idiomaSeleccionado === "por") {
        document.getElementById("ini").innerText = "Iniciar sessão";
    }else if (idiomaSeleccionado === "arab") {
    document.getElementById("ini").innerText = "تسجيل الدخول";   
}   
    if (idiomaSeleccionado === "cat") {
        boton.value = "Clients";
        boton1.value="Proveidors"
    }if (idiomaSeleccionado === "es") {
            boton.value = "Clientes";
            boton1.value="Proveedors";
        }if (idiomaSeleccionado === "man") {
            boton.value = "顧客";
            boton1.value="供應商" 
        }if (idiomaSeleccionado === "arab") {
            boton.value = "عملاء";
            boton1.value="الموردين"; 
        }if (idiomaSeleccionado === "ger") {
            boton.value = "Kunden";
            boton1.value="Lieferanten" 
        }if (idiomaSeleccionado === "it") {
            boton.value = "Clienti";
            boton1.value="Fornitori" ;
        }if (idiomaSeleccionado === "fr") {
            boton.value = "Clients";
            boton1.value="Fournisseurs" ; 
        }if (idiomaSeleccionado === "rus") {
            boton.value = "клиенты";
            boton1.value="поставщики";  
        }if (idiomaSeleccionado === "por") {
            boton.value = "Clientes";
            boton1.value="Fornecedores" ; 
    } else if (idiomaSeleccionado === "en") {
        boton.value = "Customers";
        boton1.value="Suppliers";
   
    }
if(idiomaSeleccionado=== "cat"){
    document.getElementById("inic").innerText="Inicià Sessió Clients";
        document.getElementById("usuario").innerText="Usuari:";
        document.getElementById("contraseña").innerText="Contrasenya:";
}
}


