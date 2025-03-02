import { ShinyButton } from "./magicui/shiny-button";

export function ShinyButtonDemo({ children, className }) {
  return <ShinyButton className={className}>{children}</ShinyButton>;
}
