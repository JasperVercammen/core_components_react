// @flow
import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import './Modal.scss';

import Button from '../../button/src/Button';

type Props = {
  /** The root element to attach modals to. */
  appElement?: string | HTMLElement,
  /** Hide/Show the appElement (for screenreaders). */
  ariaHideApp: boolean,
  /** Add ARIA-label for the close button */
  ariaCloseLabel?: string,
  /** Modal contents. */
  children: React.Node,
  /** Hide/show the close button. */
  hasCloseButton?: boolean,
  /** Modal title text. */
  title?: string,
  /** Custom confirm element (will close modal on click and trigger onConfirm). */
  confirmElm?: React.Node,
  /** Confirm button text. */
  confirmText?: string,
  /** Custom deny element (will close modal on click and trigger onDeny). */
  denyElm?: React.Node,
  /** Deny button text. */
  denyText?: string,
  /** Custom trigger element (will trigger on click). */
  triggerElm?: React.Node,
  /** Trigger button text (default triggerElm). */
  triggerText?: string,

  /** Additional modal classnames. */
  className?: string,
  /** Additional overlay classnames. */
  overlayClassName?: string,

  /** Confirm callback. */
  onConfirm?: Function,
  /** Deny callback. */
  onDeny?: Function,
  /** Request close callback (called when overlay is clicked or esc is pressed). */
  onRequestClose?: Function,
  /** Modal open callback. */
  onAfterOpen?: Function,

  /** modal size: normal | large */
  size?: 'normal' | 'large',

  /** Open the modal on initial render. */
  openOnInit?: boolean,

  /** Qa id */
  qa?: string,
};

type State = {
  showModal: boolean,
}

const sizes = {
  normal: '',
  large: 'm-modal--large',
};

export default class Modal extends React.Component<Props, State> {
  static appElement: string | HTMLElement;

  static defaultProps = {
    appElement: '#root',
    ariaHideApp: true,
    ariaCloseLabel: 'Sluiten',

    hasCloseButton: true,
    title: '',

    confirmElm: null,
    confirmText: 'Ja',
    denyElm: null,
    denyText: 'Nee',
    triggerElm: null,
    triggerText: 'Open',

    className: '',
    overlayClassName: '',
    size: 'normal',

    onConfirm: () => {},
    onDeny: () => {},
    onRequestClose: () => {},
    onAfterOpen: () => {},

    openOnInit: false,
  };

  state = {
    showModal: false,
  };

  constructor(props) {
    super(props);

    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    const { appElement, ariaHideApp } = props;

    if (!Modal.appElement && ariaHideApp) {
      Modal.appElement = appElement;

      ReactModal.setAppElement(appElement);
    }
  }

  componentDidMount() {
    const { openOnInit } = this.props;

    this.handleToggleModal(!!openOnInit);
  }

  componentDidUpdate() {
    const { showModal } = this.state;
    const { onAfterOpen } = this.props;

    if (showModal) {
      Promise.resolve(onAfterOpen());
    }
  }

  handleToggleModal(show?: boolean) {
    const { showModal } = this.state;

    this.setState({
      showModal: show !== undefined ? show : !showModal,
    });
  }

  handleConfirm() {
    const { onConfirm } = this.props;

    Promise.resolve(onConfirm()).then(() => this.handleToggleModal(false));
  }

  handleDeny() {
    const { onDeny } = this.props;

    Promise.resolve(onDeny()).then(() => this.handleToggleModal(false));
  }

  handleRequestClose() {
    const { onRequestClose } = this.props;

    Promise.resolve(onRequestClose()).then(() => this.handleToggleModal(false));
  }

  addProps(Comp, props) {
    return <Comp.type {...Comp.props} {...props} />;
  }

  render() {
    const { showModal } = this.state;
    const {
      appElement,
      children,
      onRequestClose,
      title,
      hasCloseButton,
      confirmElm,
      confirmText,
      denyElm,
      denyText,
      className,
      overlayClassName,
      triggerElm,
      triggerText,
      size,
      ariaHideApp,
      ariaCloseLabel,
      onConfirm,
      onDeny,
      onAfterOpen,
      openOnInit,
      qa
    } = this.props;

    const modalTrigger = triggerElm ? this.addProps(triggerElm, {
      onClick: () => this.handleToggleModal(true),
    }) : <Button type="primary" onClick={() => this.handleToggleModal(true)}>{triggerText}</Button>;

    const confirmTrigger = confirmElm ? this.addProps(confirmElm, {
      onClick: this.handleConfirm,
    }) : <Button className="m-modal__confirm" onClick={this.handleConfirm}>{confirmText}</Button>;

    const denyTrigger = denyElm ? this.addProps(denyElm, {
      onClick: this.handleDeny,
    }) : <Button className="m-modal__deny" outline onClick={this.handleDeny}>{denyText}</Button>

    const sizeClass = sizes[size];

    return (
      <div>
        {modalTrigger}

        <ReactModal
          bodyOpenClassName="u-modal-open"
          htmlOpenClassName="u-modal-open"
          isOpen={showModal}
          onRequestClose={this.handleRequestClose}
          role="modal"
          aria-modal="true"
          className={classNames('m-modal', sizeClass, className)}
          overlayClassName={classNames('m-overlay', 'is-active', overlayClassName)}
          data-qa={qa}
          ariaHideApp={ariaHideApp}
          onConfirm={onConfirm}
          onDeny={onDeny}
          onAfterOpen={onAfterOpen}
          openOnInit={openOnInit}
        >
          <div className="m-modal__content">
            {(title || hasCloseButton) && (
              <div className="m-modal__header u-margin-bottom-xs">
                {title && (
                  <h6>{title}</h6>
                )}
                {hasCloseButton && (
                  <Button className="m-modal__close" icon="ai-close" ariaLabel={ariaCloseLabel} type="default" transparent onClick={() => this.handleRequestClose()} />
                )}
              </div>
            )}
            {children && (
              <div className="u-margin-bottom">
                {children}
              </div>
            )}
            {(confirmText || denyText || confirmElm || denyElm) && (
              <div className="m-modal__footer">
                {confirmTrigger}
                {denyTrigger}
              </div>
            )}
          </div>
        </ReactModal>
      </div>
    );
  }
}
