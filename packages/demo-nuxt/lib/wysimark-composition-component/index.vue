<template>
  <!-- 
    This is the target element for React to render into.

    Give the div a `ref` which makes it accessible under `this.$refs` in our
    `defineComponent` object method properties.

    We add v-bind="$attrs" to get the leftover props to get added to the
    div. See the comment for `inheritAttrs` for details.
  -->
  <div ref="reactContainer" v-bind="$attrs"></div>
</template>

<script lang="ts">
/**
 * COMPOSITION API:
 *
 * This Vue Component is built using the composition API.
 *
 * Vue components can be built using either:
 *
 * - Options API (Vue 2)
 * - Composition API (Vue 3)
 *
 * Vue 3 can use either the Options API or the Composition API.
 * Vue 2 can use the Options API and, with a plugin, can use the Composition API.
 */
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue"
/**
 * NOTE:
 *
 * If this `import` is failing, it's because the Vue3 component needs to be
 * built. Go to the root directory and run `yarn build` to build all the
 * components from scratch. Of if you have already run `yarn build:standalone`
 * then you can also just run `yarn build:vue3`.
 */
/**
 * IMPORTANT:
 *
 * This MUST be `../../../` in order to work with the build. This is because
 * we copy this component in order to create the build and the relative path
 * needs to resolve to the same component. If we move this into a subdirectory,
 * it's pointing to the wrong place.
 */
import { createWysimark } from "@wysimark/standalone"
// import { createWysimark } from '../../../wysimark-editor/.dist/standalone/index';
// import { createWysimark } from '../../../../wysimark-editor/editor/standalone';

/**
 * `defineComponent` helps to add TypeScript typing to a Vue component.
 */
export default defineComponent({
  /**
   * This is a friendly name but is not used to determine the name of the tag.
   * That is defined in the parent Component in its `components` property.
   */

  name: "WysimarkComponent",

  /**
   * Disable attribute inheritance which fixes an issue.
   *
   * By default, the <template> will inherit the attributes that aren't
   * specified in `props`. This is actually what we want. For some reason on
   * HabitStack, this works but not in production so it may be because
   * something is causing inheritAttrs to be false. We add the attributes
   * back in by using v-bind="$attrs" as specified here:
   *
   * https://v3.vuejs.org/guide/component-attrs.html#attribute-inheritance
   *
   * Still, we want to disable inheritAttrs here in case there is some
   * weird interaction.
   */

  inheritAttrs: false,

  /**
   * Specify the props to pass in. They are available in the `setup` method as
   * the first argument or as part of `this.$props`
   */

  props: {
    modelValue: { type: String, required: true },
    minHeight: { type: Number, required: false },
    maxHeight: { type: Number, required: false },
    appName: { type: String, required: true },
    documentId: { type: String, required: true },
    apiUrl: { type: String, required: true },
    apiContext: { type: Object, required: false },
  },

  /**
   * Events that a component can emits to its parents.
   *
   * https://v3.vuejs.org/guide/migration/emits-option.html
   */
  emits: ["update:modelValue"],

  /**
   * In the Composition API, almost everything is done in `setup` and behaves
   * somewhat similar to React function components.
   *
   * Inside setup, we can call methods like `onMounted` and `ref` which in
   * React would be hooks like `useEffect` and `useRef`.
   *
   * In Vue, they don't have a `use` naming convention.
   */
  setup(props, { emit }) {
    /**
     * HINT:
     *
     * Whatever is returned from the `setup` method becomes part of `this`.
     * For exmaple, `this` can be accessed from the `methods` object defined
     * in the component.
     */

    const reactContainerRef = ref<null | HTMLDivElement>(null)
    let wysimark: ReturnType<typeof createWysimark>

    /**
     * We mount the `Wysimark` React component into the DOM after Vue has
     * mounted the `<template>`. Before mount, the `reactContainerRef` would
     * not have a value.
     *
     * For TypeScript (and to be sure) we check that `reactContainerRef` does
     * have a value before we continue.
     */
    onMounted(() => {
      if (reactContainerRef.value == null) {
        throw new Error(
          `Could not find div with ref "reactContainer". This shouldn't happen.`
        )
      }
      wysimark = createWysimark(reactContainerRef.value, {
        initialMarkdown: props.modelValue,
        minHeight: props.minHeight,
        maxHeight: props.maxHeight,
        appName: props.appName,
        documentId: props.documentId,
        apiUrl: props.apiUrl,
        apiContext: props.apiContext as Parameters<
          typeof createWysimark
        >[1]["apiContext"],
        onChange: (event) => {
          const markdown = event.editor.getMarkdown()
          emit("update:modelValue", markdown)
        },
      })
    })

    /**
     * Before Vue can unmount this component, we want to make sure to unmount
     * the Wysimark component.
     */
    onBeforeUnmount(() => {
      wysimark.unmount()
    })

    return {
      reactContainer: reactContainerRef,
      getMarkdown() {
        return wysimark.getMarkdown()
      },
    }
  },
})
</script>
