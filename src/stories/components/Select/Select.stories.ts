import Select from '../../../components/Select';

export default {
  title: 'components/Select',
  component: Select
};

const Template = ({ ...args }) => ({
  Component: Select,
  props: args
});

export const WithName = Template.bind({});
WithName.args = {
  options: {
    name: 'someName'
  }
};

export const WithSelectOptions = Template.bind({});
WithSelectOptions.args = {
  options: {
    name: 'someName'
  },
  selectOptions: [
    {
      value: '%',
      display: '%'
    },
    {
      value: '$',
      display: '$'
    }
  ]
};
