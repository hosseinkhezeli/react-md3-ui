import { KeyboardEvent } from 'react';
import { UseButtonGroupA11yOptions } from '../../types/components/button-groups.types';
export declare function useButtonGroupA11y({ count, type, selectedIndices, onSelect, ariaLabel, ariaLabelledBy, }: UseButtonGroupA11yOptions): {
    getGroupProps: () => {
        role: string;
        'aria-label': string | undefined;
        'aria-labelledby': string | undefined;
    };
    getItemProps: (index: number) => {
        ref: (el: HTMLButtonElement) => void;
        role: string;
        'aria-checked': boolean | undefined;
        'aria-pressed': boolean | undefined;
        onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
        'data-state': string;
        onClick: () => void | undefined;
    };
};
