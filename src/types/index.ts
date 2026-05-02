export interface LandingMenuType {
  id: number;
  title: string;
  items?: SubMenuType[]
  // path: string;
};

export interface SubMenuType{
  id: number;
  sub: string;
}