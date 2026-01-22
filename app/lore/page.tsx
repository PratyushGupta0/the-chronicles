import { getAllLore } from '@/lib/lore';
import DiscoveryGrid from '@/components/ui/DiscoveryGrid';

export default async function LoreIndex() {
    const loreEntries = getAllLore();

    // The World is now a directory/page.tsx, so we add it manually to the discovery grid
    const allItems = [
        {
            slug: 'world',
            title: 'The World',
            description: 'An overview of the lands and empires that form our world',
            image: '/images/lore/world.png',
            href: '/lore/world'
        },
        ...loreEntries
    ];

    return (
        <DiscoveryGrid
            title="The World of Our Chronicles"
            tagLabel="Lore Discovery"
            items={allItems}
        />
    );
}
