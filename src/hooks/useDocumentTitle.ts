import { useEffect, useState } from "react";

export function useDocumentTitle(title: string) {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return setDocumentTitle;
}
