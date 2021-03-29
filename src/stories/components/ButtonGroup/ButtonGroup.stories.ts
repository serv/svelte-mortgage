import ButtonGroup from '../../../components/ButtonGroup';

export default {
  title: 'components/ButtonGroup',
  component: ButtonGroup
};

const Template = ({ ...args }) => ({
  Component: ButtonGroup,
  props: args
});

export const WithName = Template.bind({});
WithName.args = {
  options: {
    name: 'someName'
  }
};

export const WithContent = Template.bind({});
WithContent.args = {
  options: {
    name: 'someName'
  },
  content: ['First', 'Second', 'Third']
};

export const WithColor = Template.bind({});
WithColor.args = {
  options: {
    name: 'someName'
  },
  content: ['First', 'Second', 'Third'],
  color: 'yellow'
};
