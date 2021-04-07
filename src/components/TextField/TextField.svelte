<script lang="ts">
  import Input from './Input.svelte';
  import { uniqueId } from 'lodash-es';

  export let options;
  export let prefix;
  export let label;
  export let subtext;
  export let valueType;
  export let suffix;
  export let inputValue;
  export let maximum;
  export let minimum;
  prefix = prefix ? prefix : null;
  label = label ? label : null;
  subtext = subtext ? subtext : null;
  suffix = suffix ? suffix : null;
  valueType = valueType ? validateValueType(valueType) : null;

  maximum = maximum ? maximum : Number.MAX_VALUE;
  minimum = minimum ? minimum : Number.MIN_VALUE;

  const divId = uniqueId('textFieldInput_');

  let inputClass =
    'w-full px-3 py-2 transition-all focus:outline-none focus:ring focus:border-blue-300';

  if (prefix && suffix) {
    // Do not round border.
  } else if (prefix) {
    inputClass += ' rounded-r';
  } else if (suffix) {
    inputClass += ' rounded-l';
  } else {
    inputClass += ' rounded';
  }

  if (options && options.readOnly === true) {
    inputClass += ' bg-gray-200';
  }

  // currency is the only supported valueType.
  // undefined and null are acceptable values.
  function validateValueType(aValueType) {
    const VALID_VALUE_TYPES = ['currency', 'number', 'year'];

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
          inputValue = 0;
          return inputValue;
        }

        if (!currentValue) {
          inputValue = 0;
          return inputValue;
        }

        if (typeof currentValue === 'string') {
          currentValue = Number.parseFloat(
            currentValue.replace(/[^0-9.]/g, '')
          );
        }

        if (currentValue > MAX_FLOAT || currentValue > maximum) {
          inputValue = 0;
          return inputValue;
        }

        currentValue = Number.parseFloat(currentValue).toLocaleString('en-US', {
          maximumFractionDigits: 2
        });

        inputValue = currentValue;

        return inputValue;
      };
    } else if (valueType === 'number') {
      return function (currentValue, event) {
        if (event && event.data === '.') {
          inputValue = currentValue;
          return inputValue;
        }

        if (event && !Number.isInteger(parseInt(event.data))) {
          inputValue = 0;
          return inputValue;
        }

        if (!currentValue) {
          inputValue = 0;
          return inputValue;
        }

        if (typeof currentValue === 'string') {
          currentValue = Number.parseFloat(
            currentValue.replace(/[^0-9.]/g, '')
          );
        }

        if (currentValue > MAX_FLOAT || currentValue > maximum) {
          inputValue = 0;
          return inputValue;
        }

        if (currentValue < minimum) {
          inputValue = 0;
          return inputValue;
        }

        inputValue = currentValue;

        return inputValue;
      };
    } else if (valueType === 'year') {
      return function (currentValue, event) {
        if (event && !Number.isInteger(parseInt(event.data))) {
          inputValue = 0;
          return inputValue;
        }

        if (!currentValue) {
          inputValue = 0;
          return inputValue;
        }

        if (typeof currentValue === 'string') {
          currentValue = Number.parseFloat(
            currentValue.replace(/[^0-9.]/g, '')
          );
        }

        if (currentValue > 3000) {
          inputValue = 0;
          return inputValue;
        }

        if (currentValue > MAX_FLOAT) {
          inputValue = 0;
          return inputValue;
        }

        inputValue = currentValue;

        return inputValue;
      };
    } else {
      return function (currentValue, event) {
        inputValue = currentValue;

        return inputValue;
      };
    }
  };
</script>

<div class="text-field flex flex-col">
  {#if label}
    <label class="text-field-label leading-8" for={divId}>
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
        id: divId,
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
