"use client";

import { usePathname } from "next/navigation";
import { HSAccordion, HSDropdown } from "preline";
import { useEffect } from "react";

// interface HSStaticMethods {
//   autoInit: () => void;
// }

// interface Window {
//   HSStaticMethods: HSStaticMethods;
// }


export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      HSAccordion.autoInit();
      HSDropdown.autoInit();
    }, 100);
  }, [path]);

  return null;
}