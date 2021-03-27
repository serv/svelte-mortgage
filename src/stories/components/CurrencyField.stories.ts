import CurrencyField from '../../components/CurrencyField';

export default {
  title: 'components/CurrencyField',
  component: CurrencyField
};

const Template = ({ ...args }) => ({
  Component: CurrencyField,
  props: args
});

export const WithName = Template.bind({});
WithName.args = {
  options: {
    name: 'someName'
  }
};
