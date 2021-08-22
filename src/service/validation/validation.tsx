import { Dispatch, SetStateAction } from 'react';

export default function Validate(
  setErrors: Dispatch<SetStateAction<Record<string, unknown>>>,
  requiredFields: Record<string, unknown>,
): void {
  setErrors({});
  Object.keys(requiredFields).forEach((requiredFieldsName) => {
    if (!requiredFields[requiredFieldsName]) {
      setErrors((state) => ({ ...state, [requiredFieldsName]: requiredFieldsName }));
    }
  });
}
