import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import './InputText.css';

export function InputText({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  color,
  width,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          className="custom-focused-input"
          InputLabelProps={{
            style: {
              color: '#707070',
              fontSize: '14px',
            },
          }}
          InputProps={{
            style: {
              color: color,
              fontSize: '14px',
            },
          }}
          type='text'
          label={label}
          value={value}
          inputRef={ref}
          onChange={onChange}
          margin='normal'
          error={error}
          // fullWidth
          style={{ width: width }}
          helperText={error ? error.message : ''}
          {...props}
        />
      ))}
    />
  );
}
