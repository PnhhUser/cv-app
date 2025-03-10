import { ReactNode } from "react";
import { NavLinkRenderProps } from "react-router-dom";

export interface InfoBase {
  name: string;
  born: string;
  address: string;
  phoneNumber: string;
  email: string;
  college?: string;
  techField?: string;
  major?: string;
  degree?: string;
  gpa?: number;
  fromYear?: number;
  toYear?: number;
}

export interface RouteBase {
  path: string;
  className?: string | ((props: NavLinkRenderProps) => string | undefined);
  children: ReactNode;
}
