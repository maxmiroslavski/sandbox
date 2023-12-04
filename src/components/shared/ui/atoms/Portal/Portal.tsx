import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  id?: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
  const ref = useRef<HTMLElement | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = id ? document.getElementById(id) : document.body;
    setMounted(true);
  }, [id]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
