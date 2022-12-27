<script>
  import { createEventDispatcher } from "svelte";

  let clazz = "";
  export { clazz as class };
  export let enabled;

  const buttonClasses = `text-black switch ${clazz}`;
  const dispatch = createEventDispatcher();

  function handleOnSwitch() {
    dispatch("switch", { enabled });
  }

  $: handleOnSwitch(enabled);
</script>

<span class:enabled class={buttonClasses}>
  <slot />
  <span class="sr-only">{enabled ? "ON" : "OFF"}</span>
  <span class="slider text-xs" />
</span>

<style>
  .switch {
    --slider-margin: 4px;
    --slider-size: 26px;
    --slider-color: rgb(255, 255, 255);
    --switch-enabled-color: #fff;
    --switch-disabled-color: rgb(132, 132, 132);
    --switch-width: 60px;
    --switch-height: 34px;
    --slider-transition-duration: 0.2s;

    position: relative;
    display: inline-block;
    width: var(--switch-width);
    height: var(--switch-height);
    outline: 1px solid var(--switch-disabled-color);
    background-color: transparent;
  }

  .switch:focus {
    outline: 2px solid var(--switch-enabled-color);
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: var(--slider-transition-duration);
    transition: var(--slider-transition-duration);
  }

  .slider:before {
    content: "OFF";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--slider-size);
    width: var(--slider-size);
    left: var(--slider-margin);
    bottom: var(--slider-margin);
    background-color: var(--switch-disabled-color);
    -webkit-transition: var(--slider-transition-duration);
    transition: var(--slider-transition-duration);
  }

  .enabled .slider:before {
    content: "ON";
    background-color: var(--switch-enabled-color);
    -webkit-transform: translateX(var(--slider-size));
    -ms-transform: translateX(var(--slider-size));
    transform: translateX(var(--slider-size));
  }
</style>
