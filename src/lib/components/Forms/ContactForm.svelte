<script>
</script>

<form class="w-full max-w-lg">
  <div class="-mx-3 mb-6 flex flex-wrap">
    <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
      <label
        class="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
        for="grid-first-name">
        First Name
      </label>
      <input
        class="bg-gray-200 text-gray-700 mb-3 block w-full appearance-none rounded border border-red-500 py-3 px-4 leading-tight focus:bg-white focus:outline-none"
        id="grid-first-name"
        type="text"
        placeholder="Jane" />
      <p class="text-xs italic text-red-500">Please fill out this field.</p>
    </div>
    <div class="w-full px-3 md:w-1/2">
      <label
        class="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
        for="grid-last-name">
        Last Name
      </label>
      <input
        class="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
        id="grid-last-name"
        type="text"
        placeholder="Doe" />
    </div>
  </div>
  <div class="-mx-3 mb-6 flex flex-wrap">
    <div class="w-full px-3">
      <label
        class="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
        for="grid-password">
        E-mail
      </label>
      <input
        class="bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
        id="email"
        type="email" />
      <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
    </div>
  </div>
  <div class="-mx-3 mb-6 flex flex-wrap">
    <div class="w-full px-3">
      <label
        class="text-gray-700 mb-2 block text-xs font-bold uppercase tracking-wide"
        for="grid-password">
        Message
      </label>
      <textarea
        class=" no-resize bg-gray-200 text-gray-700 border-gray-200 focus:border-gray-500 mb-3 block h-48 w-full resize-none appearance-none rounded border py-3 px-4 leading-tight focus:bg-white focus:outline-none"
        id="message" />
      <p class="text-gray-600 text-xs italic">
        Re-size can be disabled by set by resize-none / resize-y / resize-x /
        resize
      </p>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button
        class="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
        type="button">
        Send
      </button>
    </div>
    <div class="md:w-2/3" />
  </div>
</form>
