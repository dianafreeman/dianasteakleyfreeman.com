<script>
  export let href;
</script>
<!-- outline-0 underline underline-offset-4 text-neutral-300 hover:text-white hover:bg-black focus:text-white focus:bg-black active:text-white active:bg-black focus:outline-white py-3 px-6 -->
<a href={href} class="inline-flex relative p-6 text-center magic-border mx-3">
  <!-- <svg class="svg absolute" xmlns="http://www.w3.org/2000/svg">
    <rect class="rect" />
  </svg> -->
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    flex-grow: 1;
    cursor: pointer;
    position: relative;
  }

  .magic-border {
    --magic-border-width: 2px;
    --magic-border-color: white;
    --magic-border-duration: 0.5s;
  }
  .magic-border::before {
    content: "";
    position: absolute;
    width: calc(100% + var(--magic-border-width) * 2);
    height: calc(100% + var(--magic-border-width) * 2);
    top: calc(var(--magic-border-width) / -1);
    left: calc(var(--magic-border-width) / -1);
    background: linear-gradient(to right, var(--magic-border-color) 0%, var(--magic-border-color) 45%),
      linear-gradient(to top, var(--magic-border-color) 50%, transparent 50%),
      linear-gradient(to top, var(--magic-border-color) 50%, transparent 50%),
      linear-gradient(to left, var(--magic-border-color) 0%, var(--magic-border-color) 100%),
      linear-gradient(to right, var(--magic-border-color) 0%, var(--magic-border-color) 100%);
    background-size: 50% var(--magic-border-width), var(--magic-border-width) 200%,
      var(--magic-border-width) 200%, 0% var(--magic-border-width), 0% var(--magic-border-width);
    background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
    background-repeat: no-repeat, no-repeat;
    transition: transform var(--magic-border-duration) ease-in-out,
      background-position var(--magic-border-duration) ease-in-out,
      background-size var(--magic-border-duration) ease-in-out;
    transform: rotate(calc(180deg * 0));
    transition-delay: var(--magic-border-duration) * 2, var(--magic-border-duration), 0s;
  }

  .magic-border:hover::before {
    background-size: 200% var(--magic-border-width), var(--magic-border-width) 400%, var(--magic-border-width) 400%, 55% var(--magic-border-width), 55% var(--magic-border-width);
    background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
    transform: rotate(calc(180deg * 0));
    transition-delay: 0s, var(--magic-border-duration), var(--magic-border-duration) * 2;
  }
</style>
