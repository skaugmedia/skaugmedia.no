import { useEffect } from "react";

export function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "robots");
    meta.setAttribute("content", "noindex, nofollow");
    document.head.append(meta);

    return () => {
      meta.remove();
    };
  }, []);
}
