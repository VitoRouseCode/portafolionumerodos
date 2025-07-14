// Configuración simplificada sin TypeScript para evitar errores
import { createTamagui } from '@tamagui/core'

// Configuración básica sin tipos complejos
const config = createTamagui({
  themes: {
    light: {
      background: '#ffffff',
      color: '#000000',
    },
    dark: {
      background: '#000000', 
      color: '#ffffff',
    },
  },
  tokens: {
    space: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
    },
    size: {
      1: 16,
      2: 20,
      3: 24,
      4: 28,
      5: 32,
      6: 36,
    },
    radius: {
      1: 3,
      2: 5,
      3: 7,
      4: 9,
      5: 10,
      6: 16,
    },
  },
  fonts: {
    heading: {
      family: 'Arial, sans-serif',
    },
    body: {
      family: 'Arial, sans-serif',
    },
  },
})

export default config
