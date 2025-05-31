'use client';

import { RJSFSchema, UiSchema } from '@rjsf/utils';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const CustomSelectComponent = (props: any) => {
  return (
    <select
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      className="border p-2"
    >
      <option value="">-- Select --</option>
      {(props.options?.enumOptions || []).map((item: any, index: number) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

const schema: RJSFSchema = {
  type: 'array',
  minItems: 2,
  title: 'A multiple-choice list',
  items: {
    type: 'string',
    enum: ['foo', 'bar', 'fuzz', 'qux'],
  },
  uniqueItems: true,
};

const uiSchema: UiSchema = {
  'ui:widget': 'checkboxes',
  'ui:options': {
    inline: true,
  },
};

const widgets = {
  CustomSelect: CustomSelectComponent,
};

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">RJSF Custom Select Example</h1>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        validator={validator}
        onSubmit={({ formData }) => console.log(formData)}
      />
    </div>
  );
}
