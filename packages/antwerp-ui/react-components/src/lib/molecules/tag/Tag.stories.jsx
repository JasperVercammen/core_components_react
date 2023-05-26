import Tag from './Tag';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'React/Molecules/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags are components that help filter content to the desired relevance.'
      }
    }
  },
  args: {
    label: 'I am a Tag!',
    isToggle: false,
    active: false,
    iconLeft: 'hammer-wench',
    removable: false,
    name: 'aui-tag',
    ariaLabelDelete: 'Delete'
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The `label` describes the `Tag` component.'
    },

    isToggle: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `isToggle` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed.'
    },
    active: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'This prop sets a toggle `Tag` component as `active`. This prop makes the `Tag` a controlled component and should be used together with `onClick`.'
    },
    iconLeft: {
      control: { type: 'select' },
      options: [
        '',
        'tags',
        'tags-double',
        'hammer-wench',
        'headphones-customer-support-human',
        'professional-tool-dropbox'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'A Tag component can include a leading icon.'
    },
    removable: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the tag is clicked. First parameter of this function is of type `(React).MouseEvent`. Only available on tags with `isToggle` or `removable` enabled.'
    },
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'The `name` prop is set on the button if the `isToggle` prop is true. It is also used for the name on the remove button (postfixed with `-delete`).'
    },
    ariaLabelDelete: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijderen' }
      },
      description: 'The `aria-label` for the delete icon button on removable tags.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, updateArgs] = useArgs();
  return (
    <Tag
      {...args}
      onClick={(name) => {
        args.onClick(name);
        updateArgs({ ...args, active: args.isToggle ? !args.active : args.active });
      }}
    />
  );
};

export const tag = Template.bind({});
