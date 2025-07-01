import React, { JSX } from 'react';
import '../../styles/components/Typography.css';
export type TypographyVariant = 'display-large' | 'headline-medium' | 'title-small' | 'label-large' | 'body-medium' | 'body-small';
type Props = {
    as?: keyof JSX.IntrinsicElements;
    variant?: TypographyVariant;
    children: React.ReactNode;
    className?: string;
};
export declare const Typography: ({ as: Component, variant, children, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
