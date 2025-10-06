import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 305 535"
    backgroundColor="#808080"
    foregroundColor="#ffffff"
    {...props}>
    <circle cx="155" cy="150" r="150" />
    <rect x="0" y="315" rx="30" ry="30" width="305" height="53" />
    <rect x="0" y="385" rx="30" ry="30" width="305" height="77" />
    <rect x="0" y="485" rx="30" ry="30" width="85" height="50" />
    <rect x="130" y="485" rx="30" ry="30" width="175" height="50" />
  </ContentLoader>
);

export default MyLoader;
