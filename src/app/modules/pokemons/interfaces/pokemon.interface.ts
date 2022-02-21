export interface PokemonPagination {
    offset: number;
    limit: number;
}

export interface PokemonResource {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonNamesResource[]
}

export interface PokemonNamesResource {
    name: string;
    url: string;
    detail: Pokemon;
}

export interface PokemonAbilities {
    ability: {
        name: string;
        url: string;
    }
    is_hidden: boolean;
    slot: number;
}

export interface PokemonForms {
    name: string;
    url: string;
}

export interface PokemonTypes {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string;
            front_female: string | null;
        },
        home: {
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
        },
        "official-artwork": {
            front_default: string;
        },

    }
}

export interface Pokemon {
    id: number;
    abilities: PokemonAbilities[];
    description?: string;
    base_experience: number;
    forms: PokemonForms[];
    height: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    types: PokemonTypes[];
    stats: PokemonStats[];
    sprites: PokemonSprites;
    species: {
        name: string;
        url: string;
    };
    weight: number;
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    flavor_text_entries: PokemonFlavorTextEntries[]
}

export interface PokemonFlavorTextEntries {
    flavor_text: string;
    language: {
        name: string;
    }
}