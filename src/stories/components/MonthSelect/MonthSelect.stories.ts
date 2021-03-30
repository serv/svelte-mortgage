import MonthSelect from '../../../components/MonthSelect';

export default {
  title: 'components/MonthSelect',
  component: MonthSelect
};

const Template = ({ ...args }) => ({
  Component: MonthSelect,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
