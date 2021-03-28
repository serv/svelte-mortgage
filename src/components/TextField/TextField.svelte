<script lang="ts">
  import Input from './Input.svelte';

  export let options;
  export let prefix;
  export let label;
  export let subtext;
  export let valueType;
  export let suffix;
  prefix = prefix ? prefix : null;
  label = label ? label : null;
  subtext = subtext ? subtext : null;
  suffix = suffix ? suffix : null;
  valueType = valueType ? validateValueType(valueType) : null;

  let inputClass =
    'w-full p-1.5 transition-all focus:outline-none focus:ring focus:border-blue-300';

  if (prefix && suffix) {
    // Do not round border.
  } else if (prefix) {
    inputClass += ' rounded-r';
  } else if (suffix) {
    inputClass += ' rounded-l';
  } else {
    inputClass += ' rounded';
  }

  // currency is the only supported valueType.
  // undefined and null are acceptable values.
  function validateValueType(aValueType) {
    const VALID_VALUE_TYPES = ['currency', 'number'];

    if (aValueType === undefined || aValueType === null) {
      return aValueType;
    }

    if (VALID_VALUE_TYPES.indexOf(aValueType) < 0) {
      throw new Error('invalid valueType prop value');
    }

    return aValueType;
  }

  let presentInput = function presentInput(aInputValue) {
    const MAX_FLOAT = 1000000000;

    if (valueType === 'currency') {
      return function (currentValue, event) {
        if (event && !Number.isInteger(parseInt(event.data))) {
          return 0;
        }

        if (!currentValue) {
          return;
        }

        currentValue = Number.parseFloat(currentValue.replace(/\D/g, ''));

        if (currentValue > MAX_FLOAT) {
          return 0;
        }

        return Number.parseFloat(currentValue).toLocaleString('en-US', {
          maximumFractionDigits: 2
        });
      };
    } else if (valueType === 'number') {
    } else {
      return null;
    }
  };
</script>

<div class="text-field flex flex-col">
  {#if label}
    <label class="text-field-label leading-8" for="textFieldInput">
      {label}
    </label>
  {/if}
  <div class="text-field-input flex rounded border border-gray-300 bg-gray-200">
    {#if prefix}
      <div class="border-r px-3 pt-1.5">
        {prefix}
      </div>
    {/if}
    <Input
      options={{
        type: 'text',
        id: 'textFieldInput',
        class: inputClass,
        ...options
      }}
      present={presentInput(valueType)}
    />
    {#if suffix}
      <div class="border-l px-3 pt-1.5">
        {suffix}
      </div>
    {/if}
  </div>
  {#if subtext}
    <div class="mt-1 text-sm text-gray-600">
      {subtext}
    </div>
  {/if}
</div>
