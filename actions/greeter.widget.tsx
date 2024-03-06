import { AutomationTextInput, AutomationConnectionPicker } from '@dynatrace/automation-action-components';
import { FormField } from '@dynatrace/strato-components-preview';
import { ActionWidget } from '@dynatrace-sdk/automation-action-utils';
import React from 'react';

interface GreeterInput {
  name: string;
  connectionId: string;
}

const GreeterWidget: ActionWidget<GreeterInput> = (props) => {
  const { value, onValueChanged } = props;

  const updateValue = (newValue: Partial<GreeterInput>) => {
    onValueChanged({ ...value, ...newValue });
  };

  return (
    <>
      <FormField label='Connection'>
        <AutomationConnectionPicker
          connectionId={value.connectionId}
          schema='greeter-connection'
          onChange={(connectionId) => updateValue({ connectionId })}
        />
      </FormField>
      <FormField label='Name'>
        <AutomationTextInput value={value.name} onChange={(name) => updateValue({ name })} />
      </FormField>
    </>
  );
};

export default GreeterWidget;
