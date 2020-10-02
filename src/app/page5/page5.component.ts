import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {
  try = false;
  ishidden = true;
  isnext = true;
  intro = false;
  isReadonly = true;
  disabled = false;
  current_ques;
  current_ques_no;
  selected_ques_no: boolean;
  ques: any;
  selected_ques: any;
  item: any;
  result_page;
  percentage: number;
  value: any;
  constructor(private router: Router) { 
   
  }

  quiz:any = [
    {
      "type": "single_choice",
      "question": {
        "content": `Client: I keep getting disconnected from my Teams meetings today. Half of my meeting have been negatively impacted. This is really
frustrating! Can you help me?`,
        "selected": "0",
        "choices": [
          {
            "content": `Empathic Response: I can understand the frustration. There has been a server outage and the 
            server team is working on ﬁxing it. I've just sent them a message about your issue, and I am expecting to hear
            back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.

`,
            "correct": "true",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `Empathic Response: I can understand the frustration. There has been a sewer outage and the server
team is working on ﬁxing it. I've just sent them a message about your issue, and I am expecting to hear
back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          }
         
        ]
      }
    },
    
   

    {
      "type": "single_choice",
      "question": {
        "content": `Empathy is a critical component to serving our clients and building relationships as we see our 
        clients needs and pain points from their perspective.?`,
        "selected": "0",
        "choices": [
          {
            "content": `Empathy is awareness of other’s feelings, needs, and concerns.`,
            "correct": "true",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `What is empathy? and why empathy matters at workplace?`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          }

        ]
      }
    },


    {
      "type": "single_choice",
      "question": {
        "content": `Client: I keep getting disconnected from my Teams meetings today. Half of my meeting have been negatively impacted. This is really
frustrating! Can you help me?`,
        "selected": "0",
        "choices": [
          {
            "content": `Empathic Response: I can understand the frustration. There has been a server outage and the 
            server team is working on ﬁxing it. I've just sent them a message about your issue, and I am expecting to hear
            back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.

`,
            "correct": "true",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `Empathic Response: I can understand the frustration. There has been a sewer outage and the server
team is working on ﬁxing it. I've just sent them a message about your issue, and I am expecting to hear
back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          }

        ]
      }
    },

  ]

  
 
  /*selectedDay: string = '';
  days: any = [{
    text: `Empathic Response: I can understand the frustration. There has been a server outage and the server
team is working on ﬁxing it.I've just sent them a message about your issue. and I am expecting to hear
back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.`,
    value:"true"
  },
  {
    text: `Empathic Response: I can understand the frustration. There has been a server outage and the server
team is working on ﬁxing it. I've just sent them a message about your issue. and I am expecting to hear
back from them within a couple of hours, but either way, I'll follow up with you by 2 pm with an update.

`,
    value: "false"
    }
    
  ];

  //event handler for the radio button's change event
  radioChangeHandler(event: any,i) {
    //update the ui
    
  }
*/
  ngOnInit() {
 this.show_question(0)
  }
  /*data =`Client: I keep getting disconnected from my Teams meetings today. Half of my meeting have been negatively impacted. This
is really
frustrating! Can you help me?`


 
marks=0;
  submit(){
    if(this.selectedDay == "true"){
     this.marks= this.marks +100;
    }

    if (this.selectedDay == "false") {
      this.marks = this.marks + 50;
    }
  }
}

*/






show_choice(i) {
  this.selected_ques_no = i;
  this.selected_ques = this.quiz[i]

}

show_question(i) {
  this.current_ques_no = i;
  //console.log(this.value)
  this.current_ques = this.quiz[i]
  this.ishidden = true
}


check(i) {
  this.current_ques.selected = i;
  console.log(this.current_ques.selected)
 // console.log(this.current_ques.question[0].selected)
  this.ishidden = true;
  this.isnext = false;
  // console.log(this.current_ques_no)
  // console.log(this.current_no);
  //console.log( this.current_ques.selected)
}


marks: number = 0;

submit() {
  //validate
  this.validateSingle(this.current_ques);
  this.isnext = true;
  this.ishidden = false;
  this.disabled = true;

}
current_no = 1;
next(){

  this.current_ques_no++;
  if (this.current_ques_no < this.quiz.length) {
    this.current_no++;
    this.show_question(this.current_ques_no)
  } else {
    this.showresult();
    this.current_no = 1;
  }
  this.isnext = true;
  this.disabled = false;
  this.ishidden = true;
}
showresult() {
  this.current_ques = undefined;
  this.result_page = true;

  this.percentage = this.marks / this.current_ques_no * 100;
  if (this.percentage >= 75) {
    this.try = true;
  }
}



  validateSingle(current_ques) {
      
      //console.log(this.current_ques.selected, this.current_ques.question.choices[this.current_ques.selected].correct);
      if (this.current_ques.question.choices[this.current_ques.selected].correct == "true") {
       this.marks = this.marks + 100;
      }
      else{
        this.marks = this.marks +50;
      }
  
  
 /* switch (item.type) {
    case 'single_choice':
      
      break;


    default:
      break;*/
 }
 


}
