import Input from '../../../components/TextField/Input.svelte';

export default {
  title: 'components/TextField/Input',
  component: Input
};

const Template = ({ ...args }) => ({
  Component: Input,
  props: args
});

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'SomeValue'
};

export const WithPresent = Template.bind({});
WithPresent.args = {
  value: 'DeepValue',
  present: (v) => v.toUpperCase()
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  value: 'DeepValue',
  present: (v) => v.toUpperCase(),
  options: {
    type: 'text',
    id: 'textFieldInput',
    class: 'border border-red-300 rounded'
  }
};
