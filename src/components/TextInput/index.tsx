import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react';
import type { FieldError } from 'react-hook-form';
import { Box, Container, ErrorMessage } from './style';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean,
  containerProps?: HTMLAttributes<HTMLDivElement>,
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, onFocus, onBlur, ...rest} : TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {

  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input 
          type="text" 
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null }

        {error?.message ? (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        ) : null }
      </Container>
    </Box>
  )
})