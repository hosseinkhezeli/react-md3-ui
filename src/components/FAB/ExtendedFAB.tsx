import { ExtendedFABProps } from '../../types/components/fab.types';
import { FABBase } from './FABBase';
import '../../styles/components/FAB.css';

export function ExtendedFAB(props: ExtendedFABProps) {
  return <FABBase {...props} extended />;
}
