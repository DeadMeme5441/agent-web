# Agent Web

A modern React + Vite SPA showcasing the integration of Monaco Editor, React Flow, TanStack Query, Tailwind CSS + shadcn/ui, and Zustand state management.

## Tech Stack

- **Runtime**: Bun
- **Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **UI Components**: shadcn/ui (new-york style)
- **State Management**: Zustand with devtools
- **Data Fetching**: TanStack Query with devtools
- **Code Editor**: Monaco Editor with web workers
- **Flow Diagrams**: React Flow with controls and minimap
- **Package Manager**: Bun

## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   └── button.tsx
│   ├── MonacoEditor.tsx       # Monaco Editor wrapper component
│   └── ReactFlowDemo.tsx      # React Flow demo component
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
├── providers/
│   └── query-provider.tsx    # TanStack Query provider
├── stores/
│   └── useAppStore.ts        # Zustand state store
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Tailwind CSS imports
```

## Development Commands

```bash
# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Install new dependencies
bun add <package-name>

# Install dev dependencies
bun add -d <package-name>
```

## Key Features Implemented

### 1. Monaco Editor Integration
- Full TypeScript/JavaScript language support
- Proper web worker configuration for Vite
- Dark theme by default
- Real-time code editing with change callbacks
- Syntax highlighting and IntelliSense

### 2. React Flow Integration
- Interactive node-based UI
- Drag and drop functionality
- Minimap for navigation
- Background grid/dots
- Controls for zoom/pan
- Animated edges

### 3. State Management (Zustand)
- TypeScript-first store definition
- Redux DevTools integration
- Separate state and actions interfaces
- Theme switching capability
- Counter state management

### 4. Styling (Tailwind CSS v4)
- Using the new @tailwindcss/vite plugin
- shadcn/ui component library integrated
- CSS variables for theming
- Responsive grid layouts
- Modern utility-first approach

### 5. Data Fetching (TanStack Query)
- Provider wrapper with SSR-safe client creation
- DevTools integration
- Configured with sensible defaults (1min stale time, 10min gc)
- Ready for server state management

## Configuration Files

### Vite Configuration
- Tailwind CSS Vite plugin integration
- TypeScript path aliases (@/* → ./src/*)
- React plugin for JSX support

### TypeScript Configuration
- Path mapping for @/* imports
- Separate app and build configurations
- Modern ES2022 target

### shadcn/ui Configuration
- New York style variant
- CSS variables enabled
- Custom component aliases configured
- Lucide icons integration

## Monaco Editor Setup Details

The Monaco Editor is configured with:
- Web workers for language services (JSON, CSS, HTML, TypeScript)
- Proper Vite integration using `?worker` suffix
- MonacoEnvironment configuration for worker URLs
- TypeScript intellisense and error checking
- Dark theme by default with customizable options

## React Flow Setup Details

React Flow includes:
- Modern @xyflow/react package
- MiniMap for flow overview
- Controls for zoom/pan operations
- Background with customizable variants
- Node and edge state management with hooks
- Connection handling for interactive edge creation

## State Architecture

### Zustand Store Structure
```typescript
interface AppState {
  count: number
  theme: 'light' | 'dark' | 'system'
}

interface AppActions {
  increment: () => void
  decrement: () => void
  reset: () => void
  setTheme: (theme: AppState['theme']) => void
}
```

## Styling Approach

Using Tailwind CSS v4 with the new Vite plugin approach:
- Single `@import "tailwindcss";` in CSS
- No PostCSS configuration needed
- Automatic Tailwind processing via Vite plugin
- shadcn/ui components for consistent UI patterns

## Development Notes

- All packages use latest stable versions
- Bun is used as the JavaScript runtime and package manager
- TypeScript strict mode enabled
- ESLint configuration included
- Modern React patterns (hooks, functional components)
- CSS-in-JS avoided in favor of utility classes

## Next Steps

This setup provides a solid foundation for building complex web applications with:
- Rich code editing capabilities
- Interactive flow diagrams
- Efficient state management
- Beautiful, responsive UI
- Type-safe development experience

The architecture is scalable and follows modern React best practices.