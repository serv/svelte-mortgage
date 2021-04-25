import DashboardContent from '../../../components/DashboardContent';

export default {
  title: 'components/DashboardContent',
  component: DashboardContent
};

const Template = ({ ...args }) => ({
  Component: DashboardContent,
  props: args
});

export const WithValues = Template.bind({});
WithValues.args = {
  principleInterest: 1500
};
