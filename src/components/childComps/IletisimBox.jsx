"use client";

import { useEffect, useRef } from "react";
import Form from "../childComps/Form";

export function IletisimBox({ closeBox }) {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div ref={contactRef} className="modal relative">
      <div className="iletisim-kutusu">
        <Form />
      </div>
    </div>
  );
}
