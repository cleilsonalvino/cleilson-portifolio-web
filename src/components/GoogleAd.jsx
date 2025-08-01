import React, { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ignora erro caso o anúncio já tenha sido carregado
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-f6+2m+15-2s+4x"
      data-ad-client="ca-pub-2315578510011966"
      data-ad-slot="4351180023"
    ></ins>
  );
}
