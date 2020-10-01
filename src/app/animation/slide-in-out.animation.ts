// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideBottomTopAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideBottomTopAnimation', [

        // end state styles for route container (host)
        /* state('*', style({
             // the view covers the whole screen with a semi tranparent background
             /*backgroundColor: 'rgba(0, 0, 0, 0.8)'*/
        //})),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                transform: 'translateY(100%)',
                opacity: 0
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                transform: 'translateY(0px)',
                opacity: 1
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            animate('.0s ease-in-out', style({
                opacity: 0
            }))
        ])
    ]);

export const slideRightLeftAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideRightLeftAnimation', [

        // end state styles for route container (host)
        /* state('*', style({
             // the view covers the whole screen with a semi tranparent background
             /*backgroundColor: 'rgba(0, 0, 0, 0.8)'*/
        //})),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                transform: 'translateX(20px)',
                opacity: 0
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                transform: 'translateX(0px)',
                opacity: 1
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            animate('.0s ease-in-out', style({
                opacity: 0
            }))
        ])
    ]);