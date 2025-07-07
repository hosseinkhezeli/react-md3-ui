import React, { useState, useRef, useEffect } from 'react';
import '../../styles/components/FAB.css';
import { FAB } from './FAB';
import { ExtendedFAB } from './ExtendedFAB';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export type FabAction = {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
};

type Props = {
  mainIcon: React.ReactNode;
  variant?: 'icon' | 'extended';
  actions: FabAction[];
};

export const FabMenu = ({ mainIcon, variant = 'icon', actions }: Props) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, () => setOpen(false));

  return (
    <div className='md3-fab-menu' ref={containerRef}>
      <FAB icon={mainIcon} onClick={() => setOpen((prev) => !prev)} rounded />
      <div className={`md3-fab-menu-actions ${open ? 'open' : ''}`}>
        {actions.map((action, i) =>
          variant === 'extended' ? (
            <ExtendedFAB
              key={i}
              icon={action.icon}
              label={action.label}
              onClick={action.onClick}
            />
          ) : (
            <FAB key={i} icon={action.icon} onClick={action.onClick} />
          )
        )}
      </div>
    </div>
  );
};
