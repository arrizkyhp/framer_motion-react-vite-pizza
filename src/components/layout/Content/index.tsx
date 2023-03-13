import type { ContentProps } from './index.types';

const Content = (props: ContentProps) => {
  const { children } = props;
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};
export default Content;
