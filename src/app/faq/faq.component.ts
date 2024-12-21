import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  accordions = [
    {id:1, title:"How will Flyers make me feel?", context:"Crafted with 5mg of hemp-derived effect, we formulated our cocktails to bring you a light sense of euphoria and relaxation. With our nanotech, you should start to feel these effects within 15 minutes and last for about 45 minutes. Please note, this can vary person to person."},
    {id:2, title:"How many cocktails should I drink?", context:"We recommend starting with a half or full can to feel the effects first before drinking another."},
    {id:3, title:"What else is in Flyers Cocktails?", context:"Besides our hemp-derived effect, our cocktails are crafted with natural ingredients expertly measured by our Chief Flavor Officer to deliver award winning taste & perfect feel. Scan our can’s QR code to see our testing results."},
    {id:4, title:"I’m under 21, can I drink Flyers?", context:"While we appreciate the enthusiasm, the law is a little less eager. Sit back and wait until your 21st birthday, and perhaps ask your friends and family to hook you up on your special day."},
  ]

}
