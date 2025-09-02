# Tech Skills Component

This folder contains a dynamic tech skills system that allows you to easily manage and display your technology skills in a organized, categorized manner.

## Structure

```
tech-skills/
├── data.ts                 # Data file containing all tech skills and categories
├── tech-card.tsx          # Individual tech skill card component
├── tech-skills-section.tsx # Main tech skills section component
├── index.ts               # Export file for easy imports
└── README.md              # This documentation file
```

## Features

- **Dynamic Data Management**: All tech skills are stored in a structured data file
- **Flexible Icon Support**: Supports React components, SVG strings, and images
- **Automatic Optimization**: Uses Next.js Image component for better performance
- **Responsive Grid**: Automatically adjusts layout based on screen size
- **Tooltips**: Hover tooltips with skill descriptions
- **Easy Customization**: Add/remove categories and skills by editing the data file

## Usage

### Basic Usage

```tsx
import TechSkillsSection from '@/components/tech-skills'

export default function Page() {
  return <TechSkillsSection />
}
```

### Adding New Skills

To add a new skill, edit the `data.ts` file:

```tsx
// Add to existing category
{
  id: "frontend",
  title: "FRONTEND",
  skills: [
    // ... existing skills
    {
      icon: <SiVue className="text-green-500 h-6 w-6" />,
      name: "Vue.js",
      description: "Progressive JavaScript framework"
    }
  ]
}

// Or create a new category
{
  id: "mobile",
  title: "MOBILE",
  skills: [
    {
      icon: <SiReactnative className="text-blue-500 h-6 w-6" />,
      name: "React Native",
      description: "Cross-platform mobile development"
    }
  ]
}
```

### Icon Types

The system supports three types of icons:

1. **React Components** (recommended for icons):
```tsx
icon: <SiReact className="text-cyan-500 h-6 w-6" />
```

2. **SVG Strings**:
```tsx
icon: `<svg>...</svg>`
```

3. **Images** (with optional optimization):
```tsx
// With Next.js Image optimization (default)
icon: '<img src="/path/to/image.png" alt="Logo" className="h-8 w-auto" />'

// Without optimization
icon: '<img src="/path/to/image.png" alt="Logo" className="h-8 w-auto" />',
optimize: false
```

## Data Structure

```tsx
interface TechSkill {
  icon: React.ReactNode | string
  name: string
  description: string
  optimize?: boolean // Only for images
}

interface TechCategory {
  id: string
  title: string
  skills: TechSkill[]
}
```

## Customization

- **Colors**: Modify icon colors by changing the className
- **Layout**: Adjust grid columns in the main component
- **Styling**: Customize card appearance in the TechCard component
- **Categories**: Reorder or modify categories in the data file

## Benefits

- **Maintainable**: All data is centralized in one file
- **Scalable**: Easy to add new skills and categories
- **Performance**: Optimized image loading with Next.js
- **Flexible**: Supports various icon formats
- **Type-safe**: Full TypeScript support
