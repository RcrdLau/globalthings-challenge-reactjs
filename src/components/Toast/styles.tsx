import styled from "styled-components";
import { MdNotificationsActive } from "react-icons/md";

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled(MdNotificationsActive)`
  width: 24px;
  height: 24px;
  color: #3172b7;
`;
