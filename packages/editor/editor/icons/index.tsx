import React, { SVGProps } from "react"
import { SVGComponent } from "../toolbar/commands"
import { HeadingElement } from "../types"
export * from "./table-icons"
export * from "./code-block-icons"

export type IconComponent = (
  props: React.SVGProps<SVGSVGElement>
) => JSX.Element

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M216 72 104 184l-56-56"
    />
  </svg>
)

export const CheckCircleFillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6Z"
      fill="currentColor"
    />
  </svg>
)

export const XCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <circle
      cx={128}
      cy={128}
      r={96}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m160 96-64 64M160 160 96 96"
    />
  </svg>
)

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 128h176M128 40v176"
    />
  </svg>
)

export const FileTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M200 224H56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96l56 56v128a8 8 0 0 1-8 8Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M152 32v56h56M96 136h64M96 168h64"
    />
  </svg>
)

/**
 * Converted from
 *
 * https://phosphoricons.com/
 * https://github.com/phosphor-icons/phosphor-home
 *
 * using
 *
 * https://react-svgr.com/playground/
 *
 * Online editing tool
 *
 * https://www.svgviewer.dev/s/47853/symbol
 */

export const CheckedIcon: IconComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#2888ff"
      d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-30.5 77.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6Z"
    />
  </svg>
)

export function UncheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={192}
      height={192}
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={8}
        fill="none"
        stroke="#d0d0d0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  )
}

export const HeadingIcons = new Map<HeadingElement["level"], SVGComponent>([
  [
    1,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 49 35"
        fill="currentColor"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M36.2812 11.2344V8C39.3281 7.70312 41.4531 7.21094 42.6562 6.52344C43.8594 5.82031 44.7578 4.17188 45.3516 1.57812H48.6797V35H44.1797V11.2344H36.2812Z" />
      </svg>
    ),
  ],
  [
    2,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 57 35"
        fill="currentColor"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M33.1875 35C33.3438 32.1094 33.9375 29.5938 34.9688 27.4531C36.0156 25.3125 38.0469 23.3672 41.0625 21.6172L45.5625 19.0156C47.5781 17.8438 48.9922 16.8438 49.8047 16.0156C51.0859 14.7188 51.7266 13.2344 51.7266 11.5625C51.7266 9.60938 51.1406 8.0625 49.9688 6.92188C48.7969 5.76562 47.2344 5.1875 45.2812 5.1875C42.3906 5.1875 40.3906 6.28125 39.2812 8.46875C38.6875 9.64062 38.3594 11.2656 38.2969 13.3438H34.0078C34.0547 10.4219 34.5938 8.03906 35.625 6.19531C37.4531 2.94531 40.6797 1.32031 45.3047 1.32031C49.1484 1.32031 51.9531 2.35938 53.7188 4.4375C55.5 6.51562 56.3906 8.82812 56.3906 11.375C56.3906 14.0625 55.4453 16.3594 53.5547 18.2656C52.4609 19.375 50.5 20.7188 47.6719 22.2969L44.4609 24.0781C42.9297 24.9219 41.7266 25.7266 40.8516 26.4922C39.2891 27.8516 38.3047 29.3594 37.8984 31.0156H56.2266V35H33.1875Z" />
      </svg>
    ),
  ],
  [
    3,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 57 36"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M44.1562 35.9141C40.1875 35.9141 37.3047 34.8281 35.5078 32.6562C33.7266 30.4688 32.8359 27.8125 32.8359 24.6875H37.2422C37.4297 26.8594 37.8359 28.4375 38.4609 29.4219C39.5547 31.1875 41.5312 32.0703 44.3906 32.0703C46.6094 32.0703 48.3906 31.4766 49.7344 30.2891C51.0781 29.1016 51.75 27.5703 51.75 25.6953C51.75 23.3828 51.0391 21.7656 49.6172 20.8438C48.2109 19.9219 46.25 19.4609 43.7344 19.4609C43.4531 19.4609 43.1641 19.4688 42.8672 19.4844C42.5859 19.4844 42.2969 19.4922 42 19.5078V15.7812C42.4375 15.8281 42.8047 15.8594 43.1016 15.875C43.3984 15.8906 43.7188 15.8984 44.0625 15.8984C45.6406 15.8984 46.9375 15.6484 47.9531 15.1484C49.7344 14.2734 50.625 12.7109 50.625 10.4609C50.625 8.78906 50.0312 7.5 48.8438 6.59375C47.6562 5.6875 46.2734 5.23438 44.6953 5.23438C41.8828 5.23438 39.9375 6.17188 38.8594 8.04688C38.2656 9.07812 37.9297 10.5469 37.8516 12.4531H33.6797C33.6797 9.95312 34.1797 7.82812 35.1797 6.07812C36.8984 2.95312 39.9219 1.39062 44.25 1.39062C47.6719 1.39062 50.3203 2.15625 52.1953 3.6875C54.0703 5.20312 55.0078 7.40625 55.0078 10.2969C55.0078 12.3594 54.4531 14.0312 53.3438 15.3125C52.6562 16.1094 51.7656 16.7344 50.6719 17.1875C52.4375 17.6719 53.8125 18.6094 54.7969 20C55.7969 21.375 56.2969 23.0625 56.2969 25.0625C56.2969 28.2656 55.2422 30.875 53.1328 32.8906C51.0234 34.9062 48.0312 35.9141 44.1562 35.9141Z" />
      </svg>
    ),
  ],
  [
    4,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 57 35"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M47.5547 23.1172V7.90625L36.7969 23.1172H47.5547ZM47.625 35V26.7969H32.9062V22.6719L48.2812 1.34375H51.8438V23.1172H56.7891V26.7969H51.8438V35H47.625Z" />
      </svg>
    ),
  ],
  [
    5,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 57 36"
        fill="currentColor"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M37.6172 26.4453C37.8984 28.8516 39.0156 30.5156 40.9688 31.4375C41.9688 31.9062 43.125 32.1406 44.4375 32.1406C46.9375 32.1406 48.7891 31.3438 49.9922 29.75C51.1953 28.1562 51.7969 26.3906 51.7969 24.4531C51.7969 22.1094 51.0781 20.2969 49.6406 19.0156C48.2188 17.7344 46.5078 17.0938 44.5078 17.0938C43.0547 17.0938 41.8047 17.375 40.7578 17.9375C39.7266 18.5 38.8438 19.2812 38.1094 20.2812L34.4531 20.0703L37.0078 2H54.4453V6.07812H40.1719L38.7422 15.4062C39.5234 14.8125 40.2656 14.3672 40.9688 14.0703C42.2188 13.5547 43.6641 13.2969 45.3047 13.2969C48.3828 13.2969 50.9922 14.2891 53.1328 16.2734C55.2734 18.2578 56.3438 20.7734 56.3438 23.8203C56.3438 26.9922 55.3594 29.7891 53.3906 32.2109C51.4375 34.6328 48.3125 35.8438 44.0156 35.8438C41.2812 35.8438 38.8594 35.0781 36.75 33.5469C34.6562 32 33.4844 29.6328 33.2344 26.4453H37.6172Z" />
      </svg>
    ),
  ],
  [
    6,
    (props: SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 57 36"
        fill="currentColor"
        {...props}
      >
        <path d="M0.773438 0.570312H5.48438V14.7969H23.3906V0.570312H28.1016V35H23.3906V18.8984H5.48438V35H0.773438V0.570312Z" />
        <path d="M45.7266 1.29688C49.4766 1.29688 52.0859 2.27344 53.5547 4.22656C55.0391 6.16406 55.7812 8.16406 55.7812 10.2266H51.6094C51.3594 8.89844 50.9609 7.85938 50.4141 7.10938C49.3984 5.70312 47.8594 5 45.7969 5C43.4375 5 41.5625 6.09375 40.1719 8.28125C38.7812 10.4531 38.0078 13.5703 37.8516 17.6328C38.8203 16.2109 40.0391 15.1484 41.5078 14.4453C42.8516 13.8203 44.3516 13.5078 46.0078 13.5078C48.8203 13.5078 51.2734 14.4062 53.3672 16.2031C55.4609 18 56.5078 20.6797 56.5078 24.2422C56.5078 27.2891 55.5156 29.9922 53.5312 32.3516C51.5469 34.6953 48.7188 35.8672 45.0469 35.8672C41.9062 35.8672 39.1953 34.6797 36.9141 32.3047C34.6328 29.9141 33.4922 25.8984 33.4922 20.2578C33.4922 16.0859 34 12.5469 35.0156 9.64062C36.9688 4.07812 40.5391 1.29688 45.7266 1.29688ZM45.4219 32.1172C47.6406 32.1172 49.2969 31.375 50.3906 29.8906C51.5 28.3906 52.0547 26.625 52.0547 24.5938C52.0547 22.875 51.5625 21.2422 50.5781 19.6953C49.5938 18.1328 47.8047 17.3516 45.2109 17.3516C43.3984 17.3516 41.8047 17.9531 40.4297 19.1562C39.0703 20.3594 38.3906 22.1719 38.3906 24.5938C38.3906 26.7188 39.0078 28.5078 40.2422 29.9609C41.4922 31.3984 43.2188 32.1172 45.4219 32.1172Z" />
      </svg>
    ),
  ],
])

export const BoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M64 120h88a40 40 0 0 1 0 80H64V48h76a36 36 0 0 1 0 72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth={24}
    />
  </svg>
)

export const ItalicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth={16}
      d="m152 56-48 144M64 200h80M112 56h80"
    />
  </svg>
)

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="m132.5 61.3 9.6-9.7a44.1 44.1 0 0 1 62.3 62.3l-30.3 30.2a43.9 43.9 0 0 1-62.2 0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      d="m123.5 194.7-9.6 9.7a44.1 44.1 0 0 1-62.3-62.3l30.3-30.2a43.9 43.9 0 0 1 62.2 0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
)

export const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M108 144H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8v88a40 40 0 0 1-40 40M224 144h-68a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8v88a40 40 0 0 1-40 40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
)

export const BlockquoteIndentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M32 128h152M112 56l72 72-72 72M216 40v176"
    />
  </svg>
)

export const BlockquoteOutdentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M224 128H72M144 56l-72 72 72 72M40 40v176"
    />
  </svg>
)

export const TableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    {/* Adjusted stroke width from 16 as it looked too heavy */}
    <path
      d="M32 56h192v136a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56h0ZM32 104h192M32 152h192M88 104v96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={12}
    />
  </svg>
)

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m64 88-48 40 48 40M192 88l48 40-48 40M160 40 96 216"
    />
  </svg>
)

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <rect
      x={32}
      y={48}
      width={192}
      height={160}
      rx={8}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14}
    />
    <path
      d="m32 168 50.3-50.3a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 0 11.4 0l20.6-20.6a8 8 0 0 1 11.4 0L224 184"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14}
    />
    <circle cx={156} cy={100} r={12} fill="currentColor" />
  </svg>
)

export const EllipsisIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <circle cx={128} cy={128} r={16} fill="currentColor" />
    <circle cx={192} cy={128} r={16} fill="currentColor" />
    <circle cx={64} cy={128} r={16} fill="currentColor" />
  </svg>
)

/**
 * Modified `arrows-in-line-vertical`
 */

export const HrIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M216 128H40"
    />
  </svg>
)

export const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m208 96-80 80-80-80"
    />
  </svg>
)

export const StrikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 128h176M76.3 96a25.3 25.3 0 0 1-1.2-8c0-22.1 22-40 52.9-40 23.8 0 42.3 10.6 49.5 25.5M72 168c0 22.1 25.1 40 56 40s56-17.9 56-40c0-23.8-21.6-33-45.6-40"
    />
  </svg>
)

export const IndentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M112 128h104M112 64h104M40 192h176M40 56l40 40-40 40"
    />
  </svg>
)

export const OutdentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M112 128h104M112 64h104M40 192h176M72 56 32 96l40 40"
    />
  </svg>
)

export const ChecklistIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M128 128h88M128 64h88M128 192h88M92 48 57.3 80 40 64M92 112l-34.7 32L40 128M92 176l-34.7 32L40 192"
    />
  </svg>
)

export const UnorderedListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M88 64h128M88 128h128M88 192h128"
    />
    <circle cx={44} cy={64} r={12} fill="currentColor" />
    <circle cx={44} cy={128} r={12} fill="currentColor" />
    <circle cx={44} cy={192} r={12} fill="currentColor" />
  </svg>
)

export const OrderedListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M104 128h112M104 64h112M104 192h112"
    />
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m40 60 16-8v56M41.1 152.6a14 14 0 1 1 24.5 13.2L40 200h28"
    />
  </svg>
)

export const SuperscriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <rect
      x={40}
      y={40}
      width={176}
      height={176}
      rx={8}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M94.1 121.9 128 88l33.9 33.9M128 168V88"
    />
  </svg>
)

export const SubscriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <rect
      x={40}
      y={40}
      width={176}
      height={176}
      rx={8}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M94.1 134.1 128 168l33.9-33.9M128 88v80"
    />
  </svg>
)
