// import React, { useEffect } from "react";
// import useCustomCursor from "../utils/useCustomCursor";

// export default function CustomCursor() {
//   const { position, isHovering } = useCustomCursor();

//   useEffect(() => {
//     document.body.style.cursor = "none";
//     return () => {
//       document.body.style.cursor = "auto";
//     };
//   }, []);

//   return (
//     <>
//       {/* Center dot */}
//       <div
//         className={`fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
//           isHovering ? "w-4 h-4 bg-amber-400" : "w-2 h-2 bg-amber-300"
//         }`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transition: "width 0.2s ease, height 0.2s ease",
//           borderRadius: "50%",
//           boxShadow: isHovering
//             ? "0 0 15px rgba(251, 191, 36, 0.6)"
//             : "0 0 8px rgba(251, 191, 36, 0.4)",
//         }}
//       />

//       {/* Crosshair elements */}
//       <div
//         className="fixed z-40 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           width: isHovering ? "40px" : "24px",
//           height: isHovering ? "40px" : "24px",
//           transition: "width 0.3s ease, height 0.3s ease",
//         }}
//       >
//         {/* Horizontal line */}
//         <div
//           className="absolute w-full h-0.5 bg-amber-300/50"
//           style={{
//             top: "50%",
//             transform: "translateY(-50%)",
//             transition: "background-color 0.2s ease",
//             backgroundColor: isHovering
//               ? "rgba(251, 191, 36, 0.8)"
//               : "rgba(251, 191, 36, 0.5)",
//           }}
//         />

//         {/* Vertical line */}
//         <div
//           className="absolute w-0.5 h-full bg-amber-300/50"
//           style={{
//             left: "50%",
//             transform: "translateX(-50%)",
//             transition: "background-color 0.2s ease",
//             backgroundColor: isHovering
//               ? "rgba(251, 191, 36, 0.8)"
//               : "rgba(251, 191, 36, 0.5)",
//           }}
//         />

//         {/* Rotating outer square */}
//         <div
//           className={`absolute inset-0 border border-amber-300/40 ${
//             isHovering ? "rotate-45" : "rotate-0"
//           }`}
//           style={{
//             transition: "transform 0.3s ease",
//             animation: isHovering ? "spin 4s linear infinite" : "none",
//           }}
//         />
//       </div>

//       {/* Styles */}
//       <style jsx global>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot bg-cyan-500 border hover:bg-cyan-600"
        data-cursor-dot
      ></div>
      <div
        className="cursor-outline border border-cyan-500"
        data-cursor-outline
      ></div>

      <style>
        {`

        body{
          cursor: none;}
          .cursor-dot {
            width: 8px;
            height: 8px;
         }

          .cursor-outline {
            width: 30px;
            height: 30px;
         }

          .cursor-dot,
          .cursor-outline {
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 9999;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
