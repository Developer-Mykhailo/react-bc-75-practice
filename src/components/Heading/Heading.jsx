import s from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({ title, bottom, top, variant, tag: Tag = "h2" }) => {
  return (
    <Tag
      className={clsx(s.title, {
        [s.bottom]: bottom,
        [s.top]: top,
        [s[variant]]: variant,
      })}
    >
      {title}
    </Tag>
  );
};

export default Heading;
