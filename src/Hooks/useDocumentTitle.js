import { useEffect, useRef } from "react";
import { mkTitle } from "../utils";

export const useDocumentTitle = (title) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = mkTitle(title);
  }, [title]);

  useEffect(
    () => () => {
      document.title = defaultTitle.current;
    },
    []
  );
};
