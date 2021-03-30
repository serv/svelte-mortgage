import YearTextField from '../../../components/YearTextField';

export default {
  title: 'components/YearTextField',
  component: YearTextField
};

const Template = ({ ...args }) => ({
  Component: YearTextField,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
