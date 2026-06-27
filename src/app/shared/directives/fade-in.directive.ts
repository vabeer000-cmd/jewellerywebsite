// import {
//   AfterViewInit,
//   Directive,
//   ElementRef,
//   inject
// } from '@angular/core';

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// @Directive({
//   selector: '[appFadeIn]',
//   standalone: true
// })
// export class FadeInDirective implements AfterViewInit {

//   private el = inject(ElementRef);

//   ngAfterViewInit(): void {

//     gsap.from(this.el.nativeElement, {

//       opacity: 0,
//       y: 80,
//       duration: 1.2,
//       ease: 'power3.out',

//       scrollTrigger: {
//         trigger: this.el.nativeElement,
//         start: 'top 85%',
//         toggleActions: 'play none none none'
//       }

//     });

//   }

// }