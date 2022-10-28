// Variables


const marca = document.querySelector('#marca');

const year = document.querySelector('#year');

const minimo = document.querySelector('#minimo');

const maximo = document.querySelector('#maximo');

const puertas = document.querySelector('#puertas');

const transmision = document.querySelector('#transmision');

const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();

const min = max - 10;


// Generar un objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// Main

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestas los automoviles al cargar.

    // LLenar las obciones de años

    llenarSelect();
});


// Event lisener

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtarAuto();

});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtarAuto();

    //console.log(datosBusqueda);
});



// Funciones

// Genera los años del select
function llenarSelect() {

    for (let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        Option.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}



// Filtro de busqueda..

function filtarAuto() {

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaxino).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    };


}

function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `

        ${marca} ${modelo} - ${year} - $ ${precio} - ${puertas} PUERTAS -COLOR ${color} - TRASNMISION ${transmision}

        `

        // Inserta en html
        resultado.appendChild(autoHTML);

    });

}

//  Limpiar HTML

function limpiarHTML() {

    while (resultado.firstChild) {

        resultado.removeChild(resultado.firstChild);

    }

}


function noResultado() {

    const noResultado = document.createElement('div');

    noResultado.classList.add('alerta', 'error');

    noResultado.textContent = 'No hay resultados';

    limpiarHTML();

    resultado.appendChild(noResultado);

}





function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {

        return auto.marca === marca;
    }

    return auto;
}


function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {

        return auto.year === year;
    }

    return auto;
}





function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {

        return auto.precio >= minimo;

    }

    return auto;

}


function filtrarMaxino(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {

        return auto.precio <= maximo;

    }

    return auto;

}


function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;

    if (puertas) {

        return auto.puertas <= puertas;

    }

    return auto;

}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;

    if (transmision) {

        return auto.transmision === transmision;

    }

    return auto;

}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {

        return auto.color === color;

    }

    return auto;

}