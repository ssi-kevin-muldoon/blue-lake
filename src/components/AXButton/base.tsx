import React, { Component, createRef } from 'react';
import * as styles from './index.scss';
import { type } from '../AXBase';

interface IAXButtonProps {
    type: type,
    disabled?: boolean,
    icon?: object,
    iconTrailing?: object,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const TYPES = {
    PRIMARY: 'primary',
    WARNING: 'warning',
    DANGER: 'danger',
    SUCCESS: 'success',
  }

export default class Base extends Component<IAXButtonProps> {

    protected classNameConstructor(): string {
        var result = [];

        result.push(styles.baseName);
        result.push(styles.baseName + '-' + this.props.type)

        if (this.props.icon && this.props.children != null && this.props.iconTrailing) {
            let className = `${styles.baseName}${styles.iconTextIcon}`
            this.axLint(className)
            result.push(className)
        } else if (this.props.icon && this.props.children != null) {
            let className = `${styles.baseName}${styles.iconText}`
            this.axLint(className)
            result.push(className)
        } else if (this.props.children != null && this.props.iconTrailing) {
            let className = `${styles.baseName}${styles.textIcon}`
            this.axLint(className)
            result.push(className)
        } else if (this.props.children != null) {
            let className = `${styles.baseName}${styles.text}`
            this.axLint(className)
            result.push(className)
        } else if (this.props.icon) {
            let className = `${styles.baseName}${styles.icon}`
            this.axLint(className)
            result.push(className)
        } else {
            throw "Axiom Design System does not recognize this button format.";
        }

        return result.join(" ");
    }

    private axLint(className: string) {

        if (className === 'ax-btn-text') { return }

        switch (this.props.type) {
            case type.tertiary: {
                throw "Sorry, Axiom Design System does not recognize tertiary buttons with icons.";
            }
            case type.link: {
                throw "Sorry, Axiom Design System does not recognize link buttons with icons.";
            }
        }
    }

}
