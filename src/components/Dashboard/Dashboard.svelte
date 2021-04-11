<script lang="ts">
  import History from '../History';
  import MortgageInput from '../MortgageInput';
</script>

<div class="flex h-screen">
  <div
    class="fixed z-30 inset-y-0 left-0 w-auto transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in pr-4"
  >
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center flex-col">
        <span class="text-gray-800 dark:text-white text-2xl font-semibold">
          MortageHero
        </span>

        <div class="mb-8">
          <MortgageInput />
        </div>

        <span class="text-gray-600 text-xl mb-4">Previously Generated</span>
        <History />
      </div>
    </div>
  </div>
  <div class="flex-1 flex flex-col overflow-hidden">
    <main class="flex-1 overflow-x-hidden overflow-y-auto">
      <div class="container mx-auto px-6 py-8">
        <div
          class="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed"
        >
          Content
        </div>
      </div>
    </main>
  </div>
</div>
