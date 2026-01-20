import Link from 'next/link';

const FAQSection = () => {
    const FAQs = [
        {
            question: "Are more chapters coming?",
            answer: "Yes."
        },
        {
            question: "Are more discussions on Lore coming?",
            answer: "Yes."
        },
        {
            question: "Do you work alone?",
            answer: "Yes."
        },
        {
            question: "Do you need help?",
            answer: "Hell yes. Please hit me up if you want to help with artwork or just become a co-author with me. This story has really gone out of hand."
        }
    ];

    return (
        <section className="max-w-4xl mx-auto py-16 px-4">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-amber-950 text-center mb-16">
                Common Questions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FAQs.map((faq, index) => (
                    <div key={index} className="bg-white/40 backdrop-blur-sm p-8 rounded-xl border border-amber-900/10 hover:bg-white/60 transition-colors duration-300">
                        <h4 className="font-serif text-xl font-bold text-amber-950 mb-4">{faq.question}</h4>
                        <p className="font-sans text-slate-800 leading-relaxed font-medium">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
