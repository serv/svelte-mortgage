import ColorLegend from '../../../../components/DashboardContent/MonthlyLevel/ColorLegend.svelte';

export default {
  title: 'components/DashboardContent/MonthlyLevel/ColorLegend',
  component: ColorLegend
};

const Template = ({ ...args }) => ({
  Component: ColorLegend,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};

export const WithColor = Template.bind({});
WithColor.args = {
  color: 'rgb(131, 34, 23)'
};
