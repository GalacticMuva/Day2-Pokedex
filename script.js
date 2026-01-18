// 1. Supabase start
const supabaseUrl = CONFIG.SUPABASE_URL;
const supabaseKey = CONFIG.SUPABASE_ANON_KEY;
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

// 2. Select Elements
const container = document.getElementById('pokemon-container');
const searchInput = document.getElementById('pokemonSearch');
const loader = document.getElementById('loadingSpinner');

let allPokemon = []; 

// 3. Fetch Data 
async function fetchPokemon() {
    // Show the spinner
    loader.classList.remove('d-none');
    container.innerHTML = '';

    try {
        const { data, error } = await supabaseClient
            .from('Pokemon')
            .select('*');

        if (error) throw error;

        allPokemon = data; // Store results
        displayPokemon(allPokemon); // display results

    } catch (err) {
        console.error("Fetch Error:", err.message);
        container.innerHTML = `<div class="col-12 text-center text-danger">Error: ${err.message}</div>`;
    } finally {
        // Hide the spinner pass/fail
        loader.classList.add('d-none');
    }
}

// 4. Card display
function renderCard(pokemon) {
    const cardHTML = `
        <div class="col">
            <div class="card h-100 bg-secondary border-0 shadow">
                <img src="${pokemon.image_url}" class="card-img-top p-3" alt="${pokemon.name}">
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase fw-bold">${pokemon.name}</h5>
                    <p class="card-text text-light">ID: #${pokemon.id}</p>
                </div>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
}

// 5. Display/Filter Function
function displayPokemon(list) {
    container.innerHTML = '';
    if (list.length === 0) {
        container.innerHTML = '<p class="text-center w-100">No Pokémon found matching that name.</p>';
        return;
    }
    list.forEach(pokemon => renderCard(pokemon));
}

// 6. Search Functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allPokemon.filter(p => p.name.toLowerCase().includes(term));
    displayPokemon(filtered);
});

// On-page load
fetchPokemon();