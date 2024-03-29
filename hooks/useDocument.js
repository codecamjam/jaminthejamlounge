import { useEffect, useRef } from "react";
import { getAppHeight, preventResizeAnime } from "@/utils";

export default function useDocument() {
  const doc = useRef(null);

  useEffect(() => {
    if (document) {
      doc.current = document.documentElement;
      getAppHeight(doc);
      // preventResizeAnime(doc);
    }
  }, []);

  return doc;
}
