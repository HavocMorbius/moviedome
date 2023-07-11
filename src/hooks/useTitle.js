import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
      document.title = title === 'Home' ? 'MovieDome' :`${title}`;
    });

  return null;
}
