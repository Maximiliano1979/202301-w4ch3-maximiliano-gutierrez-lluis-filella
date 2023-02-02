interface ActionProps {
  href: string;
  className: string;
  content: string;
}

const Action = ({ href, className, content }: ActionProps): JSX.Element => {
  return (
    <a href={href} className={className}>
      {" "}
      {content}
    </a>
  );
};

export default Action;
