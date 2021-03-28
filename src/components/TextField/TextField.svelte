<script lang='ts'>
  import Input from './Input.svelte';

  export let options;
  export let prefix;
  export let label;
  export let subtext;
  export let valueType;
  prefix = prefix ? prefix : null;
  label = label ? label : null;
  subtext = subtext ? subtext : null;
  valueType = valueType ? validateValueType(valueType) : null;

  const defaultInputClass = "w-full p-1.5 transition-all focus:outline-none focus:ring focus:border-blue-300";
  const inputClass = prefix ? defaultInputClass + ' rounded-r' : defaultInputClass + ' rounded';

  let inputValue;

  // currency is the only supported valueType.
  // undefined and null are acceptable values.
  function validateValueType(aValueType) {
    if (aValueType === undefined || aValueType === null) {
      return aValueType;
    }

    if (aValueType !== 'currency') {
      throw new Error('invalid valueType prop value');
    }

    return aValueType;
  }

  let presentInput = function presentInput(aInputValue) {
    const MAX_FLOAT = 1000000000;

    if (valueType === 'currency') {
      return function(currentValue, event) {
        if (event && !Number.isInteger(parseInt(event.data))) {
          return 0;
        }

        if (!currentValue) {
          return;
        }

        currentValue = Number.parseFloat(currentValue.replace(/\D/g,''));

        if (currentValue > MAX_FLOAT) {
          return 0;
        }

        return Number.parseFloat(currentValue).toLocaleString('en-US', { maximumFractionDigits: 2 })
      }
    } else {
      return null;
    }
  }

  function validate(aInputValue, aInputType) {
    if (aInputType === 'currency') {
      if (isNaN(aInputValue)) {
        return ['The input value is invalid current value'];
      } else {
        return [];
      }
    }
  }
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
    <Input options={{ type: 'text', id: 'textFieldInput', class: inputClass, ...options}}
      present={presentInput(valueType)} />
  </div>
  {#if subtext}
    <div class='mt-1 text-sm text-gray-600'>
      {subtext}
    </div>
  {/if}
</div>
