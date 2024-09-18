import { SVGProps } from "react";

export const ConfirmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M9 19.3 2.7 13l1.8-1.8L9 15.6l9.5-9.5 1.8 1.8z" />
  </svg>
);

export const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path stroke="#dc3545" d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M3 17.25V21h3.75l11-11.02L14 6.23 3 17.25zM21.41 6.34a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-2.53.87 3.75 3.75 2.53-2.53z" />
  </svg>
);

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1z" />
  </svg>
);
