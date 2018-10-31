import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DisplayMode } from "@microsoft/sp-core-library";
export interface IPnPReactCtrlSampleProps {
  description: string;
  list: string | string[];
  context: WebPartContext;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
}
