import { helper } from '@ember/component/helper';
import { HelperLike } from '@glint/template';

export function numberFormat(positional: [number]) {
  let formatMe = positional[0];
  return Intl.NumberFormat().format(formatMe);
}

export default helper(numberFormat);

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'number-format': HelperLike<{
      Args: { Positional: [number] };
      Return: string;
    }>;
  }
}