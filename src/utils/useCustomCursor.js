// import { useEffect, useState } from "react";

// export default function useCustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const addHoverEvents = () => {
//       const clickableElements = document.querySelectorAll(
//         'a, button, input[type="submit"], [role="button"]'
//       );

//       clickableElements.forEach((element) => {
//         element.addEventListener("mouseenter", () => setIsHovering(true));
//         element.addEventListener("mouseleave", () => setIsHovering(false));
//       });
//     };

//     window.addEventListener("mousemove", updateCursorPosition);

//     // Wait for DOM to be ready
//     setTimeout(addHoverEvents, 500);

//     return () => {
//       window.removeEventListener("mousemove", updateCursorPosition);
//     };
//   }, []);

//   return { position, isHovering };
// }
