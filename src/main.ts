import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div>
  <label for="emailInput">Enter your email:</label>
  <input id="emailInput" [(ngModel)]="email" (input)="onEmailInput()" />

  <div *ngIf="natoAlphabet">
    <p>Phonetic NATO Alphabet:</p>
    <ul  *ngFor="let char of natoAlphabetArray; let i = index"
    [style.color]="char === 'DOT' ? 'red' : 'black'"> 
      <li>
        {{ char }}
      </li>
    </ul>
  </div>
</div>
  `,
})
export class App {
  email: string = '';
  natoAlphabet: string = '';
  natoAlphabetArray: string[] = [];

  onEmailInput() {
    if (this.email) {
      const firstPart = this.email.split('@')[0];
      this.natoAlphabet = this.calculateNatoAlphabet(firstPart);
      this.natoAlphabetArray = this.natoAlphabet.split(' - ');
    } else {
      this.natoAlphabet = '';
      this.natoAlphabetArray = [];
    }
  }

  calculateNatoAlphabet(input: string): string {
    const natoAlphabetMap: { [key: string]: string } = {
      a: 'Alpha',
      b: 'Bravo',
      c: 'Charlie',
      d: 'Delta',
      e: 'Echo',
      f: 'Foxtrot',
      g: 'Golf',
      h: 'Hotel',
      i: 'India',
      j: 'Juliett',
      k: 'Kilo',
      l: 'Lima',
      m: 'Mike',
      n: 'November',
      o: 'Oscar',
      p: 'Papa',
      q: 'Quebec',
      r: 'Romeo',
      s: 'Sierra',
      t: 'Tango',
      u: 'Uniform',
      v: 'Victor',
      w: 'Whiskey',
      x: 'X-ray',
      y: 'Yankee',
      z: 'Zulu',
      '.': 'DOT', // Add "Dot" for period (.)
    };

    input = input.toLowerCase();
    return input
      .split('')
      .map((char) => natoAlphabetMap[char] || char)
      .join(' - ');
  }
}

bootstrapApplication(App);
