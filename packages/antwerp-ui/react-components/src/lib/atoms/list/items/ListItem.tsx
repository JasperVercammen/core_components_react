import { classNames } from '../../../../utils/dom.utils';
import { MouseEvent } from 'react';
import { Icon } from '../../../base/icon';
import { ListItemProps } from '../list.types';

export function ListItem({ name, link, active, iconLeft, iconRight, children, onClick, qa }: ListItemProps) {
  const ItemTag = `${link && link.href ? 'a' : 'span'}` as keyof JSX.IntrinsicElements;

  const listItemContentClasses = classNames({
    'a-list__content': true,
    'is-active': !!active
  });

  const onLinkClick = (event: MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick(name);
    }
  };

  return (
    <li className="a-list__item" data-qa={qa}>
      <ItemTag
        className={listItemContentClasses}
        onClick={onLinkClick}
        {...(link && link.href ? { href: link.href } : {})}
      >
        {iconLeft && <Icon name={iconLeft} />}
        <span className="a-list__text">{children}</span>
        {iconRight && <Icon name={iconRight} />}
      </ItemTag>
    </li>
  );
}

export default ListItem;
