import React, { Component, createRef } from 'react';
import './index.scss';

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
    iconLeft?: object,
    iconRight?: object,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    title: string,
}

export class AXButton extends Component<IAXButtonProps> {
    // console.log(x: string)
    private name: string = 'ax-btn'
    private myRef = createRef<HTMLButtonElement>()

    static defaultProps = {
        title: 'OK',
        variant: type.primary
    }

    constructor(props: IAXButtonProps) {
        super(props)
        console.log('hey there!')
    }

    componentDidMount() {
        // const node = this.myRef.current!
        // if (node) { node.focus() }
 
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

        let baseClass = this.name;
        result.push(baseClass);
        result.push(baseClass + '-' + this.props.type)

        if (this.props.iconLeft && this.props.children && this.props.iconRight) {
            result.push(`${baseClass}-icon-text-icon`);
        } else if (this.props.iconLeft && this.props.children) {
            result.push(`${baseClass}-icon-text`);
        } else if (this.props.children && this.props.iconRight) {
            result.push(`${baseClass}-text-icon`);
        } else if (this.props.children != null) {
            result.push(`${baseClass}-text`);
        } else if (this.props.iconLeft) {
            result.push(`${baseClass}-icon`);
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
                {this.props.iconLeft ? <i className="icon-left">{this.props.iconLeft}</i> : <i/>}
                {this.props.children}
                {this.props.iconRight ? <i className="icon-right">{this.props.iconRight}</i> : <i/>}
        </button>
    }

}
