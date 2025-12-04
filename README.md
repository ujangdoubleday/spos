# SPOS

A simple point of sales (POS) system built with Next.js 16, React 19, and TypeScript. Features product management, transaction processing, and sales reporting with a modern, user-friendly interface.

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone or use this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- **`npm run dev`** - Start development server with TurboPack
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run build`** - Build the application
- **`npm start`** - Start the application

## Development Setup

### Code Quality

This starter includes pre-configured tools for maintaining code quality:

- **ESLint**: Configured with Next.js recommended settings
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Runs linters only on staged files

Pre-commit hooks automatically:
- Fix ESLint issues
- Format code with Prettier

### Editing Files

You can start editing by modifying files in the `app/` directory. The application auto-updates as you edit.

## Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```
## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com), created by the Next.js team:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure your build settings
4. Your site is live!

[Learn more about deploying Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

### Other Deployment Options

- [Docker](https://nextjs.org/docs/app/building-your-application/deploying/docker)
- [Node.js Server](https://nextjs.org/docs/app/building-your-application/deploying/self-hosted)
- [Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React concepts
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide

## License

This project is open source and available under the MIT. See [LICENSE.md](LICENSE.md)
