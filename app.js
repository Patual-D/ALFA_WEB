// TORRETAS
let torretas_m = [
    "Beam-M",
    "Blaster-M",
    "Cannon-M",
    "Coligun-M",
    "Ion-M",
    "Railgun-M"
];
let torretas_s = [
    "Beam",
    "Blaster",
    "Cannon",
    "Coligun",
    "Ion",
    "Railgun",
    "Flak",
    "Shrapnel"
];
let torretas_p= [
    "Tractor",
    "Repeater",
    "Pulse",
    "Chaingun",

    "Burst"
];

// RIGS
let modulos_wep = [
    "AP Rounds",
    "CoreSec Targeter",
    "Drone Targeter",
    "Enhanced Servos",
    "Foralkan Targeter",
    "HE Rounds",
    "Heat Sink",
    "Heavy Bolt",
    "Ion Rounds",
    "Kavani Targeter",
    "Lycentian Targeter",
    "Nullifier Rounds",
    "Rapid Bolt",
    "Swift Bolt"
];
let modulos_def = [
    "Composite Armor",
    "Enhanced Deflectors",
    "Hardlight Shields",
    "Patcher Nanobots",
    "Reflective Panels",
    "Reflective Plating",
    "Reinforced Hull",
    "Sensor Booster",
    "Shield Amplifier",
    "Skeletonized Chassis",
    "Ultralight Chassis"
];
let modulos_eng = [
    "Engine Gimbals",
    "Exhaust Restrictor",
    "Fuel Injector",
    "Lightweight Engines",
    "Warp Charger",
    "Warp Field Amplifier"
];
let modulos_rct = [
    "Battery",
    "Parallel Circuits"
];


let contenido_padre_activo = [];
let contenido_activo = [];
let contenido_activo_anterior = [];

function mostrarContenido(id_boton, contenido, contenidoPadre){
    if(contenidoPadre!==0){

        if(contenido_activo.length>0){
            for(elemento of contenido_activo){
                var contenidoExtra = document.getElementById(elemento);
                ocultarContenido(contenidoExtra, 0);
            }
            

            setTimeout(() => {
                contenidoPadre.style.height = "auto";

                contenidoPadre = document.getElementById(contenidoPadre.id);
              }, 1);

            
        }
        
        contenidoPadre.style.maxHeight = (10 + contenidoPadre.scrollHeight + contenido.scrollHeight) + "px";
        contenidoPadre.style.height = (10 + contenidoPadre.scrollHeight + contenido.scrollHeight) + "px";
        contenido_activo[contenido_activo.length] = contenido.id;
    }else{
        if(contenido_padre_activo.length>0){
            for(elemento of contenido_padre_activo){
                var contenidoExtra = document.getElementById(elemento);
                ocultarContenido(contenidoExtra, 0);
            }
            

            setTimeout(() => {
                contenidoPadre.style.height = "auto";

                contenidoPadre = document.getElementById(contenidoPadre.id);
              }, 1);

            
        }

        contenido_padre_activo[contenido_padre_activo.length] = contenido.id;
    }

    contenido.style.maxHeight = contenido.scrollHeight + "px"; // Expande el contenido
    contenido.style.opacity = "1"; // Hace visible el contenido
    
    // setTimeout(() => {
    //     window.location.href="#" + id_boton;
    //   }, 200);

    contenido.addEventListener('transitionend', function handler(e) {
        if (e.propertyName === 'max-height') {
            // Scroll hacia el botón una vez que el contenido se haya desplegado
            const boton = document.getElementById(id_boton);
            boton.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Quitamos el listener para evitar que se ejecute múltiples veces
            contenido.removeEventListener('transitionend', handler);
        }
    });
    

}

function ocultarContenido(contenido, contenidoPadre){
    contenido.style.maxHeight = "0px"; // Colapsa el contenido
    contenido.style.opacity = "0"; // Oculta el contenido
    
    if (contenidoPadre!==0){
        contenidoPadre.style.height = "auto";

        contenido_activo.splice(contenido_activo.indexOf(contenido.id), 1)
    }
    
    contenido_activo_anterior[0] = contenido.id;
}

function controlarContenido(id_boton, id_contenidoPadre, id_contenido){
    document.getElementById(id_boton).addEventListener("click", function() {
        if (id_contenidoPadre !== 0){
            var contenidoPadre = document.getElementById(id_contenidoPadre);
        } else{
            var contenidoPadre = 0
        }

        var contenido = document.getElementById(id_contenido);
        
        if (contenido.style.maxHeight === "0px" || contenido.style.maxHeight === "") {
            
            mostrarContenido(id_boton, contenido, contenidoPadre)
    
        } else {
            ocultarContenido(contenido, contenidoPadre)
    
        }
    });
    
}

function abrirModal(id_elemento) {
    document.getElementById(id_elemento).style.display = "block";
}
    
function cerrarModal(id_elemento) {
    document.getElementById(id_elemento).style.display = "none";
}

//Guía pvp

controlarContenido("bnr_pvp", 0, "guia_pvp")


controlarContenido("btn_faction-warfare", "guia_pvp", "contenido_pvp_faction-warfare")


controlarContenido("btn_fleet-war", "guia_pvp", "contenido_pvp_fleet-war")


controlarContenido("btn_pirateo-gank", "guia_pvp", "contenido_pvp_pirateo-gank")

controlarContenido("btn_pvp-basico", "guia_pvp", "contenido_pvp_basico")


//Guía industrial

controlarContenido("bnr_industrial", 0, "guia_industrial")


controlarContenido("btn_anomalias-mineras", "guia_industrial", "contenido_industrial_anomalias-mineras")

controlarContenido("btn_depositos-estadisticas", "guia_industrial", "contenido_industrial_depositos-estadisticas")

controlarContenido("btn_farmeo-gran-escala", "guia_industrial", "contenido_industrial_farmeo-gran-escala")


controlarContenido("btn_mineria-wilds", "guia_industrial", "contenido_industrial_mineria-wilds")


// Kits Recomendados

controlarContenido("bnr_kits", 0, "guia_kits")


controlarContenido("btn_kits-industria", "guia_kits", "contenido_kits_industria")

controlarContenido("btn_kits-pve", "guia_kits", "contenido_kits_pve")

controlarContenido("btn_kits-pvp", "guia_kits", "contenido_kits_pvp")

controlarContenido("btn_kits-pirateria", "guia_kits", "contenido_kits_pirateria")


controlarContenido("kit_btn_salida", "guia_kits", contenido_activo_anterior) //Botón de regresar


const kitsContenido = {
//  PLANTILLA DE KIT
        // titulo: "",
        // torretas: [
            
        // ],
        // rigs: [

        // ],
        // subsystems: [

        // ],
        // descripcion: "",
        // imagen: "img/kits/"




    // KITS PVP
    "btn_blaster-conciliator": {
        titulo: "Blaster Conciliator",
        torretas: [
            "Blaster-M",
            "Blaster",
            "Repeater"
        ],
        rigs: [
            "Heavy Bolt",
            "Reinforced Hull",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Heavy Shield Repairer",
            "Overclocker",
            "Lightburner-M"
        ],
        descripcion: "El Conciliator Blasters es una nave ideal para los combates 1v1 de desroyers gracias a su buen daño por segundo y por su rapidez al warpear, esta nave también podría usarse también en combates de flotas pequeñas.",
        imagen: "img/kits/pvp/Blaster_Conciliator.png"
    },
    "btn_railgun-judicator": {
        titulo: "Railgun Judicator",
        torretas: [
            "Railgun",
            "Pulse"
        ],
        rigs: [
            "Ultralight Chassis",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Heavy Shield Repairer",
            "Lightburner-M"
        ],
        descripcion: "La Railgun Judicator es ideal para el combate pvp a larga distancia contra cualquier tipo de nave, ya sea esta un destroyer, fragata o corveta.",
        imagen: "img/kits/pvp/Railgun_Judicator.png"
    },
    "btn_stealth-knifejaw": {
        titulo: "Stealth Knifejaw",
        torretas: [
            "Railgun",
            "Pulse"
        ],
        rigs: [
            "Heavy Bolt",
            "Heavy Bolt",
            "Reflective Panels",
            "Reflective Panels",
            "Warp Field Amplifier"
        ],
        subsystems: [
            "Lightburner-M"
        ],
        descripcion: "La Stealth Knifejaw sirve como un sniper invisible ante los radares enemigos, es ideal para combates a larga distancia teniendo un rango efectivo de invisibilidad siempre y cuando te mantengas a más de 4km de distancia",
        imagen: "img/kits/pvp/Stealth_Knifejaw.png"
    },
    "btn_railgun-edict": {
        titulo: "Railgun Edict",
        torretas: [
            "Railgun",
            "Pulse"
        ],
        rigs: [
            "Heavy Bolt",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Lightburner-M",
            "Medium Shield Repairer"
        ],
        descripcion: "La Railgun Edict es una de las mejores y más populares naves para pvp gracias a su gran movilidad y a su gran alcance, es ideal para cualquier tipo de combate (contra destroyers, fragatas, corvetas, figthers, etc) siguiendo las tecnicas adecuadas y por su tipo de torretas kineticas la hace aún más efectiva contra objetivos con mucho hull.",
        imagen: "img/kits/pvp/Railgun_Edict.png"
    },
    "btn_beam-edict": {
        titulo: "Beam Edict",
        torretas: [
            "Beam",
            "Pulse"
        ],
        rigs: [
            "Heavy Bolt",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Lightburner-M",
            "Medium Shield Repairer"
        ],
        descripcion: "La Beam Edict es una de las mejores y más populares naves para pvp gracias a su gran movilidad y a su gran alcance, es ideal para cualquier tipo de combate (contra destroyers, fragatas, corvetas, figthers, etc) siguiendo las tecnicas adecuadas.",
        imagen: "img/kits/pvp/Beam_Edict.png"
    },
    "btn_hybrid-polaris": {
        titulo: "Hybrid Polaris",
        torretas: [
            "Burst"
        ],
        rigs: [
            "Swift Bolt",
            "Ultralight Chassis",
            "Patcher Nanobots",
            "Engine Gimbals",
            "Parallel Circuits"
        ],
        subsystems: [
            "Light Shield Repairer ",
            " Stasis Field"
        ],
        descripcion: "La Hybrid Polaris es actualmente el mejor interceptor del juego, aunque hoy en día no se usan mucho los interceptors sigue siendo una opcion útil si aprendes a utilizarlo correctamente, es poco efectiva contra warships pero es la mejor contra otros interceptors y fighters.",
        imagen: "img/kits/pvp/Hybrid_Polaris.png"
    },
    "btn_railgun-loxodon": {
        titulo: "Railgun Loxodon",
        torretas: [
            "Railgun-M",
            "Railgun",
            "Pulse"
        ],
        rigs: [
            "Heavy Bolt",
            "Heavy Bolt",
            "Hardlight Shields",
            "Warp Field Amplifier",
            "Parallel Circuits"
        ],
        subsystems: [
            "Heavy Shield Repairer",
            "Lightburner-L"
        ],
        descripcion: "La Railgun Loxodon es una nave indispensable a la hora de hacer pvp ya sea en flotas pequeñas o en flotas grandes gracias a su gran daño al hull, este destroyer es capaz de one-shotear a otras naves que no tengan un escudo activo.",
        imagen: "img/kits/pvp/Railgun_Loxodon.png",
        uso: [
            "Uso en flotas pequeñas/medianas:",
            "Debes mantenerte siempre alejado de los objetivos ya que este tipo de nave suele ser bastante frágil, puedes dispararle a los objetivos aunque aún tengan escudo, pero deberás darle prioridad a los objetivos hulleados.",
            "Uso en flotas grandes:",
            "Deberás mantenerte siempre detrás de la flota principal ya que serás el encargado de destruir las naves en cuanto esten en hull, no gastes tus railguns en objetivos con escudos guardalos hasta que uno de los objetivos esté en hull y evita estar al alcance de los enemigos si no es necesario que ataques.",
            "NOTA: Normalmente esta nave será de alta prioridad para el enemigo así que permanece atento a todo momento y no dejes que te focusen."
        ]
    },
    "btn_chasing-horizon": {
        titulo: "Chasing Horizon",
        torretas: [
            "Railgun-M",
            "Railgun",
            "Pulse"
        ],
        rigs: [
            "Ultralight Chassis",
            "Warp Field Amplifier",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Heavy Shield Repairer",
            "Lightburner-L"
        ],
        descripcion: "El Chasing Horizon es uno de los mejores destroyers para perseguir naves enemigas gracias a su gran velocidad tanto de movimiento como de warpeo pudiendo alcanzar objetivos que escapan warpeando hacia otro lugar y pudiendo snipearlos apenas lleguen.",
        imagen: "img/kits/pvp/Chasing_Horizon.png"
    },
    "btn_railgun-fortitude": {
        titulo: "Railgun Fortitude",
        torretas: [
           "Railgun-M",
            "Railgun",
            "Pulse" 
        ],
        rigs: [
            "Heavy Bolt",
            "Heavy Bolt",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Heavy Shield Repairer",
            "Lightburner-L"
        ],
        descripcion: "La Railgun Fortitude es uno de los mejores destroyers para atacar sin ser atacado siendo este capaz de kitear (evadir a un rival sin que este pueda alcanzarte) a otros destroyers con las técnicas apropiadas.",
        imagen: "img/kits/pvp/Railgun_Fortitude.png"
    },
    "btn_stasis-beamedict": {
        titulo: "Stasis Beamedict",
        torretas: [
            "Beam",
            "Pulse" 
        ],
        rigs: [
            "Heavy Bolt",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Stasis Field",
            "Lightburner-M"
        ],
        descripcion: "La Stasis Beamedict es de las corvetas más populares para hacer pvp gracias a que cuenta con un stasis field esta puede alentar a otras naves mientras sigue atacando con sus torretas, es especialmente efectiva en combates de flotas pequeñas pero también podría llegar a ser útil en combates de 1v1.",
        imagen: "img/kits/pvp/Stasis_Beamedict.png"
    },


    // KITS PIRATERIA
    "btn_disruptor-edict": {
        titulo: "Disruptor Edict",
        torretas: [
            "Beam",
            "Pulse"
        ],
        rigs: [
            "Heavy Bolt",
            "Warp Field Amplifier",
            "Parallel Circuits",
            "Parallel Circuits"
        ],
        subsystems: [
            "Lightburner-M",
            "Disruptor"
        ],
        descripcion: "La Disruptor Edict es de las mejores naves a la hora de piratear gracias a ser una de las naves más versatiles del juego, esta variante en especifico (beams) es más efectiva para piratería en soltiario ya que el no tener un tipo de torreta con daño especifico (ya sea a hull o a escudo) la hace ideal para piratear a un objetivo desde cero",
        imagen: "img/kits/pirateria/Disruptor_Edict.png"
    }
};

function actualizarContenido(id) {
    const data = kitsContenido[id];
    if (!data) return;


    // INFORMACION GENERAL DEL KIT   
    // Actualizar textos
    document.getElementById("contenido_titulo_kit").textContent = data.titulo;
    document.getElementById("contenido_kit_descripcion").textContent = data.descripcion;
    document.getElementById("contenido_kit_img").src = data.imagen;

    // Limpiar y llenar listas
    const lista_torretas = document.getElementById("contenido_kit_torretas");
    lista_torretas.innerHTML = ""; // vacía la lista anterior

    const lista_rigs = document.getElementById("contenido_kit_rigs");
    lista_rigs.innerHTML = ""; // vacía la lista anterior

    const lista_subsystems = document.getElementById("contenido_kit_subsystems");
    lista_subsystems.innerHTML = ""; // vacía la lista anterior


    data.torretas.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;

        if (torretas_m.includes(texto)){
            li.classList.add("li_trrt_m"); 
        } else if (torretas_s.includes(texto)) {
            li.classList.add("li_trrt_s");
        } else if (torretas_p.includes(texto)) {
            li.classList.add("li_trrt_p");
        }

        lista_torretas.appendChild(li);
    });

    data.rigs.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;

        if (modulos_wep.includes(texto)){
            li.classList.add("li_wep"); 
        } else if (modulos_def.includes(texto)) {
            li.classList.add("li_def");
        } else if (modulos_eng.includes(texto)) {
            li.classList.add("li_eng");
        } else if (modulos_rct.includes(texto)) {
            li.classList.add("li_rct");
        }

        lista_rigs.appendChild(li);
    });

    data.subsystems.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        li.classList.add("li_subsys");
        lista_subsystems.appendChild(li);
    });

    // VENTANA DE USO
    document.getElementById("contenido_titulo_modal_kit").textContent = data.titulo;
    
    const contenidoComoUsar = document.getElementById("contenido_como_usar");
    contenidoComoUsar.innerHTML = ""; // vacía la lista anterior
    
    if (data.uso == null){
        const p = document.createElement("p");
        p.textContent = "Aún no hay información de uso para este kit.";
        contenidoComoUsar.appendChild(p);

        kit_btn_uso.style.display = "none";
        kit_btn_salida.style.width = "100%";

    } else{
        kit_btn_uso.style.display = "inline-block";
        kit_btn_salida.style.width = "49%";
    }

    data.uso.forEach(texto => {
        const p = document.createElement("p");
        p.textContent = texto;
        contenidoComoUsar.appendChild(p);
    })
}


// Asignar eventos a kits
Object.keys(kitsContenido).forEach(id => {
    document.getElementById(id).addEventListener("click", () => actualizarContenido(id));
    controlarContenido(id, "guia_kits", "kit_dinamico");

});



// MODAL KITS
window.onclick = function(event) { // Cerrar al hacer clic fuera del modal
    const modal = document.getElementById("kit_modal_dinamico");
    if (event.target === modal) {
        cerrarModal("kit_modal_dinamico");
    }
}

document.getElementById("kit_btn_uso").addEventListener("click", function() {
    abrirModal("kit_modal_dinamico");
});

document.getElementById("btn_cerrar_modal_dinamico").addEventListener("click", function() {
    cerrarModal("kit_modal_dinamico");
});

// MODAL CRÉDITOS
window.onclick = function(event) { // Cerrar al hacer clic fuera del modal
    const modal = document.getElementById("creditos_modal_dinamico");
    if (event.target === modal) {
        cerrarModal("creditos_modal_dinamico");
    }
}

document.getElementById("btn_creditos").addEventListener("click", function() {
    abrirModal("creditos_modal_dinamico");
});

document.getElementById("btn_cerrar_modal_dinamico_creditos").addEventListener("click", function() {
    cerrarModal("creditos_modal_dinamico");
});