import Dashboard from '../../../components/Dashboard';

export default {
  title: 'components/Dashboard',
  component: Dashboard
};

const Template = ({ ...args }) => ({
  Component: Dashboard,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
