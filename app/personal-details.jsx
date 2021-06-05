import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {FormInput, FormAutoComplete, FormRadioGroup,FormTextArea} from './form-components';

import {
    nameValidator, requiredValidator, regNoValidator
} from './validators'

import {countries, genders } from './data'

export const PersonalDetails = (
  <div>
    <Field
      key={'fullName'}
      id={'fullName'}
      name={'fullName'}
      label={'Full Name'}
      component={FormInput}
      validator={nameValidator}
        />
      <Field
      key={'regNo'}
      id={'regNo'}
      name={'regNo'}
      label={'Registration Number'}
      component={FormInput}
      validator={regNoValidator}
        />

      <Field
      key={'program'}
      id={'program'}
      name={'program'}
      label={'Program'}
      component={FormInput}
      //validator={programValidator}
        />

      <Field
      key={'stream'}
      id={'stream'}
      name={'stream'}
      label={'Stream'}
      component={FormInput}
      // validator={streamValidator}
        />

      <Field
      key={'year'}
      id={'year'}
      name={'year'}
      label={'Year'}
      component={FormInput}
      // validator={yearValidator}
        />      
    {/* <Field
      key={'countryselected'}
      id={'countryselected'}
      name={'countryselected'}
      label={'Country'}
      hint={'Hint: Only Eroupean countries'}
      component={FormAutoComplete}
      data={countries}
      validator={requiredValidator}
        /> */}
    <Field
      key={'gender'}
      id={'gender'}
      name={'gender'}
      label={'Gender'}
      layout={'horizontal'}
      component={FormRadioGroup}
      data={genders}
      validator={requiredValidator}
        />
    <Field
      key={'about'}
      id={'about'}
      name={'about'}
      label={'About'}
      optional={true}
      component={FormTextArea}
        />
  </div>
);
