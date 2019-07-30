import React, { Component, createRef } from 'react';
import * as styles from './index.scss';
// import { ReactComponent as Icon} from './assets/svg/activity.svg';
import { ReactComponent as Icon} from '../../assets/svg/activity.svg';

export enum type {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    success = "success",
    info = "info",
    warning = "warning",
    danger = "danger",
    link = "link",
}

interface IAXButtonProps {
    type: type,
    disabled?: boolean,
    icon?: object,
    iconTrailing?: object,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export class AXButton extends Component<IAXButtonProps> {
    private myRef = createRef<HTMLButtonElement>()

    static defaultProps = {
        title: 'OK',
        variant: type.primary
    }

    private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const node = this.myRef.current!
        if (node.disabled) return
        node.blur()
        this.props.onClick(event)
    }

    private onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        const node = this.myRef.current!
        if (node.disabled) return
        event.preventDefault()
    }

    private classNameConstructor(): string {
        var result = [];

        result.push(styles.baseName);
        result.push(styles.baseName + '-' + this.props.type)

        if (this.props.icon && this.props.children != null && this.props.iconTrailing) {
            result.push(`${styles.baseName}${styles.iconTextIcon}`);
        } else if (this.props.icon && this.props.children != null) {
            result.push(`${styles.baseName}${styles.iconText}`);
        } else if (this.props.children != null && this.props.iconTrailing) {
            result.push(`${styles.baseName} ${styles.textIcon}`);
        } else if (this.props.children != null) {
            result.push(`${styles.baseName}${styles.text}`);
        } else if (this.props.icon) {
            result.push(`${styles.baseName}${styles.icon}`);
        } else {
            throw "Axiom Design System does not recognize this button format.";
        }

        return result.join(" ");
    }

    render() {
        return <button
            ref={this.myRef}
            className={this.classNameConstructor()}
            disabled={this.props.disabled}
            onMouseDown={this.onMouseDown}
            onClick={this.onClick}>
                {this.props.icon ? <i className={styles.iconLeft}>{this.props.icon}</i> : <i/>}
                {this.props.children}
                {this.props.iconTrailing ? <i className={styles.iconRight}>{this.props.iconTrailing}</i> : <i/>}
        </button>
    }

}
