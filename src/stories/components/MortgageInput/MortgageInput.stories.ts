import MortgageInput from '../../../components/MortgageInput';

export default {
  title: 'components/MortgageInput',
  component: MortgageInput
};

const Template = ({ ...args }) => ({
  Component: MortgageInput,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
