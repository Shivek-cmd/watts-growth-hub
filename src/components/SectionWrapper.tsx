import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: Props) => (
  <section
    id={id}
    className={cn("relative", className)}
    style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}
  >
    <div className="container">{children}</div>
  </section>
);

export default Section;
