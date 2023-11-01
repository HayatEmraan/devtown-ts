declare module "react-rating-stars-component" {
  interface ReactStarsProps {
    value: number;
    size: number;
    edit: boolean;
  }

  const ReactStars: React.FC<ReactStarsProps>;

  export default ReactStars;
}
