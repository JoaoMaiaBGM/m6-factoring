import { ReactNode } from "react";

export interface IFactoringData {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export interface IFactoringProviderData {
  handleFactoring: (factoringData: IFactoringData) => void;
  makeList: (values: Object) => any;
  values: Object | null | undefined;
  loading: boolean;
}

export interface IFactoringProps {
  children: ReactNode;
}
