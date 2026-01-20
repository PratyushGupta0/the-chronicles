const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Get input file from command line
const inputFile = process.argv[2];
const chapterNumber = process.argv[3] || '1';
const title = process.argv[4] || 'Chapter Title';

if (!inputFile) {
    console.log('Usage: node scripts/import-doc.js <path-to-html-file> <chapter-number> "<title>"');
    process.exit(1);
}

try {
    const html = fs.readFileSync(inputFile, 'utf8');
    const markdown = turndownService.turndown(html);

    const fileContent = `---
title: "${title}"
chapter: ${chapterNumber}
description: ""
---

${markdown}
`;

    const slug = `${chapterNumber}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const outputPath = path.join(__dirname, `../content/chapters/${slug}.mdx`);

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully converted to ${outputPath}`);

} catch (e) {
    console.error('Error converting file:', e.message);
}
