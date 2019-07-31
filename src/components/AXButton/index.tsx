import React, { Component, createRef } from 'react';
import AXButtonBase from './base';
import { type } from '../AXBase';
import * as styles from './index.scss';

export class AXButton extends AXButtonBase {

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

    render() {
        return <button
            ref={this.myRef}
            className={super.classNameConstructor()}
            disabled={this.props.disabled}
            onMouseDown={this.onMouseDown}
            onClick={this.onClick}>
                {this.props.icon ? <i className={styles.iconLeft}>{this.props.icon}</i> : null}
                {this.props.children}
                {this.props.iconTrailing ? <i className={styles.iconRight}>{this.props.iconTrailing}</i> : null}
        </button>
    }
}