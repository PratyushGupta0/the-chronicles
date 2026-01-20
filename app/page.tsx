export default function Home() {
  return (
    <article className="prose prose-slate lg:prose-xl mx-auto">
      {/* This is your main heading */}
      <h1 className="text-4xl font-serif">Welcome to the Realm</h1>
      
      <p className="lead">
        This is the central archive for my latest fiction project. 
        Here you will find chapters, character lore, and maps of the world.
      </p>

      <section>
        <h2 className="font-serif">Current Project: [Your Story Title]</h2>
        <p>
          It began as a simple idea and evolved into a world of its own. 
          The sidebar on the left will guide you through the latest chapters 
          and the geography of the land.
        </p>
      </section>

      <div className="bg-amber-50 p-6 border-l-4 border-amber-200 my-8">
        <p className="m-0 italic text-sm">
          "The world is large, but the story is larger." — Author's Note
        </p>
      </div>

      <p>
        Stay tuned for regular updates. I'll be posting high-resolution 
        maps and world-building notes as the narrative progresses.
      </p>
    </article>
  );
}