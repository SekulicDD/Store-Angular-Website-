import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

export const SlideUpDown = 
    trigger('slideInOut', [
        state('up', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('down', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('up => down', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
                
            }))
        ]
        )]),
        transition('down => up', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]);

export const fadeIn=    
    trigger('fadeIn', [  
    transition(':enter', [
      animate(800,keyframes([
        style({opacity: 0}),
        style({opacity:1})
      ]))
    ]),

    transition(':leave',[
        animate(0, style({opacity: 0}))
    ])
]);
