export type navigationProps = {
  navigate: (screen?: string, to?: { screen: string }) => void;
  goBack: () => void;
  openDrawer: () => void;
  reset: (index: number, routeNames: Routes[]) => void;
};
