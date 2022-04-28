import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={463}
        viewBox="0 0 280 463"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="125" cy="125" r="125" />
        <rect x="0" y="313" rx="6" ry="6" width="280" height="86" />
        <rect x="2" y="268" rx="6" ry="6" width="280" height="27" />
        <rect x="130" y="409" rx="30" ry="30" width="150" height="45" />
        <rect x="2" y="420" rx="0" ry="0" width="89" height="26" />
    </ContentLoader>
)

export default PizzaSkeleton;