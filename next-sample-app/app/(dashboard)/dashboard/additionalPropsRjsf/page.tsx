'use client';

import React from 'react';
import Form  from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
  },
  patternProperties: {
    '^foo+$': {
      type: 'number',
      enum: [1, 2, 3],
    },
  },
};

export default function SchemaFormPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Dynamic Pattern Schema Form</h1>
      <Form schema={schema} validator={validator} />
    </main>
  );
}
