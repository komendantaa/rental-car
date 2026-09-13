import { FaRegCircleCheck } from 'react-icons/fa6';

import css from './CheckList.module.css';

type Props = {
  title: string;
  items: string[];
};

const CheckList = ({ title, items }: Props) => {
  return (
    <>
      <h3 className={css.sectionTitle}>{title}</h3>
      <ul className={css.list}>
        {items.map(item => (
          <li className={css.listItem} key={item}>
            <FaRegCircleCheck /> {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheckList;
