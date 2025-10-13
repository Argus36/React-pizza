import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 305 535"
    backgroundColor="#808080"
    foregroundColor="#ffffff"
    {...props}>
    <circle cx="155" cy="140" r="30%" />
    <rect x="0" y="58%" rx="30" ry="30" width="305" height="11%" />
    <rect x="0" y="72.5%" rx="20" ry="20" width="305" height="15%" />
    <rect x="0" y="90%" rx="30" ry="30" width="120" height="10%" />
    <rect x="130" y="90%" rx="30" ry="30" width="175" height="10%" />
  </ContentLoader>
);
