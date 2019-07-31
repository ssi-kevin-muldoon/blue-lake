import React, { createRef } from 'react';
import * as styles from './index.scss';
import { type } from '../AXBase';

interface IBXButtonProps {
    type: type,
    disabled?: boolean,
    icon?: object,
    iconTrailing?: object,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const BXButton: React.FunctionComponent<IBXButtonProps> = props => {

    const self = createRef<HTMLButtonElement>()

    const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        const node = self.current!
        if (node.disabled) return
        event.preventDefault()
    }

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const node = self.current!
        console.log(node)
        if (node.disabled) return
        node.blur()
        props.onClick(event)
    }

    function classNameConstructor(): string {
        var result = [];

        result.push(styles.baseName);
        result.push(styles.baseName + '-' + props.type)

        if (props.icon !== undefined && typeof(props.children) !== 'undefined' && props.iconTrailing !== undefined) {
            let className = `${styles.baseName}${styles.iconTextIcon}`
            axLint(className)
            result.push(className)
        } else if (props.icon !== undefined && props.children !== undefined) {
            let className = `${styles.baseName}${styles.iconText}`
            axLint(className)
            result.push(className)
        } else if (props.children !== undefined && props.iconTrailing !== undefined) {
            let className = `${styles.baseName}${styles.textIcon}`
            axLint(className)
            result.push(className)
        } else if (props.children !== undefined) {
            let className = `${styles.baseName}${styles.text}`
            axLint(className)
            result.push(className)
        } else if (props.icon !== undefined) {
            let className = `${styles.baseName}${styles.icon}`
            axLint(className)
            result.push(className)
        } else {
            throw "Axiom Design System does not recognize this button format.";
        }

        return result.join(" ");
    }

    function axLint(className: string) {

        if (className === 'ax-btn-text') { return }

        switch (props.type) {
            case type.tertiary: {
                throw "Sorry, Axiom Design System does not recognize tertiary buttons with icons.";
            }
            case type.link: {
                throw "Sorry, Axiom Design System does not recognize link buttons with icons.";
            }
        }
    }

    return <button
        ref={self}    
        className={classNameConstructor()}
        disabled={props.disabled}
        onMouseDown={onMouseDown}
        onClick={onClick}>
        {(props.icon === undefined) ? null : <i className={styles.iconLeft}>{props.icon}</i>}
        {props.children}
        {(props.iconTrailing === undefined) ? null : <i className={styles.iconRight}>{props.iconTrailing}</i>}
    </button>
}

export default BXButton;
