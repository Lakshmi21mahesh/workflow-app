import { AutomationTextInput, AutomationConnectionPicker } from '@dynatrace/automation-action-components';
import { FormField } from '@dynatrace/strato-components-preview';
import { ActionWidget } from '@dynatrace-sdk/automation-action-utils';
import React from 'react';

interface ActionsGreeterWidgetTsxInput {
  name: string;
  connectionId: string;
}

const ActionsGreeterWidgetTsxWidget: ActionWidget<ActionsGreeterWidgetTsxInput> = (props) => {
  const { value, onValueChanged } = props;

  const updateValue = (newValue: Partial<ActionsGreeterWidgetTsxInput>) => {
    onValueChanged({ ...value, ...newValue });
  };

  return (
    <>
      <FormField label='Connection'>
        <AutomationConnectionPicker
          connectionId={value.connectionId}
          schema='actions-greeter-widget-tsx-connection'
          onChange={(connectionId) => updateValue({ connectionId })}
        />
      </FormField>
      <FormField label='Name'>
        <AutomationTextInput value={value.name} onChange={(name) => updateValue({ name })} />
      </FormField>
    </>
  );
};

export default ActionsGreeterWidgetTsxWidget;
