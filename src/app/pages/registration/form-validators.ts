
import { AbstractControl } from '@angular/forms';

export function passwordValidator(
  value: AbstractControl
): { [key: string]: boolean } | null {
  const password = value.get('password');
  const confirmPassword = value.get('confirmPassword');
  if (password?.pristine && confirmPassword?.pristine) {
    return null;
  }
  if (!confirmPassword?.value) {
    return null;
  }
  return password && confirmPassword && password.value !== confirmPassword.value
    ? { misMatch: true }
    : null;
}