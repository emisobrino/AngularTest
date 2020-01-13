import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `
    <div class="hello-world">
        <h1>Mi novia</h1>
        <h2>Me ama y me apreta las bolas</h2>
    </div>
    `,
    styles: ['.hello-world {background: #000; color: #fff;}']
})
export class HelloWorld{

}