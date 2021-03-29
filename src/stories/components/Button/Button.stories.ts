import Button from '../../../components/Button';

export default {
  title: 'components/Button',
  component: Button
};

const Template = ({ ...args }) => ({
  Component: Button,
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
  content: 'Sign Up'
};

export const WithColor = Template.bind({});
WithColor.args = {
  options: {
    name: 'someName'
  },
  content: 'Sign Up',
  color: 'red'
};

export const WithIsDiv = Template.bind({});
WithIsDiv.args = {
  options: {
    name: 'someName'
  },
  content: 'Sign Up',
  color: 'red',
  isDiv: true
};
