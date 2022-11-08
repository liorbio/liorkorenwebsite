import * as React from "react";
const SvgCvIcon = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={25} cy={25} r={25} fill="#353338" />
    <path
      d="M15.353 37.32c-1.408 0-2.635-.267-3.68-.8a5.808 5.808 0 0 1-2.4-2.304c-.555-1.024-.832-2.23-.832-3.616V20.04c0-1.408.277-2.613.832-3.616a5.808 5.808 0 0 1 2.4-2.304c1.045-.533 2.272-.8 3.68-.8 1.408 0 2.624.277 3.648.832a5.607 5.607 0 0 1 2.368 2.304c.555 1.003.832 2.197.832 3.584h-2.88c0-1.323-.352-2.336-1.056-3.04-.683-.725-1.653-1.088-2.912-1.088s-2.25.352-2.976 1.056c-.704.704-1.056 1.717-1.056 3.04V30.6c0 1.323.352 2.347 1.056 3.072.725.704 1.717 1.056 2.976 1.056s2.23-.352 2.912-1.056c.704-.725 1.056-1.75 1.056-3.072h2.88c0 1.365-.277 2.56-.832 3.584a5.809 5.809 0 0 1-2.368 2.336c-1.024.533-2.24.8-3.648.8ZM32.428 37l-6.015-23.36h2.976l3.967 15.872c.278 1.11.512 2.144.704 3.104.192.939.331 1.653.416 2.144.086-.49.214-1.205.385-2.144.192-.96.426-1.995.704-3.104L39.5 13.64h2.912L36.364 37h-3.937Z"
      fill="#FAF7FA"
    />
  </svg>
);
export default SvgCvIcon;