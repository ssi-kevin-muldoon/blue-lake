import React, { Component, createRef } from 'react';
import './index.scss';

export enum Type {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Info = "info",
    Link = "link",
}

interface IAXButtonProps {
    type: Type,
    secondary?: string,
    tertiary?: string,
    positive?: string,
    negative?: string,
    disabled?: boolean,
    text?: string,
    icon?: string,
    iconTrailing?: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    title: string,
}

export class AXButton extends Component<IAXButtonProps> {

    private name: string = 'ax-btn'
    private myRef = createRef<HTMLButtonElement>()

    static defaultProps = {
        title: 'OK',
        variant: Type.Primary
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

        if (this.props.icon && this.props.children && this.props.iconTrailing) {
            result.push(`${baseClass}-icon-text-icon`);
        } else if (this.props.icon && this.props.children) {
            result.push(`${baseClass}-icon-text`);
        } else if (this.props.children && this.props.iconTrailing) {
            result.push(`${baseClass}-text-icon`);
        } else if (this.props.children) {
            result.push(`${baseClass}-text`);
        } else if (this.props.icon) {
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
            {this.props.children}
        </button>
    }

}
