/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-react-svg" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
