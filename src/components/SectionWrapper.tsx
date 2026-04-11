import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className, id }: Props) => (
  <section id={id} className={cn("py-20 md:py-28", className)}>
    <div className="container">{children}</div>
  </section>
);

export default SectionWrapper;
