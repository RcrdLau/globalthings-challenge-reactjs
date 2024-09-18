import notification from 'react-hot-toast';

import { ToastContainer, Icon } from './styles';

interface Props {
  type: "success" | "information" | "error";
  text: string;
}

export function toast({
  type,
  text,
}: Props) {
  if (type === "success")
    return notification.success(text, {
      style: {
        padding: '0.9rem',
        backgroundColor: "#e6fffa",
        color: '#2e656a',
        fontSize: "0.9rem"
      },
      iconTheme: {
        primary: '#2e656a',
        secondary: '#FFF',
      },
      duration: 5000,
    });

  if (type === "information")
    return notification(() => (
      <ToastContainer>
        <Icon />
        <span>
          {text}
        </span>
      </ToastContainer>
    ), {
        style: {
        padding: '0.9rem',
        backgroundColor: "#ebf8ff",
        color: '#3172b7',
        fontSize: "0.9rem",
      },
    }
    );

  if (type === "error")
    return notification.error(text, {
      style: {
        padding: '0.9rem',
        backgroundColor: "#fddede",
        color: '#c53030',
        fontSize: "0.9rem"
      },
      iconTheme: {
        primary: '#c53030',
        secondary: '#fddede',
      },
      duration: 5000,
    });
}