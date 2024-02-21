# Design tokens

Customize your design system by editing these files.

## Primitives (`Primitive/`)

Raw values — change these to retheme the entire library.

- **Brand.css** — primary brand colors (buttons, links, focus states)
- **Accent.css** — secondary palette
- **Neutral.css** — grays for text, borders, and backgrounds
- **Feedback.css** — success, warning, error, and info colors
- **Spacing.css** — spacing scale
- **Other.css** — misc values

## Semantic tokens (`Tokens/`)

Map primitives to purpose-specific names used by components and Tailwind:

- **Light/tokens.css** — default (`:root`) theme
- **Dark/tokens.css** — overrides under `.dark` class

After changing tokens, rebuild CSS: `yarn build:postcss` or `yarn build`.
