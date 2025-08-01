import React, { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Ignora erro caso o anúncio já tenha sido carregado
      // console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-6q+e9+15-2u+4y"
      data-ad-client="ca-pub-2315578510011966"
      data-ad-slot="4351180023"
    ></ins>
  );
}
