<template>
  <div class="df-design-system">
    <h1 class="df-display-large">DashForge Design System</h1>
    
    <!-- Color Palette -->
    <section class="df-section">
      <h2 class="df-headline-large">Color Palette</h2>
      
      <div class="df-color-group">
        <h3 class="df-title-large">Primary Colors</h3>
        <div class="df-color-grid">
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-primary)' }">
            <div class="df-color-label">Primary</div>
            <div class="df-color-value">#6750a4</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-primary)', color: 'var(--df-color-primary)' }">
            <div class="df-color-label">On Primary</div>
            <div class="df-color-value">#ffffff</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-primary-container)' }">
            <div class="df-color-label">Primary Container</div>
            <div class="df-color-value">#eaddff</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-primary-container)' }">
            <div class="df-color-label">On Primary Container</div>
            <div class="df-color-value">#21005e</div>
          </div>
        </div>
      </div>

      <div class="df-color-group">
        <h3 class="df-title-large">Secondary Colors</h3>
        <div class="df-color-grid">
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-secondary)' }">
            <div class="df-color-label">Secondary</div>
            <div class="df-color-value">#625b71</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-secondary)', color: 'var(--df-color-secondary)' }">
            <div class="df-color-label">On Secondary</div>
            <div class="df-color-value">#ffffff</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-secondary-container)' }">
            <div class="df-color-label">Secondary Container</div>
            <div class="df-color-value">#e8def8</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-secondary-container)' }">
            <div class="df-color-label">On Secondary Container</div>
            <div class="df-color-value">#1d192b</div>
          </div>
        </div>
      </div>

      <div class="df-color-group">
        <h3 class="df-title-large">Tertiary Colors</h3>
        <div class="df-color-grid">
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-tertiary)' }">
            <div class="df-color-label">Tertiary</div>
            <div class="df-color-value">#7d5260</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-tertiary)', color: 'var(--df-color-tertiary)' }">
            <div class="df-color-label">On Tertiary</div>
            <div class="df-color-value">#ffffff</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-tertiary-container)' }">
            <div class="df-color-label">Tertiary Container</div>
            <div class="df-color-value">#ffd8e4</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-tertiary-container)' }">
            <div class="df-color-label">On Tertiary Container</div>
            <div class="df-color-value">#31111d</div>
          </div>
        </div>
      </div>

      <div class="df-color-group">
        <h3 class="df-title-large">Error Colors</h3>
        <div class="df-color-grid">
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-error)' }">
            <div class="df-color-label">Error</div>
            <div class="df-color-value">#b3261e</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-error)', color: 'var(--df-color-error)' }">
            <div class="df-color-label">On Error</div>
            <div class="df-color-value">#ffffff</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-error-container)' }">
            <div class="df-color-label">Error Container</div>
            <div class="df-color-value">#f9dedc</div>
          </div>
          <div class="df-color-box" :style="{ backgroundColor: 'var(--df-color-on-error-container)' }">
            <div class="df-color-label">On Error Container</div>
            <div class="df-color-value">#410e0b</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography -->
    <section class="df-section">
      <h2 class="df-headline-large">Typography Scale</h2>
      
      <div class="df-typography-group">
        <h3 class="df-title-large">Display</h3>
        <div class="df-typography-item">
          <div class="df-display-large">Display Large</div>
          <div class="df-typography-info">57px / 400 weight / 64px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-display-medium">Display Medium</div>
          <div class="df-typography-info">45px / 400 weight / 52px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-display-small">Display Small</div>
          <div class="df-typography-info">36px / 400 weight / 44px line height</div>
        </div>
      </div>

      <div class="df-typography-group">
        <h3 class="df-title-large">Headline</h3>
        <div class="df-typography-item">
          <div class="df-headline-large">Headline Large</div>
          <div class="df-typography-info">32px / 400 weight / 40px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-headline-medium">Headline Medium</div>
          <div class="df-typography-info">28px / 400 weight / 36px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-headline-small">Headline Small</div>
          <div class="df-typography-info">24px / 400 weight / 32px line height</div>
        </div>
      </div>

      <div class="df-typography-group">
        <h3 class="df-title-large">Title</h3>
        <div class="df-typography-item">
          <div class="df-title-large">Title Large</div>
          <div class="df-typography-info">22px / 500 weight / 28px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-title-medium">Title Medium</div>
          <div class="df-typography-info">16px / 500 weight / 24px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-title-small">Title Small</div>
          <div class="df-typography-info">14px / 500 weight / 20px line height</div>
        </div>
      </div>

      <div class="df-typography-group">
        <h3 class="df-title-large">Body</h3>
        <div class="df-typography-item">
          <div class="df-body-large">Body Large - Regular paragraph text for longer form content</div>
          <div class="df-typography-info">16px / 400 weight / 24px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-body-medium">Body Medium - Standard text for most UI elements and content</div>
          <div class="df-typography-info">14px / 400 weight / 20px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-body-small">Body Small - Small text for secondary information</div>
          <div class="df-typography-info">12px / 400 weight / 16px line height</div>
        </div>
      </div>

      <div class="df-typography-group">
        <h3 class="df-title-large">Label</h3>
        <div class="df-typography-item">
          <div class="df-label-large">Label Large</div>
          <div class="df-typography-info">14px / 500 weight / 20px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-label-medium">Label Medium</div>
          <div class="df-typography-info">12px / 500 weight / 16px line height</div>
        </div>
        <div class="df-typography-item">
          <div class="df-label-small">Label Small</div>
          <div class="df-typography-info">11px / 500 weight / 16px line height</div>
        </div>
      </div>
    </section>

    <!-- Spacing -->
    <section class="df-section">
      <h2 class="df-headline-large">Spacing System</h2>
      <div class="df-spacing-grid">
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-xs); height: 40px; background-color: var(--df-color-primary);"></div>
          <div class="df-spacing-label">XS: 4px</div>
        </div>
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-sm); height: 40px; background-color: var(--df-color-secondary);"></div>
          <div class="df-spacing-label">SM: 8px</div>
        </div>
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-md); height: 40px; background-color: var(--df-color-tertiary);"></div>
          <div class="df-spacing-label">MD: 16px</div>
        </div>
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-lg); height: 40px; background-color: var(--df-color-error);"></div>
          <div class="df-spacing-label">LG: 24px</div>
        </div>
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-xl); height: 40px; background-color: var(--df-color-primary);"></div>
          <div class="df-spacing-label">XL: 32px</div>
        </div>
        <div class="df-spacing-item">
          <div class="df-spacing-box" style="width: var(--df-spacing-2xl); height: 40px; background-color: var(--df-color-secondary);"></div>
          <div class="df-spacing-label">2XL: 48px</div>
        </div>
      </div>
    </section>

    <!-- Shapes (Border Radius) -->
    <section class="df-section">
      <h2 class="df-headline-large">Shape (Border Radius)</h2>
      <div class="df-shape-grid">
        <div class="df-shape-item" style="border-radius: var(--df-corner-none);">
          <div class="df-shape-label">None</div>
          <div class="df-shape-info">0px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-extra-small);">
          <div class="df-shape-label">XS</div>
          <div class="df-shape-info">4px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-small);">
          <div class="df-shape-label">Small</div>
          <div class="df-shape-info">8px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-medium);">
          <div class="df-shape-label">Medium</div>
          <div class="df-shape-info">12px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-large);">
          <div class="df-shape-label">Large</div>
          <div class="df-shape-info">16px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-extra-large);">
          <div class="df-shape-label">XL</div>
          <div class="df-shape-info">28px</div>
        </div>
        <div class="df-shape-item" style="border-radius: var(--df-corner-full);">
          <div class="df-shape-label">Full</div>
          <div class="df-shape-info">9999px</div>
        </div>
      </div>
    </section>

    <!-- Elevation (Shadows) -->
    <section class="df-section">
      <h2 class="df-headline-large">Elevation (Shadows)</h2>
      <div class="df-elevation-grid">
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-0);">
          <div class="df-elevation-label">Level 0</div>
          <div class="df-elevation-info">None</div>
        </div>
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-1);">
          <div class="df-elevation-label">Level 1</div>
          <div class="df-elevation-info">Raised components</div>
        </div>
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-2);">
          <div class="df-elevation-label">Level 2</div>
          <div class="df-elevation-info">Floating elements</div>
        </div>
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-3);">
          <div class="df-elevation-label">Level 3</div>
          <div class="df-elevation-info">Modals</div>
        </div>
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-4);">
          <div class="df-elevation-label">Level 4</div>
          <div class="df-elevation-info">Dropdowns</div>
        </div>
        <div class="df-elevation-item" style="box-shadow: var(--df-elevation-5);">
          <div class="df-elevation-label">Level 5</div>
          <div class="df-elevation-info">Top overlays</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component to showcase all DashForge design tokens
// Can be used in Storybook for automatic documentation
</script>

<style scoped lang="scss">
@use '../styles/_tokens' as *;

.df-design-system {
  padding: var(--df-spacing-xl);
  background-color: var(--df-color-background);
  color: var(--df-color-text);
}

.df-section {
  margin-bottom: var(--df-spacing-2xl);
}

/* ============================================================================
   COLOR PALETTE
   ============================================================================ */

.df-color-group {
  margin-bottom: var(--df-spacing-lg);

  h3 {
    margin-bottom: var(--df-spacing-md);
  }
}

.df-color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--df-spacing-md);
}

.df-color-box {
  padding: var(--df-spacing-md);
  border-radius: var(--df-corner-large);
  box-shadow: var(--df-elevation-1);
  text-align: center;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.df-color-label {
  font-size: var(--df-font-size-label-large);
  font-weight: var(--df-font-weight-medium);
  margin-bottom: var(--df-spacing-xs);
}

.df-color-value {
  font-size: var(--df-font-size-body-small);
  opacity: 0.8;
  font-family: monospace;
}

/* ============================================================================
   TYPOGRAPHY
   ============================================================================ */

.df-typography-group {
  margin-bottom: var(--df-spacing-lg);

  h3 {
    margin-bottom: var(--df-spacing-md);
  }
}

.df-typography-item {
  margin-bottom: var(--df-spacing-lg);
  padding: var(--df-spacing-md);
  border-left: 4px solid var(--df-color-primary);
}

.df-typography-info {
  font-size: var(--df-font-size-body-small);
  color: var(--df-color-text-secondary);
  margin-top: var(--df-spacing-xs);
  font-family: monospace;
}

/* ============================================================================
   SPACING
   ============================================================================ */

.df-spacing-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--df-spacing-lg);
}

.df-spacing-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--df-spacing-sm);
}

.df-spacing-box {
  border-radius: var(--df-corner-small);
}

.df-spacing-label {
  font-size: var(--df-font-size-label-medium);
  font-weight: var(--df-font-weight-medium);
}

/* ============================================================================
   SHAPES
   ============================================================================ */

.df-shape-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--df-spacing-md);
}

.df-shape-item {
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--df-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: var(--df-spacing-md);
  box-shadow: var(--df-elevation-1);
  color: var(--df-color-on-primary);
}

.df-shape-label {
  font-size: var(--df-font-size-label-medium);
  font-weight: var(--df-font-weight-medium);
  margin-bottom: var(--df-spacing-xs);
}

.df-shape-info {
  font-size: var(--df-font-size-body-small);
  opacity: 0.8;
  font-family: monospace;
}

/* ============================================================================
   ELEVATION
   ============================================================================ */

.df-elevation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--df-spacing-md);
}

.df-elevation-item {
  padding: var(--df-spacing-lg);
  border-radius: var(--df-corner-large);
  background-color: var(--df-color-surface);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  text-align: center;
}

.df-elevation-label {
  font-size: var(--df-font-size-label-large);
  font-weight: var(--df-font-weight-medium);
  margin-bottom: var(--df-spacing-xs);
}

.df-elevation-info {
  font-size: var(--df-font-size-body-small);
  color: var(--df-color-text-secondary);
}
</style>
