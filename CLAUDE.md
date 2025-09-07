# Agent Web - Claude Development Guide

A comprehensive modern React + Vite SPA showcasing the integration of Monaco Editor, React Flow, TanStack Query, Tailwind CSS + shadcn/ui, and Zustand state management, built with Bun.

## 🚨 CRITICAL: MCP Tools Documentation Requirements

### **MANDATORY: Always Use context7 MCP for Documentation**

When working on this project or adding new technologies, you **MUST** use the `context7` MCP server to fetch proper documentation. This is essential for:

1. **Correct API usage patterns**
2. **Latest version compatibility**
3. **Proper integration techniques**
4. **Avoiding deprecated methods**

#### **Required Workflow for Adding New Technologies:**

```bash
# 1. First, resolve the library ID
mcp__context7__resolve-library-id
  libraryName: "<package-name>"

# 2. Then fetch comprehensive documentation
mcp__context7__get-library-docs
  context7CompatibleLibraryID: "<resolved-library-id>"
  topic: "<specific-topic-if-needed>"
  tokens: 8000
```

#### **Examples of Correct MCP Usage:**

```bash
# For React Flow
mcp__context7__resolve-library-id
  libraryName: "xyflow"

mcp__context7__get-library-docs
  context7CompatibleLibraryID: "/xyflow/xyflow"
  topic: "React integration with TypeScript"
  tokens: 8000

# For Monaco Editor
mcp__context7__resolve-library-id
  libraryName: "monaco-editor"

mcp__context7__get-library-docs
  context7CompatibleLibraryID: "/microsoft/monaco-editor"
  topic: "Vite integration with web workers"
  tokens: 8000

# For Tailwind CSS
mcp__context7__resolve-library-id
  libraryName: "tailwindcss"

mcp__context7__get-library-docs
  context7CompatibleLibraryID: "/tailwindlabs/tailwindcss"
  topic: "v4 Vite plugin configuration"
  tokens: 6000
```

#### **⚠️ DO NOT:**
- Guess API patterns or configuration
- Use outdated documentation from general knowledge
- Skip documentation fetching for "simple" integrations
- Use deprecated package names or imports

#### **✅ ALWAYS:**
- Fetch documentation before implementing
- Verify current package names and versions
- Check for breaking changes in latest versions
- Follow official integration patterns from docs

## 📦 Complete Package Inventory

### **Production Dependencies**
```json
{
  "@radix-ui/react-slot": "^1.2.3",        // Base primitive for shadcn/ui
  "@tailwindcss/vite": "^4.1.13",          // Tailwind CSS v4 Vite plugin
  "@tanstack/react-query": "^5.87.1",      // Server state management
  "@xyflow/react": "^12.8.4",              // React Flow for node diagrams
  "class-variance-authority": "^0.7.1",    // CVA for component variants
  "clsx": "^2.1.1",                        // Conditional classes utility
  "lucide-react": "^0.542.0",              // Icon library for shadcn/ui
  "monaco-editor": "^0.52.2",              // VS Code editor in browser
  "react": "^19.1.1",                      // React framework
  "react-dom": "^19.1.1",                  // React DOM renderer
  "tailwind-merge": "^3.3.1",              // Tailwind class merging
  "zustand": "^5.0.8"                      // Lightweight state management
}
```

### **Development Dependencies**
```json
{
  "@eslint/js": "^9.33.0",                     // ESLint core
  "@tanstack/react-query-devtools": "^5.87.1", // Query devtools
  "@types/node": "^24.3.1",                    // Node.js types
  "@types/react": "^19.1.10",                  // React types
  "@types/react-dom": "^19.1.7",               // React DOM types
  "@vitejs/plugin-react": "^5.0.0",            // Vite React plugin
  "autoprefixer": "^10.4.21",                  // CSS autoprefixer
  "eslint": "^9.33.0",                         // Linting
  "eslint-plugin-react-hooks": "^5.2.0",       // React hooks rules
  "eslint-plugin-react-refresh": "^0.4.20",    // React refresh rules
  "globals": "^16.3.0",                        // Global variables
  "postcss": "^8.5.6",                         // CSS processing
  "tailwindcss": "^4.1.13",                    // Tailwind CSS framework
  "typescript": "~5.8.3",                      // TypeScript compiler
  "typescript-eslint": "^8.39.1",              // TypeScript ESLint
  "vite": "^7.1.2"                             // Build tool
}
```

## 🏗️ Complete Project Architecture

```
agent-web/
├── public/
│   └── vite.svg                      # Vite logo
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx            # shadcn/ui Button component
│   │   ├── MonacoEditor.tsx          # Monaco Editor React wrapper
│   │   └── ReactFlowDemo.tsx         # React Flow demonstration
│   ├── lib/
│   │   └── utils.ts                  # Utility functions (cn helper)
│   ├── providers/
│   │   └── query-provider.tsx        # TanStack Query provider setup
│   ├── stores/
│   │   └── useAppStore.ts            # Zustand state store
│   ├── App.tsx                       # Main application component
│   ├── main.tsx                      # React application entry point
│   ├── index.css                     # Tailwind CSS imports
│   └── vite-env.d.ts                 # Vite environment types
├── .gitignore                        # Git ignore rules
├── CLAUDE.md                         # This development guide
├── README.md                         # Project documentation
├── bun.lock                          # Bun lockfile
├── components.json                   # shadcn/ui configuration
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML entry point
├── package.json                      # Package configuration
├── tsconfig.json                     # TypeScript base config
├── tsconfig.app.json                 # TypeScript app config
├── tsconfig.node.json                # TypeScript Node.js config
└── vite.config.ts                    # Vite configuration
```

## ⚙️ Configuration Deep Dive

### **Vite Configuration (`vite.config.ts`)**
```typescript
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],    // React + Tailwind v4 plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Path aliases
    },
  },
})
```

### **TypeScript Configuration**
- **`tsconfig.json`**: Base configuration with path mapping
- **`tsconfig.app.json`**: Application-specific settings (ES2022 target)
- **`tsconfig.node.json`**: Node.js environment settings

### **Tailwind CSS v4 Setup**
- **Plugin**: Uses `@tailwindcss/vite` instead of PostCSS
- **Import**: Single `@import "tailwindcss";` in `src/index.css`
- **Config**: Auto-generated `tailwind.config.js`

### **shadcn/ui Configuration (`components.json`)**
```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

## 🔧 Technology Integration Details

### **1. Monaco Editor Integration**

#### **Key Implementation Points:**
- **Package**: `monaco-editor@0.52.2`
- **Web Workers**: Configured for Vite with `?worker` suffix
- **Environment**: Custom `MonacoEnvironment` for worker routing
- **TypeScript Support**: Full language service integration

#### **Critical Setup Code:**
```typescript
// Web worker configuration for Vite
self.MonacoEnvironment = {
  getWorker: function (_workerId: string, label: string) {
    const getWorkerModule = (moduleUrl: string, label: string) => {
      return new Worker(moduleUrl, {
        name: label,
        type: 'module'
      })
    }
    
    switch (label) {
      case 'json':
        return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label)
      case 'typescript':
      case 'javascript':
        return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label)
      // ... other language workers
    }
  }
}
```

### **2. React Flow Integration**

#### **Key Implementation Points:**
- **Package**: `@xyflow/react@12.8.4` (modern package name)
- **Hooks**: `useNodesState`, `useEdgesState` for state management
- **Components**: `ReactFlow`, `MiniMap`, `Controls`, `Background`
- **TypeScript**: Full type support with `Connection` type

#### **Critical Setup Code:**
```typescript
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  BackgroundVariant,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'  // Required CSS import
```

### **3. Zustand State Management**

#### **Key Implementation Points:**
- **Package**: `zustand@5.0.8`
- **DevTools**: Redux DevTools integration
- **TypeScript**: Separate interfaces for state and actions
- **Patterns**: Immer-style updates with `set` function

#### **Store Architecture:**
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

export const useAppStore = create<AppState & AppActions>()(
  devtools(
    (set) => ({
      // State
      count: 0,
      theme: 'system',
      
      // Actions
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'app-store' }
  )
)
```

### **4. TanStack Query Integration**

#### **Key Implementation Points:**
- **Package**: `@tanstack/react-query@5.87.1`
- **DevTools**: `@tanstack/react-query-devtools@5.87.1`
- **SSR Safety**: Client creation pattern for universal apps
- **Configuration**: Optimized defaults for caching

#### **Provider Setup:**
```typescript
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,      // 1 minute
        gcTime: 10 * 60 * 1000,    // 10 minutes
      },
    },
  })
}

// SSR-safe client creation pattern
let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()  // Server: always new client
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient  // Browser: reuse client
  }
}
```

### **5. Tailwind CSS v4 + shadcn/ui**

#### **Key Implementation Points:**
- **Tailwind**: `tailwindcss@4.1.13` with `@tailwindcss/vite@4.1.13`
- **shadcn/ui**: New York style with CSS variables
- **Utilities**: `clsx@2.1.1` + `tailwind-merge@3.3.1` for `cn()` helper
- **Icons**: `lucide-react@0.542.0`

#### **Utility Function:**
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 🚀 Development Commands & Workflows

### **Essential Commands**
```bash
# Development
bun dev                    # Start dev server (localhost:5173)
bun run build             # Production build
bun run preview           # Preview production build
bun run lint              # Run ESLint

# Package Management  
bun add <package>         # Add dependency
bun add -d <package>      # Add dev dependency
bun remove <package>      # Remove dependency
bun install               # Install all dependencies

# Git Operations
git add .                 # Stage all changes
git commit -m "message"   # Commit changes
git push                  # Push to remote
```

### **Build & Deployment**
- **Build Output**: `dist/` directory
- **Assets**: Optimized with Vite's built-in bundling
- **Deployment**: Ready for static hosting (Vercel, Netlify, etc.)

## 🛡️ Type Safety & Code Quality

### **TypeScript Configuration**
- **Strict Mode**: Enabled for maximum type safety
- **ES2022 Target**: Modern JavaScript features
- **Path Aliases**: `@/*` mapped to `./src/*`
- **Module Resolution**: Node.js style

### **ESLint Setup**
- **React Rules**: React hooks and refresh rules
- **TypeScript**: Full TypeScript ESLint integration
- **Globals**: Browser and Node.js globals configured

## 🎯 Adding New Features

### **Required Process:**
1. **Research**: Use `context7` MCP to fetch documentation
2. **Install**: Add packages with `bun add`
3. **Configure**: Update relevant config files
4. **Implement**: Follow documentation patterns
5. **Test**: Ensure build and dev server work
6. **Document**: Update this CLAUDE.md file

### **Common Integration Patterns:**

#### **Adding a New UI Library:**
```bash
# 1. Research first
mcp__context7__resolve-library-id
  libraryName: "<library-name>"

mcp__context7__get-library-docs
  context7CompatibleLibraryID: "<resolved-id>"
  topic: "React integration"
  tokens: 8000

# 2. Install
bun add <library-name>

# 3. Configure & implement following docs
```

#### **Adding State/Data Libraries:**
```bash
# 1. Always fetch docs first
mcp__context7__get-library-docs
  context7CompatibleLibraryID: "<library-id>"
  topic: "TypeScript setup"
  tokens: 8000

# 2. Create proper TypeScript interfaces
# 3. Follow official integration patterns
# 4. Add to providers if needed
```

## 🐛 Common Issues & Solutions

### **Monaco Editor Issues:**
- **Worker Loading**: Ensure `?worker` suffix in Vite
- **TypeScript**: Verify `MonacoEnvironment` configuration
- **Build Errors**: Check worker URL patterns match Vite structure

### **React Flow Issues:**
- **Package**: Use `@xyflow/react`, not `reactflow`
- **CSS**: Don't forget `import '@xyflow/react/dist/style.css'`
- **Types**: Import types with `type` keyword

### **Tailwind Issues:**
- **v4 Plugin**: Use `@tailwindcss/vite`, not PostCSS config
- **Import**: Single `@import "tailwindcss";` in CSS
- **shadcn/ui**: Ensure `components.json` matches structure

### **Build Issues:**
- **Type Errors**: Check all imports use correct packages
- **Missing Deps**: Verify all required packages installed
- **Path Aliases**: Ensure `@/*` aliases configured in `tsconfig.json`

## 📚 Documentation Standards

### **When Updating This File:**
1. **Always verify** package versions match `package.json`
2. **Document** all new integrations with code examples
3. **Update** the package inventory section
4. **Include** MCP tool usage examples for new libraries
5. **Test** all documented commands and configurations

### **Code Documentation:**
- TypeScript interfaces for all custom types
- JSDoc comments for complex functions
- README updates for user-facing changes
- Configuration file comments for clarity

## 🎉 Success Criteria

This project setup is considered successful when:
- ✅ All packages build without TypeScript errors
- ✅ Development server starts without warnings
- ✅ Monaco Editor loads with proper syntax highlighting
- ✅ React Flow renders interactive diagrams
- ✅ Zustand state management works with DevTools
- ✅ shadcn/ui components render correctly
- ✅ Tailwind CSS classes apply properly
- ✅ Build process completes successfully
- ✅ All integrations work together seamlessly

**Remember: Always use the context7 MCP tool before making changes!**