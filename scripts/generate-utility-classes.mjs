import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ============================================================================
// PARSEAR TOKENS.TS (sin ejecutar TypeScript)
// ============================================================================

// ============================================================================
// PARSEAR TOKENS MODULARES (sin ejecutar TypeScript)
// ============================================================================

const colorsPath = path.join(__dirname, '../src/theme/tokens/colors.ts')
const spacingPath = path.join(__dirname, '../src/theme/tokens/spacing.ts')
const typographyPath = path.join(__dirname, '../src/theme/tokens/typography.ts')
const shapePath = path.join(__dirname, '../src/theme/tokens/shape.ts')
const elevationPath = path.join(__dirname, '../src/theme/tokens/elevation.ts')
const buttonPath = path.join(__dirname, '../src/theme/tokens/components/button.ts')
const iconPath = path.join(__dirname, '../src/theme/tokens/components/icon.ts')
const tokensIndexPath = path.join(__dirname, '../src/theme/tokens/index.ts')

const colorsContent = fs.readFileSync(colorsPath, 'utf-8')
const spacingContent = fs.readFileSync(spacingPath, 'utf-8')
const typographyContent = fs.readFileSync(typographyPath, 'utf-8')
const shapeContent = fs.readFileSync(shapePath, 'utf-8')
const elevationContent = fs.readFileSync(elevationPath, 'utf-8')
const buttonContent = fs.readFileSync(buttonPath, 'utf-8')
const iconContent = fs.readFileSync(iconPath, 'utf-8')
const tokensIndexContent = fs.readFileSync(tokensIndexPath, 'utf-8')

// Parser para extraer tokens del archivo TypeScript
function parseTokensFromTS(
  colorsContent,
  spacingContent,
  typographyContent,
  shapeContent,
  elevationContent,
  buttonContent,
  iconContent,
  tokensIndexContent
) {
  const result = {
    light: {},
    dark: {},
    spacing: {},
    typography: {},
    shape: {},
    elevation: {},
    btn: { states: {}, fontSizes: {}, height: {} },
    icon: { fontSizes: {} },
    fontFamily: {}
  }

  // Función auxiliar para extraer contenido entre llaves balanceadas
  function extractBracedContent(str, key) {
    const keyIdx = str.indexOf(`${key}:`)
    if (keyIdx === -1) return ''
    const startBrace = str.indexOf('{', keyIdx)
    if (startBrace === -1) return ''
    let braceCount = 0
    let endBrace = startBrace
    for (let i = startBrace; i < str.length; i++) {
      if (str[i] === '{') braceCount++
      if (str[i] === '}') braceCount--
      if (braceCount === 0) {
        endBrace = i
        break
      }
    }
    return str.substring(startBrace + 1, endBrace)
  }

  function extractTokens(block) {
    const tokens = {}
    // Mejorado para capturar valores con comas (como box-shadows)
    // Busca: "key": "value" o key: value o key: number
    const regex = /['"]?([a-zA-Z\-0-9]+)['"]?\s*:\s*(?:(['"])([^\2]*?)\2|([^,\n}]+))/g
    let match
    while ((match = regex.exec(block)) !== null) {
      const key = match[1]
      // El valor puede estar en match[3] (quoted) o match[4] (unquoted)
      const value = (match[3] || match[4] || '').trim()
      if (value) {
        tokens[key] = value
      }
    }
    return tokens
  }

  function extractNestedTokens(block) {
    const tokens = {}
    // Match nested objects like 'display-large': { fontSize: '57px', ... }
    const nestedRegex = /['"]([^'"]+)['"]\s*:\s*\{([^}]+)\}/g
    let match
    while ((match = nestedRegex.exec(block)) !== null) {
      const key = match[1]
      const innerBlock = match[2]
      tokens[key] = extractTokens(innerBlock)
    }
    return tokens
  }

  // Parse colors.ts - handle createColorPalette() wrapper
  const lightMatch = colorsContent.match(/lightColors[\s\S]*?createColorPalette\(\{([\s\S]*?)\}\)/m)
  const darkMatch = colorsContent.match(/darkColors[\s\S]*?createColorPalette\(\{([\s\S]*?)\}\)/m)
  if (lightMatch) result.light = extractTokens(lightMatch[1])
  if (darkMatch) result.dark = extractTokens(darkMatch[1])

  // Parse spacing.ts
  const spacingMatch = spacingContent.match(/spacing[\s\S]*?=\s*\{([\s\S]*?)\}\s+as const/m)
  if (spacingMatch) result.spacing = extractTokens(spacingMatch[1])

  // Parse typography.ts
  const typographyMatch = typographyContent.match(/typography[\s\S]*?=\s*\{([\s\S]*?)\}\s+as const/m)
  if (typographyMatch) result.typography = extractNestedTokens(typographyMatch[1])

  // Parse shape.ts
  const shapeMatch = shapeContent.match(/shape[\s\S]*?=\s*\{([\s\S]*?)\}\s+as const/m)
  if (shapeMatch) result.shape = extractTokens(shapeMatch[1])

  // Parse elevation.ts
  const elevationMatch = elevationContent.match(/elevation[\s\S]*?=\s*\{([\s\S]*?)\}\s+as const/m)
  if (elevationMatch) result.elevation = extractTokens(elevationMatch[1])

  // Parse button.ts for btn
  const btnMatch = buttonContent.match(/btn[\s\S]*?=\s*\{([\s\S]*?)\n\}/m)
  if (btnMatch) {
    const btnContent = btnMatch[1]
    const statesContent = extractBracedContent(btnContent, 'states')
    const fontSizesContent = extractBracedContent(btnContent, 'fontSizes')
    const heightContent = extractBracedContent(btnContent, 'height')
    if (statesContent) result.btn.states = extractTokens(statesContent)
    if (fontSizesContent) result.btn.fontSizes = extractTokens(fontSizesContent)
    if (heightContent) result.btn.height = extractTokens(heightContent)
    
    // Extract simple properties manually
    const borderRadiusMatch = btnContent.match(/borderRadius:\s*["']([^"']+)["']/)
    const roundedBorderRadiusMatch = btnContent.match(/roundedBorderRadius:\s*["']([^"']+)["']/)
    const borderStyleMatch = btnContent.match(/borderStyle:\s*["']([^"']+)["']/)
    const borderWidthMatch = btnContent.match(/borderWidth:\s*["']([^"']+)["']/)
    const fontWeightMatch = btnContent.match(/fontWeight:\s*(\d+)/)
    const letterSpacingMatch = btnContent.match(/letterSpacing:\s*["']([^"']+)["']/)
    const textTransformMatch = btnContent.match(/textTransform:\s*["']([^"']+)["']/)
    const transitionDurationMatch = btnContent.match(/transitionDuration:\s*["']([^"']+)["']/)
    
    if (borderRadiusMatch) result.btn.borderRadius = borderRadiusMatch[1]
    if (roundedBorderRadiusMatch) result.btn.roundedBorderRadius = roundedBorderRadiusMatch[1]
    if (borderStyleMatch) result.btn.borderStyle = borderStyleMatch[1]
    if (borderWidthMatch) result.btn.borderWidth = borderWidthMatch[1]
    if (fontWeightMatch) result.btn.fontWeight = fontWeightMatch[1]
    if (letterSpacingMatch) result.btn.letterSpacing = letterSpacingMatch[1]
    if (textTransformMatch) result.btn.textTransform = textTransformMatch[1]
    if (transitionDurationMatch) result.btn.transitionDuration = transitionDurationMatch[1]
  }

  const iconMatch = iconContent.match(/icon[\s\S]*?=\s*\{([\s\S]*?)\n\}/m)
  if (iconMatch) {
    const iconContent = iconMatch[1]
    const fontSizesContent = extractBracedContent(iconContent, 'fontSizes')
    if (fontSizesContent) result.icon.fontSizes = extractTokens(fontSizesContent)
  }

  const fontFamilyMatch = tokensIndexContent.match(/fontFamily:\s*\{[\s\S]*?body:\s*(['"])([^\1]+?)\1[\s\S]*?\}/)
  if (fontFamilyMatch) {
    result.fontFamily.body = fontFamilyMatch[2]
  }

  return result
}

const tokens = parseTokensFromTS(
  colorsContent,
  spacingContent,
  typographyContent,
  shapeContent,
  elevationContent,
  buttonContent,
  iconContent,
  tokensIndexContent
)

console.log(`✓ Parsed tokens:`)
console.log(`  - ${Object.keys(tokens.light).length} light colors`)
console.log(`  - ${Object.keys(tokens.dark).length} dark colors`)
console.log(`  - ${Object.keys(tokens.spacing).length} spacing values`)
console.log(`  - ${Object.keys(tokens.typography).length} typography styles`)
console.log(`  - ${Object.keys(tokens.shape).length} shape values`)
console.log(`  - ${Object.keys(tokens.elevation).length} elevation levels`)
console.log(`  - ${Object.keys(tokens.btn.states).length} button states`)
console.log(`  - ${Object.keys(tokens.btn.fontSizes).length} button font sizes`)
console.log(`  - ${Object.keys(tokens.btn.height).length} button heights`)
console.log(`  - ${Object.keys(tokens.icon.fontSizes).length} icon font sizes`)

// ============================================================================
// GENERAR ARCHIVOS SCSS
// ============================================================================

function generateThemeScss(tokens) {
  let scss = `// Auto-generated from tokens.ts - DO NOT EDIT MANUALLY\n`
  scss += `// Generated: ${new Date().toISOString()}\n\n`

  scss += `:root {\n`
  scss += `  /* ========================================================================\n`
  scss += `     COLORS (LIGHT)\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.light).forEach(([key, value]) => {
    scss += `  --df-color-${key}: ${value};\n`
  })

  scss += `\n  /* ========================================================================\n`
  scss += `     SPACING\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    scss += `  --df-spacing-${key}: ${value};\n`
  })

  scss += `\n  /* ========================================================================\n`
  scss += `     TYPOGRAPHY - SIZES\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.typography).forEach(([key, style]) => {
    if (style && typeof style === 'object' && style.fontSize) {
      scss += `  --df-font-size-${key}: ${style.fontSize};\n`
    }
  })

  scss += `\n  /* ========================================================================\n`
  scss += `     TYPOGRAPHY - TOKEN DETAIL (SIZE, WEIGHT, LINE-HEIGHT, LETTER-SPACING)\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.typography).forEach(([key, style]) => {
    if (style && typeof style === 'object') {
      scss += `  --df-font-${key}-font-size: ${style.fontSize};\n`
      scss += `  --df-font-${key}-font-weight: ${style.fontWeight};\n`
      scss += `  --df-font-${key}-line-height: ${style.lineHeight};\n`
      scss += `  --df-font-${key}-letter-spacing: ${style.letterSpacing};\n`
    }
  })

  scss += `\n  /* ========================================================================\n`
  scss += `     TYPOGRAPHY - WEIGHTS & FAMILY\n`
  scss += `     ======================================================================== */\n`
  if (tokens.typography['body-large']) {
    scss += `  --df-font-weight-regular: ${tokens.typography['body-large'].fontWeight};\n`
  }
  if (tokens.typography['title-medium']) {
    scss += `  --df-font-weight-medium: ${tokens.typography['title-medium'].fontWeight};\n`
  }
  if (tokens.fontFamily.body) {
    scss += `  --df-font-family: ${tokens.fontFamily.body};\n`
  }

  scss += `\n  /* ========================================================================\n`
  scss += `     SHAPE (Border Radius)\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.shape).forEach(([key, value]) => {
    scss += `  --df-${key}: ${value};\n`
  })

  scss += `\n  /* ========================================================================\n`
  scss += `     ELEVATION (Shadows)\n`
  scss += `     ======================================================================== */\n`
  Object.entries(tokens.elevation).forEach(([key, value]) => {
    scss += `  --df-elevation-${key.replace('level-', '')}: ${value};\n`
  })
  scss += `}\n\n`

  scss += `html,\nbody,\n#app {\n  height: 100%;\n}\n\n`
  scss += `body {\n`
  scss += `  background: var(--df-color-background);\n`
  scss += `  color: var(--df-color-text);\n`
  scss += `  font-family: var(--df-font-family);\n`
  scss += `  font-size: var(--df-font-body-medium-font-size);\n`
  scss += `  font-weight: var(--df-font-body-medium-font-weight);\n`
  scss += `  line-height: var(--df-font-body-medium-line-height);\n`
  scss += `  letter-spacing: var(--df-font-body-medium-letter-spacing);\n`
  scss += `  -webkit-font-smoothing: antialiased;\n`
  scss += `  -moz-osx-font-smoothing: grayscale;\n`
  scss += `}\n\n`

  scss += `/* ============================================================================\n`
  scss += `   DARK THEME OVERRIDES\n`
  scss += `   ============================================================================ */\n\n`
  scss += `@media (prefers-color-scheme: dark) {\n`
  scss += `  :root {\n`
  Object.entries(tokens.dark).forEach(([key, value]) => {
    scss += `    --df-color-${key}: ${value};\n`
  })
  scss += `  }\n`
  scss += `}\n`

  return scss
}

function generateButtonVariablesScss(tokens) {
  let scss = `// Auto-generated from tokens.ts - DO NOT EDIT MANUALLY\n`
  scss += `// Generated: ${new Date().toISOString()}\n\n`
  scss += `// Button CSS Variables Definition File\n`
  scss += `// This file contains all CSS variables used by the VButton component\n`
  scss += `// Reference documentation: src/components/VButton/VButton.scss\n\n`
  scss += `:root {\n`
  scss += `  /* ========================================================================\n`
  scss += `         BUTTON STATES\n`
  scss += `         ======================================================================== */\n`
  Object.entries(tokens.btn.states).forEach(([key, value]) => {
    scss += `  --df-btn-state-${key}: ${value};\n`
  })

  scss += `\n  /* ========================================================================\n`
  scss += `         BUTTON SIZES & HEIGHTS\n`
  scss += `         ======================================================================== */\n`
  Object.entries(tokens.btn.fontSizes).forEach(([key, value]) => {
    scss += `  --df-btn-font-size-${key}: ${value};\n`
  })
  Object.entries(tokens.btn.height).forEach(([key, value]) => {
    scss += `  --df-btn-height-${key}: ${value};\n`
  })

  scss += `\n  /* ========================================================================\n`
  scss += `      FAB & STACKED (Defaults)\n`
  scss += `      ======================================================================== */\n`
  scss += `  --df-fab-font-size-x-small: 1.25rem;\n`
  scss += `  --df-fab-font-size-small: 1.25rem;\n`
  scss += `  --df-fab-font-size-default: 1.5rem;\n`
  scss += `  --df-fab-font-size-large: 0.714rem;\n`
  scss += `  --df-fab-font-size-x-large: 2rem;\n`
  scss += `  --df-fab-height-x-small: 2em;\n`
  scss += `  --df-fab-height-small: 2.5em;\n`
  scss += `  --df-fab-height-default: 3.5em;\n`
  scss += `  --df-fab-height-large: 4em;\n`
  scss += `  --df-fab-height-x-large: 4.5em;\n`
  scss += `  --df-stacked-height-x-small: 2em;\n`
  scss += `  --df-stacked-height-small: 2.5em;\n`
  scss += `  --df-stacked-height-default: 4.5em;\n`
  scss += `  --df-stacked-height-large: 5.5em;\n`
  scss += `  --df-stacked-height-x-large: 8em;\n`

  scss += `\n  /* ========================================================================\n`
  scss += `      BUTTON STYLES\n`
  scss += `      ======================================================================== */\n`
  scss += `  --df-btn-border-radius: ${tokens.btn.borderRadius};\n`
  scss += `  --df-btn-rounded-border-radius: ${tokens.btn.roundedBorderRadius};\n`
  scss += `  --df-btn-border-style: ${tokens.btn.borderStyle};\n`
  scss += `  --df-btn-border-width: ${tokens.btn.borderWidth};\n`
  scss += `  --df-btn-font-weight: ${tokens.btn.fontWeight};\n`
  scss += `  --df-btn-letter-spacing: ${tokens.btn.letterSpacing};\n`
  scss += `  --df-btn-text-transform: ${tokens.btn.textTransform};\n`
  scss += `  --df-btn-transition-duration: ${tokens.btn.transitionDuration};\n`
  scss += `  --df-btn-shadow: 0 3px 1px -2px rgb(0, 0, 0, 0.2),\n`
  scss += `  0 2px 2px 0 rgb(0, 0, 0, 0.14),\n`
  scss += `  0 1px 5px 0 rgb(0, 0, 0, 0.12);\n`
  scss += `  --df-btn-icon-spacing: 0.5rem;\n`
  scss += `}\n`
  return scss
}

function generateIconVariablesScss(tokens) {
  let scss = `// Auto-generated from tokens.ts - DO NOT EDIT MANUALLY\n`
  scss += `// Generated: ${new Date().toISOString()}\n\n`
  scss += `// Icon CSS Variables Definition File\n`
  scss += `// This file contains all CSS variables used by the VIcon component\n`
  scss += `// Material Design 3 Standard: default size = 24px (1.5rem)\n`
  scss += `// Reference documentation: src/components/VIcon/VIcon.scss\n\n`
  scss += `:root {\n`
  scss += `  /* ========================================================================\n`
  scss += `         ICON SIZES\n`
  scss += `         ======================================================================== */\n`
  Object.entries(tokens.icon.fontSizes).forEach(([key, value]) => {
    scss += `  --df-icon-font-size-${key}: ${value};\n`
  })
  scss += `}\n`
  return scss
}

function generateUtilityClasses(theme) {
  let scss = `// Generated utility classes for colors\n`
  scss += `// Auto-generated from tokens.ts - DO NOT EDIT MANUALLY\n\n`

  Object.entries(theme).forEach(([key, value]) => {
    scss += `.bg-${key} { background-color: var(--df-color-${key}, ${value}); }\n`
    scss += `.text-${key} { color: var(--df-color-${key}, ${value}); }\n`
    scss += `.border-${key} { border-color: var(--df-color-${key}, ${value}); }\n\n`
  })

  return scss
}

// ============================================================================
// CREAR DIRECTORIOS Y ESCRIBIR ARCHIVOS
// ============================================================================

const utilDir = path.join(__dirname, '../src/styles/utilities')
const componentsDir = path.join(__dirname, '../src/styles/components')

// Crear directorios si no existen
;[utilDir, componentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
})

// Generar archivos SCSS
const lightUtilScss = generateUtilityClasses(tokens.light)
const btnVariablesScss = generateButtonVariablesScss(tokens)
const iconVariablesScss = generateIconVariablesScss(tokens)
const themeScss = generateThemeScss(tokens)

// Escribir archivos
fs.writeFileSync(path.join(utilDir, 'colors.scss'), lightUtilScss)
fs.writeFileSync(path.join(componentsDir, '_btn-variables.scss'), btnVariablesScss)
fs.writeFileSync(path.join(componentsDir, '_icon-variables.scss'), iconVariablesScss)
fs.writeFileSync(path.join(__dirname, '../src/styles/theme.scss'), themeScss)

console.log('\n✅ Generated from tokens.ts:')
console.log(`   - ${utilDir}/colors.scss (utility classes)`)
console.log(`   - ${componentsDir}/_btn-variables.scss (button CSS variables)`)
console.log(`   - ${componentsDir}/_icon-variables.scss (icon CSS variables)`)
console.log(`   - ${path.join(__dirname, '../src/styles/theme.scss')} (theme entry)`)
console.log(`\nTotal files: 4`)
console.log(`Total colors: ${Object.keys(tokens.light).length}`)


