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
  value: 'SomeValue',
  present: (v) => v.toUpperCase()
};
