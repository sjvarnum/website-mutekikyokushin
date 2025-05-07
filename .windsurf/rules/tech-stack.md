---
trigger: always_on
---

# Tech Stack

## Core Technologies

### Frontend Framework
- **React**: Latest stable version (v19.1)
- **TypeScript**: Required for all new code
- **Build Tool**: Vite, do not use create react app (CRA)

### Routing
- **React Router**: For client-side routing and navigation

### State Management
- **Local State**: React's useState and useReducer

### Styling
- **Primary**: Bootstrap 5.3.6
- **Component Library**: React Bootstrap
- **CSS-in-JS**: styled-components (when component-scoped styles are needed)
- **CSS Modules**: Acceptable for component-specific styling

## Development Tools

### Code Quality
- **Linting**: ESLint with appropriate React/TypeScript plugins
- **Formatting**: Prettier
- **Type Checking**: TypeScript strict mode enabled

### Version Control
- **Git Flow**: Feature branches with pull requests
- **Commit Style**: Conventional Commits format

## Performance Optimization

### Rendering Optimization
- **Code Splitting**: Utilize React.lazy and Suspense
- **Memoization**: Use React.memo, useMemo, and useCallback appropriately
- **Virtualization**: react-window or react-virtualized for large lists

## Form Management

### Form Libraries
- **React Hook Form**: Primary choice for complex forms
- **Zod**: For schema validation
- **Simple forms**: Use native HTML form elements with controlled components

## Deployment and Infrastructure

### Hosting
- **Hosting**: Netlify

## Accessibility

### A11y Requirements
- **WCAG 2.1**: Minimum AA compliance
- **Keyboard Navigation**: Ensure all interactions are keyboard accessible