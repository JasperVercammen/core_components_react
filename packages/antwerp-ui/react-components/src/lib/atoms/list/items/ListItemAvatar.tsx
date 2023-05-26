import { classNames } from '../../../../utils/dom.utils';
import { MouseEvent } from 'react';
import { Icon } from '../../../base/icon';
import { Avatar } from '../../avatar';
import { ListItemAvatarProps } from '../List.types';

export function ListItemAvatar({ avatar, name, link, active, user, iconRight, id, onClick, qa }: ListItemAvatarProps) {
  const ItemTag = `${link && (link.href || link.href === '') ? 'a' : 'span'}` as keyof JSX.IntrinsicElements;
  const classes = classNames({
    'a-avatar-list__item': true,
    'is-active': !!active
  });
  const onLinkClick = (event: MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick(name);
    }
  };
  return (
    <li className={classes} id={id} data-qa={qa}>
      <ItemTag
        className="a-avatar-list__item-container"
        onClick={onLinkClick}
        {...(link && (link.href || link.href === '') ? { href: link.href } : {})}
      >
        <Avatar {...avatar} className="a-avatar-list__avatar" rounded size="small" />
        <div className="a-avatar-list__content">
          <span className="a-avatar-list__text">
            {user?.name ? <span className="avatar-list__name paragraph">{user.name}</span> : null}
            {user?.function ? <span className="small">{user.function}</span> : null}
            {user?.email ? <span className="small">{user.email}</span> : null}
          </span>
          {iconRight && <Icon name={iconRight} />}
        </div>
      </ItemTag>
    </li>
  );
}

export default ListItemAvatar;
