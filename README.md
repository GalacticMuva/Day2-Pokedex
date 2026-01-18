# 📱 Pokédex: Supabase Storage & Fetch API

A dynamic Pokémon display application built with vanilla JavaScript and Bootstrap. This project demonstrates how to fetch data from a Supabase database and display images hosted in a Supabase Storage (S3) bucket.

## 🚀 Features
* **Dynamic Rendering:** Pokémon cards are generated dynamically using data fetched from Supabase.
* **S3 Image Hosting:** All Pokémon images are stored and served from a public Supabase Storage bucket.
* **Instant Search:** A real-time search bar to filter Pokémon by name.
* **Loading UI:** A Bootstrap spinner that displays while data is being fetched.
* **Responsive Design:** A fully mobile-friendly grid layout using Bootstrap 5.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** Bootstrap 5
* **Backend:** [Supabase](https://supabase.com/) (Database & Storage)

## 📋 Setup & Installation

To protect my database credentials, I have excluded the config.js file from this repository using a .gitignore. If you would like to run this project locally, please follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/GalacticMuva/Day2-Pokedex.git](https://github.com/GalacticMuva/Day2-Pokedex.git)
2. **Create a configuration file:** In the root directory, create a new file named config.js and add the following code structure:
* const CONFIG = {
   * SUPABASE_URL: "YOUR_SUPABASE_URL",
   * SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY"

};

## Why is this step necessary?

**Security & Privacy:** My Supabase credentials are sensitive. By using a config.js file and adding it to my .gitignore, I ensure that my private keys are never uploaded to a public repository where others could access my database.

**Local Configuration:** Since this file is intentionally missing from GitHub, you will need to create it locally so the application can successfully connect to the database.

**Professional Standards:** This approach follows industry best practices for managing environment variables and keeping secret keys separate from the source code.

## 🦖 Featured Pokémon (Ranks 20-11)
This Pokédex showcases 10 of the strongest non-legendary Pokémon, focusing on ranks 20 through 11 as featured on FandomSpot:

20. **[Chandelure](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - Features an insanely high Special Attack, making it one of the series' strongest Ghost-type attackers.
19. **[Conkeldurr](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A powerful Fighting-type known for its high Attack and solid Defense stats.
18. **[Gyarados](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A classic powerhouse that uses Dragon Dance to become a top-tier physical sweeper.
17. **[Breloom](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A unique Grass/Fighting-type often used for stalling with moves like Spore and Leech Seed.
16. **[Slaking](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - Possesses some of the highest base stats in the game, comparable to many legendary Pokémon.
15. **[Blissey](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - The ultimate defensive tank with massive HP and Special Defense.
14. **[Blaziken](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A devastating attacker that becomes faster every turn thanks to its Speed Boost ability.
13. **[Infernape](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A versatile and fast starter capable of using both physical and special attacks effectively.
12. **[Magnezone](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A Steel/Electric-type with the niche ability to trap other Steel-types with Magnet Pull.
11. **[Volcarona](https://www.fandomspot.com/strongest-non-legendary-pokemon/)** - A deadly Special Attack sweeper that uses Quiver Dance to boost its stats to dangerous levels.
