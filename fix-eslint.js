const fs = require('fs');
const path = require('path');

// Files to fix with their specific replacements
const fixes = [
  {
    file: 'src/app/privacy-policy/page.tsx',
    replacements: [
      { from: "Children's", to: "Children&apos;s" },
      { from: '"Last updated"', to: '&quot;Last updated&quot;' }
    ]
  },
  {
    file: 'src/app/terms/page.tsx',
    replacements: [
      { from: "CutCoach's", to: "CutCoach&apos;s" },
      { from: '"Terms of Service"', to: '&quot;Terms of Service&quot;' },
      { from: '"Last updated"', to: '&quot;Last updated&quot;' }
    ]
  },
  {
    file: 'src/components/CoachMode.tsx',
    replacements: [
      { from: "CutCoach's", to: "CutCoach&apos;s" }
    ]
  },
  {
    file: 'src/components/Results.tsx',
    replacements: [
      { from: "CutCoach's", to: "CutCoach&apos;s" }
    ]
  },
  {
    file: 'src/components/TempTestimonials.tsx',
    replacements: [
      { from: '"CutCoach', to: '&quot;CutCoach' },
      { from: 'app!"', to: 'app!&quot;' }
    ]
  },
  {
    file: 'src/components/Testimonials.tsx',
    replacements: [
      { from: '"CutCoach', to: '&quot;CutCoach' },
      { from: 'app!"', to: 'app!&quot;' }
    ]
  }
];

// Apply fixes
fixes.forEach(({ file, replacements }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    replacements.forEach(({ from, to }) => {
      content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
    });
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('ESLint fixes applied!');
