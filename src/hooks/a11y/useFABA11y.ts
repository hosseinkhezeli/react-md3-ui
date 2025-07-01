import { UseFabA11yProps } from "../../types/components/fab.types";

export function useFabA11y({ label, ariaLabel }: UseFabA11yProps) {
  const name = ariaLabel ?? label;
  return {
    a11yProps: {
      'aria-label': name,
    },
  };
}
