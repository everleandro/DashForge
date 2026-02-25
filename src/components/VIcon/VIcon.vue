<template>
    <i v-if="mounted" aria-hidden="true" :class="iconClass">
        <slot>
            <svg v-if="isPath" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" class="v-icon__svg">
                <path v-for="(line, i) in paths" :key="i" v-bind="bindPathAttributes(line)"></path>
            </svg>
        </slot>
    </i>
</template>
<script lang="ts">
export default {
  name: "VIcon",
};
</script>
<script lang="ts" setup>
import type { IconPath, IconProps } from "@/types/icon";
import type { Size } from "@/types/common";
import { ComputedRef, computed, ref, useAttrs, onMounted } from "vue";

const mounted = ref(false);
const attrs = useAttrs();

const props = withDefaults(defineProps<IconProps>(), {
  viewBox: "0 0 24 24",
  size: "default",
});

// CSS variables - initialized on mount for SSR safety
const cssVars = ref({ iconClass: "icon", iconPreffix: "icon-" });

const isPath = computed(() => typeof props.icon !== "string");

const paths = computed((): Array<IconPath> => {
  if (!isPath.value) return [];
  const isSinglePath = typeof props.icon === "object" && !Array.isArray(props.icon);
  return isSinglePath ? [props.icon as IconPath] : (props.icon as Array<IconPath>);
});

const bindPathAttributes = (path: IconPath): Record<string, string> => {
  const result: Record<string, string> = { d: path.d };
  if (path.fill) {
    result.class = `${path.fill}--text`;
  }
  return result;
};

const iconClass: ComputedRef<Array<string>> = computed((): Array<string> => {
  const defaultClass = attrs.class ? `${attrs.class}` : "";
  const classes = ["v-icon", cssVars.value.iconClass, defaultClass];

  // Add size class
  const size = props.size || "default";
  classes.push(`v-icon--size-${size}`);

  // Add icon font class if not using SVG paths
  if (!isPath.value) {
    classes.push(
      `${(props.preffix || cssVars.value.iconPreffix).trim()}${(props.icon as string).trim()}`
    );
  }

  // Add color class
  if (props.color) {
    classes.push(`${props.color}--text`);
  }

  return classes;
});

onMounted(() => {
  // Initialize CSS variables from DOM
  if (typeof window !== "undefined") {
    const rootVar = window.getComputedStyle(document.documentElement);
    cssVars.value.iconClass = rootVar.getPropertyValue("--icon-class") || "icon";
    cssVars.value.iconPreffix = rootVar.getPropertyValue("--icon-prefix") || "icon-";
  }
  mounted.value = true;
});
</script>
<style lang="scss" src="./VIcon.scss"></style>
