# Translation Files Organization

This directory contains split translation files that are automatically merged into `translation.json` before builds.

## How it works

1. **Split files**: Break down the large `translation.json` into smaller, manageable files
2. **Auto-merge**: Before any `npm start` or `npm run build`, the merge script runs automatically
3. **File naming**: Use numbered prefixes to control merge order (e.g., `01-global.json`, `02-header.json`)

## File Structure

```
01-translate/
├── 01-global.json                        # Site-wide global translations
├── 02-header.json                        # Header navigation & language selector
├── 03-footer.json                        # Footer & alert translations
├── 04-01-pages-home.json                 # Home page translations
├── 04-02-pages-knowledge.json            # Knowledge base main page
├── 04-02-01-pages-knowledge-push101.json # Knowledge: Push 101 basics
├── 04-02-02-pages-knowledge-builders.json # Knowledge: Builders guides
├── 04-02-03-pages-knowledge-deepdives.json # Knowledge: Deep dives
├── 04-02-04-pages-knowledge-partners.json # Knowledge: Partners & ecosystem
├── 04-02-05-pages-knowledge-tokenomics.json # Knowledge: Tokenomics
├── 04-02-06-pages-knowledge-faq.json     # Knowledge: FAQ
├── 04-03-pages-docs.json                 # Documentation page
├── 04-04-pages-blog.json                 # Blog page
├── 04-05-pages-lfpush.json               # Let's Push page
├── 04-06-pages-support.json              # Support page
├── 04-07-pages-litepaper.json            # Litepaper page
├── 04-08-pages-tos.json                  # Terms of Service page
├── 04-09-pages-privacy.json              # Privacy Policy page
├── 04-10-pages-privacymobile.json        # Mobile Privacy Policy page
├── 04-11-pages-brb.json                  # BRB Hackathon page
├── 05-components.json                    # Reusable components
└── README.md                             # This file
```

## Adding New Translations

1. Create a new `.json` file in this directory
2. Use a numbered prefix to control merge order
3. Structure should match the final `translation.json` hierarchy
4. The merge script will automatically combine all files

## Example File Structure

```json
{
  "pages": {
    "home": {
      "hero-section": {
        "title": "Your title here",
        "description": "Your description here"
      }
    }
  }
}
```

## Manual Merge

To manually trigger the merge (useful for testing):

```bash
node scripts/merge-translations.js
```

## Notes

- Files are merged in alphabetical order (hence the numbered prefixes)
- Nested objects are deep-merged automatically
- The original `translation.json` is overwritten on each merge
- All `.json` files in this directory are included in the merge
