import { getAllContent, getContentBySlug, ContentItem } from './content';

export interface WorldEntity {
    slug: string;
    title: string;
    motto: string;
    bannerImage: string;
    cardImage: string;
    description: string;
    sections: {
        overview: string;
        etymology: string;
        history: string;
        geography: string;
        government: string;
        economy: string;
        demographics: string;
        culture: string;
        military: string;
    };
    stats: {
        capital: string;
        ruler: string;
        governmentType: string;
        primaryLanguage: string;
        religion: string;
        population: string;
    };
}

function mapContentToWorldEntity(item: ContentItem): WorldEntity {
    // Ensure all required fields exist by providing defaults
    const metadata = item.metadata as any;

    return {
        slug: item.slug,
        title: metadata.title || "Untitled Entity",
        motto: metadata.motto || "",
        bannerImage: metadata.bannerImage || "/images/lore/blank.webp",
        cardImage: metadata.cardImage || metadata.image || metadata.bannerImage || "/images/lore/blank.webp",
        description: metadata.description || "",
        sections: {
            overview: metadata.sections?.overview || "",
            etymology: metadata.sections?.etymology || "",
            history: metadata.sections?.history || "",
            geography: metadata.sections?.geography || "",
            government: metadata.sections?.government || "",
            economy: metadata.sections?.economy || "",
            demographics: metadata.sections?.demographics || "",
            culture: metadata.sections?.culture || "",
            military: metadata.sections?.military || "",
        },
        stats: {
            capital: metadata.stats?.capital || "Unknown",
            ruler: metadata.stats?.ruler || "Unknown",
            governmentType: metadata.stats?.governmentType || "Unknown",
            primaryLanguage: metadata.stats?.primaryLanguage || "Unknown",
            religion: metadata.stats?.religion || "Unknown",
            population: metadata.stats?.population || "Unknown",
        },
    };
}

export function getWorldEntity(slug: string): WorldEntity | null {
    const item = getContentBySlug('world', slug);
    if (!item) return null;
    return mapContentToWorldEntity(item);
}

export function getAllWorldEntities(): WorldEntity[] {
    const items = getAllContent('world');
    return items.map(mapContentToWorldEntity);
}
