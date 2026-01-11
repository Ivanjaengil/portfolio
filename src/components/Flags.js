import React from "react";

export const USFlag = ({ width = 24, height = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path fill="#bd3d44" d="M0 0h640v480H0" />
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
    <path fill="#192f5d" d="M0 0h296v258H0" />
    <marker id="us-a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
    </marker>
    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" transform="scale(.6)" />
    <g fill="#fff">
        <g id="s18">
            <g id="s9">
                <g id="s5">
                    <g id="s4">
                        <path id="s" d="M24.7,5.7l1.9,5.8l6.1,0l-4.9,3.6l1.9,5.8l-4.9-3.6l-4.9,3.6l1.9-5.8l-4.9-3.6l6.1,0z"/>
                        <use href="#s" x="42"/>
                        <use href="#s" x="84"/>
                        <use href="#s" x="126"/>
                    </g>
                    <use href="#s" x="168"/>
                </g>
                <use href="#s4" x="21"/>
                <use href="#s" x="189"/>
            </g>
            <use href="#s9" y="42"/>
        </g>
        <use href="#s18" y="84"/>
        <use href="#s9" y="168"/>
        <use href="#s5" y="210"/>
        <use href="#s4" x="21" y="210"/>
        <use href="#s" x="189" y="210"/>
    </g>
  </svg>
);

export const ESFlag = ({ width = 24, height = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle" }}
  >
    <path fill="#aa151b" d="M0 0h640v480H0z"/>
    <path fill="#f1bf00" d="M0 120h640v240H0z"/>
  </svg>
);
