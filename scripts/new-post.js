const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help') {
  console.log('Usage: npm run new-post "Post Title" [--author "Name"]');
  process.exit(args[0] === '--help' ? 0 : 1);
}

const title = args[0];
const authorIdx = args.indexOf('--author');
const author = authorIdx !== -1 && args[authorIdx + 1] ? args[authorIdx + 1] : 'Sam';

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const date = new Date().toISOString().split('T')[0];
const filePath = path.join(__dirname, '..', 'posts', `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Error: ${filePath} already exists.`);
  process.exit(1);
}

const content = `---
title: "${title}"
date: "${date}"
published: false
author: "${author}"
description: ""
---

Start writing here.
`;

fs.writeFileSync(filePath, content);
console.log(`Created: posts/${slug}.mdx`);
