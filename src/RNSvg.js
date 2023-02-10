import * as React from 'react';
//Importing the Svg and Path to create a shape of Line
import Svg, { Path } from 'react-native-svg';

export default function RNSvg(props) {
return (
//Defining the Dimension for the Svg
<Svg height="200" width="200">
{/* //Here the path is nothing but the line and we are passing some of the attribute for path */}
<Path
d="M35 11 L99 89 L77 34 L23 88"
fill="blue"
stroke="red"
/>
</Svg>
);
}