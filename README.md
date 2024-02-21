# Component Library Starter

A starter template for building your own React component library. It includes TypeScript, Tailwind CSS, CSS design tokens, a Tailwind preset, Rollup bundling, Jest tests, and Storybook documentation.

Use this repo as a foundation: rename the package, customize tokens and branding, then add your own components.

## Requirements

- Node.js >= 16
- React >= 17
- Tailwind CSS >= 3
- PostCSS >= 8

## Quick start

```bash
# Install dependencies
yarn install

# Run Storybook (component docs & playground)
yarn storybook

# Run tests
yarn test

# Build the library
yarn build
```

## Project structure

```
src/
├── components/       # React components (6 examples included)
├── css/variables/    # Design tokens (primitives + semantic tokens)
├── tailwind-presets/ # Tailwind preset for consumers
├── styles/           # Tailwind input CSS for Storybook
├── assets/           # SVG icons (add your own as needed)
└── index.tsx         # Public exports
```

## Customization guide

### 1. Rename the package

Update `name`, `description`, and `repository` in `package.json`:

```json
{
  "name": "@your-org/ui-library",
  "description": "Your design system"
}
```

Search the repo for `@your-org/ui-library` after renaming and update README examples.

### 2. Design tokens

Tokens live in `src/css/variables/`:

| Path                           | Purpose                                       |
| ------------------------------ | --------------------------------------------- |
| `Primitive/Color/Brand.css`    | Primary brand palette                         |
| `Primitive/Color/Accent.css`   | Secondary / accent palette                    |
| `Primitive/Color/Neutral.css`  | Grays and surfaces                            |
| `Primitive/Color/Feedback.css` | Success, warning, error, info                 |
| `Primitive/Spacing.css`        | Spacing scale                                 |
| `Tokens/Light/tokens.css`      | Semantic tokens for light mode                |
| `Tokens/Dark/tokens.css`       | Semantic tokens for dark mode (`.dark` class) |

Semantic tokens (e.g. `--action-primary-default`, `--form-border`) map to Tailwind utilities via the preset.

### 3. Tailwind preset

Import the preset in your app's `tailwind.config.js`:

```javascript
import { tailwindPreset } from '@your-org/ui-library';

export default {
  presets: [tailwindPreset],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
```

The preset uses the `ds-` prefix by default to avoid clashes (e.g. `ds-bg-action-primary-default`). Storybook uses an empty prefix locally.

### 4. Add components

1. Create a folder under `src/components/yourComponent/`.
2. Export from `src/components/yourComponent/index.tsx`.
3. Add the export to `src/index.tsx`.
4. Add a `__stories__` file for Storybook.

### 5. Storybook branding

Edit `.storybook/storybook-theme.js` for title and colors. Add a logo to `public/` if desired.

## Installation in a consumer app

```bash
yarn add @your-org/ui-library
```

Import components:

```javascript
import {
  Badge,
  Button,
  Checkbox,
  Link,
  Modal,
  TextInput,
} from '@your-org/ui-library';
```

Import styles in your main CSS file:

```css
@import '@your-org/ui-library/dist/css/index.css';
```

### CSS variables

Override semantic tokens in your app:

```css
:root {
  --action-primary-default: #2563eb;
  --base-bg: #ffffff;
}
```

### Example: Button

```jsx
<Button
  buttonType="primary"
  label="Click me"
  size="medium"
  onClick={() => console.log('clicked')}
/>
```

### Example: TextInput

```jsx
<TextInput
  label="Email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

## Example components

| Component   | Description                                               |
| ----------- | --------------------------------------------------------- |
| `Button`    | Primary, secondary, ghost, neutral, and semantic variants |
| `TextInput` | Text field with label, helper text, and validation states |
| `Checkbox`  | Checkbox with label and error messaging                   |
| `Badge`     | Status badges (default, success, error, warning, info)    |
| `Modal`     | Modal dialog with configurable header and footer          |
| `Link`      | Inline text links                                         |

## Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `yarn storybook`       | Start Storybook on port 6006 |
| `yarn build`           | Build library to `dist/`     |
| `yarn build:storybook` | Build static Storybook       |
| `yarn test`            | Run Jest tests               |
| `yarn lint`            | Run ESLint                   |

## Publishing

1. Set `publishConfig.access` in `package.json` (`public` or `restricted`).
2. Run `yarn build`.
3. Publish with `npm publish` (or your CI pipeline).

The `files` field publishes only the `dist/` folder.

## License

MIT — customize as needed for your project.
