import { getAllWorldEntities } from '@/lib/world';
import DiscoveryGrid from '@/components/ui/DiscoveryGrid';

export default function WorldIndex() {
    const entities = getAllWorldEntities();

    const items = entities.map(entity => ({
        slug: entity.slug,
        title: entity.title,
        description: entity.description,
        image: entity.cardImage,
        href: `/lore/world/${entity.slug}`
    }));

    return (
        <DiscoveryGrid
            title="The Realms of our World"
            tagLabel="Realm Discovery"
            items={items}
        />
    );
}
