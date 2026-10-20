import React, { useMemo } from "react";
import { P0 } from "./ddPage0";
import { P1 } from "./ddPage1";
import { P2 } from "./ddPage2";
import { P3 } from "./ddPage3";
import { P4 } from "./ddPage4";
import { P5 } from "./ddPage5";
import { P6 } from "./ddPage6";
/** Offline 1:1 replay of the devouringdetails.com landing page: the site's own HTML, JS, CSS, fonts, images and demo videos served from memory. No network. */
export function DevouringDetailsLanding11() {
  const srcDoc = useMemo(() => new TextDecoder().decode(Uint8Array.from(atob(P0 + P1 + P2 + P3 + P4 + P5 + P6), c => c.charCodeAt(0))), []);
  return <iframe title="Devouring Details landing replay" data-dd-replay="" srcDoc={srcDoc} sandbox="allow-scripts allow-same-origin" style={{ display: "block", width: "100%", height: "100vh", border: 0, background: "#ededed" }} />;
}
export default DevouringDetailsLanding11;
