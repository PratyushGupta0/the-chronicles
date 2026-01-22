import DiscoveryGrid from '@/components/ui/DiscoveryGrid';

export default function WorldIndex() {
    const factions = [
        {
            slug: 'iron-pact',
            title: 'The Iron Pact',
            description: '',
            image: '/images/lore/blank.webp',
            href: '/lore/world/iron-pact'
        },
        {
            slug: 'ostravia',
            title: 'Ostravia',
            description: '',
            image: '/images/lore/blank.webp',
            href: '/lore/world/ostravia'
        },
        {
            slug: 'elysian-empire',
            title: 'The Elysian Empire',
            description: '',
            image: '/images/lore/blank.webp',
            href: '/lore/world/elysian-empire'
        },
        {
            slug: 'alba',
            title: 'Alba',
            description: '',
            image: '/images/lore/blank.webp',
            href: '/lore/world/alba'
        },
        {
            slug: 'kiyo-shogunate',
            title: 'The Kiyo Shogunate',
            description: '',
            image: '/images/lore/blank.webp',
            href: '/lore/world/kiyo-shogunate'
        }
    ];

    return (
        <DiscoveryGrid
            title="The Realms of our World"
            tagLabel="Realm Discovery"
            items={factions}
        />
    );
}
