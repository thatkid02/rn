import type { Meta, StoryObj } from '@storybook/react-native-web-vite';

import { View } from 'react-native';
import { fn } from 'storybook/test';

import { StyleSheet } from 'react-native-unistyles';
import { Button } from '../components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={storyStyle.wrapper}>
        <Story />
      </View>
    ),
  ],
  tags: ['autodocs'],
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

const storyStyle = StyleSheet.create(() => ({
  wrapper: {
    flex: 1, alignItems: 'flex-start'
  },
}));

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
};
