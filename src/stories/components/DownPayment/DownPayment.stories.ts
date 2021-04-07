import DownPayment from '../../../components/DownPayment';

export default {
  title: 'components/DownPayment',
  component: DownPayment
};

const Template = ({ ...args }) => ({
  Component: DownPayment,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
