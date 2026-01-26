import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      anthropic: {
        dark: '#141413',
        light: '#faf9f5',
        'mid-gray': '#b0aea5',
        'light-gray': '#e8e6dc',
        orange: '#d97757',
        blue: '#6a9bcc',
        green: '#788c5d',
      },
    },
  },
  shortcuts: {
    'anthropic-gradient': 'bg-gradient-to-br from-anthropic-dark via-[#1a1a18] to-anthropic-dark',
    'anthropic-card': 'bg-[#1e1e1c] border border-[#2a2a28] rounded-lg',
    'anthropic-text-primary': 'text-anthropic-light',
    'anthropic-text-secondary': 'text-anthropic-mid-gray',
    'anthropic-text-accent': 'text-anthropic-orange',
    'anthropic-link': 'text-anthropic-orange hover:text-anthropic-light transition-colors',
  },
})
