import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      });
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
      });
    };

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={followerRef} className="cursor-follower"></div>
    </>
  );
};

export default Cursor;
