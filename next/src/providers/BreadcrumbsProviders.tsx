import React from 'react';
import { BreadcrumbItem } from './Breadcrumb';

interface BreadcrumbContext {
  setBreadcrumbItems: (items: BreadcrumbItem[]) => void;
}

export const BreadcrumbContext = React.createContext({} as BreadcrumbContext);
