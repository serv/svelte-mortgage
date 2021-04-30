import MonthlyBreakdownPieChartWrapper from '../../../../components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChartWrapper.svelte';
import MonthlyArc from '../../../../models/MonthlyArc';

export default {
  title:
    'components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChartWrapper',
  component: MonthlyBreakdownPieChartWrapper
};

const Template = ({ ...args }) => ({
  Component: MonthlyBreakdownPieChartWrapper,
  props: args
});

const arcs = [
  new MonthlyArc(
    'Principle & Interest',
    'principleInterest',
    1500,
    'rgb(255, 99, 132)'
  ),
  new MonthlyArc('Insurance', 'insurance', 200, 'rgb(54, 162, 235)'),
  new MonthlyArc('Tax', 'tax', 100, 'rgb(255, 205, 86)'),
  new MonthlyArc('HOA', 'hoa', 200, 'rgb(255, 105, 86)')
];
export const WithArcs = Template.bind({});
WithArcs.args = {
  arcs
};

export const WithText = Template.bind({});
WithText.args = {
  arcs,
  text: '$ ' + arcs.map((a) => a.amount).reduce((sum, el) => sum + el),
  subtext: 'Monthly payment'
};
