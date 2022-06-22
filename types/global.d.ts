import { TemplateFactory } from 'htmlbars-inline-precompile';
import { ComponentLike, HelperLike } from '@glint/template';
import AndHelper from '@gavant/glint-template-types/types/ember-truth-helpers/and';
import EqHelper from '@gavant/glint-template-types/types/ember-truth-helpers/eq';
import GtHelper from '@gavant/glint-template-types/types/ember-truth-helpers/gt';
import LtHelper from '@gavant/glint-template-types/types/ember-truth-helpers/lt';
import LteHelper from '@gavant/glint-template-types/types/ember-truth-helpers/lte';
import NotHelper from '@gavant/glint-template-types/types/ember-truth-helpers/not';

// Types for compiled templates
declare module 'census/templates/*' {
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    and: typeof AndHelper;
    eq: typeof EqHelper;
    gt: typeof GtHelper;
    lt: typeof LtHelper;
    lte: typeof LteHelper;
    not: typeof NotHelper;

    add: HelperLike<{
      Args: { Positional: number[] };
      Return: number;
    }>;
    mod: HelperLike<{
      Args: { Positional: [moddee: number, modder: number] };
      Return: number;
    }>;
    sub: HelperLike<{
      Args: { Positional: number[] };
      Return: number;
    }>;

    compute: HelperLike<{
      Args: { Positional: any[] };
      Return: any;
    }>;
    filter: HelperLike<{
      Args: { Positional: [filter: Function, items: any[]] };
      Return: any[];
    }>;
    'find-by': HelperLike<{
      Args: { Positional: [key: string, value: any, items: any[]] };
      Return: any;
    }>;
    includes: HelperLike<{
      Args: { Positional: [selected: any, items: any[]] };
      Return: boolean;
    }>;
    pipe: HelperLike<{
      Args: { Positional: any[] };
      Return: any;
    }>;
    'toggle-action': HelperLike<{
      Args: { Positional: [prop: string, this: any] };
      Return: any;
    }>;
    
  }
}
