const API_KEY = "84482fca6b138daed48e052965cb59de";

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('ciudad');
    const btnBuscar = document.getElementById('btnBuscar');
    const btnAsu = document.getElementById('btnAsuncion');

    btnBuscar.addEventListener('click', () => buscarClima(input.value));
    btnAsu.addEventListener('click', () => buscarClima('Asuncion'));
});

async function buscarClima(ciudad) {
    const errorEl = document.getElementById('error');
    const card = document.getElementById('cardResultado');

    errorEl.classList.add('hidden');
    card.classList.add('hidden');

    if (!ciudad || !ciudad.trim()) {
        errorEl.textContent = 'Ingrese una ciudad.';
        return errorEl.classList.remove('hidden');
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${API_KEY}&units=metric&lang=es`
        );

        const data = await res.json();

        if (data.cod !== 200) throw new Error(data.message);

        document.getElementById('nombreCiudad').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperatura').textContent = Math.round(data.main.temp);
        document.getElementById('humedad').textContent = data.main.humidity;
        document.getElementById('viento').textContent = data.wind.speed;
        document.getElementById('descripcion').textContent = capitalize(data.weather[0].description);
        document.getElementById('icono').src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        card.classList.remove('hidden');

    } catch (err) {
        console.error(err);
        errorEl.textContent = "Ciudad no encontrada.";
        errorEl.classList.remove('hidden');
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

async function buscarPais() {
    const nombre = document.getElementById('pais').value;
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${nombre}`);
        const data = await res.json();
        const pais = data[0];
        document.getElementById('paisResult').innerHTML = `
            <p>Nombre: ${pais.name.common}</p>
            <p>Capital: ${pais.capital ? pais.capital[0] : 'No disponible'}</p>
            <p>Región: ${pais.region}</p>
            <p>Población: ${pais.population}</p>
            <img src="${pais.flags.svg}" alt="Bandera" width="150">
        `;
    } catch (error) {
        document.getElementById('paisResult').innerText = 'País no encontrado';
    }
}
async function buscarPokemon() {
    const nombre = document.getElementById('pokemonName').value.toLowerCase();
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const data = await res.json();
        document.getElementById('pokemonResult').innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    } catch (error) {
        document.getElementById('pokemonResult').innerText = 'Pokémon no encontrado';
    }
}
async function buscarRick() {
    const id = document.getElementById('charId').value;
    try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        document.getElementById('rickResult').innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>Estado: ${data.status}</p>
            <p>Especie: ${data.species}</p>
            <img src="${data.image}" alt="${data.name}">
        `;
    } catch (error) {
        document.getElementById('rickResult').innerText = 'Personaje no encontrado';
    }
}
async function listarCripto() {
    try {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false');
        const data = await res.json();
        const tbody = document.querySelector('#cryptoTable tbody');
        tbody.innerHTML = '';
        data.forEach(c => {
            tbody.innerHTML += `<tr>
                <td>${c.name}</td>
                <td>$${c.current_price}</td>
                <td>$${c.market_cap}</td>
            </tr>`;
        });
    } catch (error) {
        console.error(error);
    }
}
