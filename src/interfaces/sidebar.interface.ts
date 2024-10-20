export interface SidebarOption  {
  title: string;
  type: string;
  icon: string;
  newProducts: Array<{ name: string; route: string }>;
  inspiration: Array<{ name: string; route: string }>;
  bestPrices: Array<{ name: string; route: string }>;
  allProducts: Array<{ name: string; route: string }>;
}

export interface SidebarOtherOption {
  name: string;
  route: string;
}