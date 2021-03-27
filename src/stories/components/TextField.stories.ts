import TextField from '../../components/TextField';

export default {
  title: 'components/TextField',
  component: TextField
};

const Template = ({ ...args }) => ({
  Component: TextField,
  props: args
});

export const WithName = Template.bind({});
WithName.args = {
  options: {
    name: 'someName'
  }
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  options: {
    name: 'with-prefix'
  },
  prefix: '$'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  options: {
    name: 'with-label'
  },
  label: 'Currency'
};

export const WithSubtext = Template.bind({});
WithSubtext.args = {
  options: {
    name: 'with-subtext'
  },
  prefix: '$',
  label: 'Currency',
  subtext: 'This is the total mortgage value'
};

export const WithValueType = Template.bind({});
WithValueType.args = {
  options: {
    name: 'with-value-type'
  },
  prefix: '$',
  label: 'Currency',
  subtext: 'This is the total mortgage value',
  valueType: 'currency'
};
