import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'header-component',
    shadow: true,
    styleUrl: 'header-component.scss'

})
export class HeaderComponent {
    @Prop()
    
    render() {
        return (
            <header>
                
                <h1>To Done</h1>
            </header>
        )
    }
}