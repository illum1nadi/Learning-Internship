'use client'; // Required for using browser-only features like `document`

import React from 'react';
import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema: RJSFSchema = {
  title: 'Person',
  type: 'object',
  properties: {
    'Do you have any pets?': {
      type: 'string',
      enum: ['No', 'Yes: One', 'Yes: More than one'],
      default: 'No',
    },
  },
  required: ['Do you have any pets?'],
  dependencies: {
    'Do you have any pets?': {
      oneOf: [
        {
          properties: {
            'Do you have any pets?': {
              enum: ['No'],
            },
          },
        },
        {
          properties: {
            'Do you have any pets?': {
              enum: ['Yes: One'],
            },
            'How old is your pet?': {
              type: 'number',
            },
          },
          required: ['How old is your pet?'],
        },
        {
          properties: {
            'Do you have any pets?': {
              enum: ['Yes: More than one'],
            },
            'Do you want to get rid of any?': {
              type: 'boolean',
            },
          },
          required: ['Do you want to get rid of any?'],
        },
      ],
    },
  },
};

export default function PetFormPage() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Pet Information Form</h1>
      <Form schema={schema} validator={validator} />
    </div>
  );
}

