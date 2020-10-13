import { AfterViewInit, Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedtextComponent } from '../common/animatedtext/animatedtext.component';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements AfterViewInit {
  selectedtab = 1;
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
  marks: number = 0;
  percentage: number;
  value: any;
  correct = false;
  wrong = false;
  current_no = 1;
  deg = [
    -6, 24, 54, 88, 120, 154, 186
  ];
  feedback = '';
  response = {
    normal: 'Good attempt. You could go for a more empathic response.',
    empathic: 'Great response!'
  };

  @ViewChild('animatedText', { static: false }) animText: AnimatedtextComponent;
  ans: any;
  constructor(private router: Router, private cdr: ChangeDetectorRef) {

  }


  quiz: any = [
    {
      "type": "single_choice",
      "question": {
        "content": `I keep getting disconnected from my Teams meetings today. Half of my meetings have been negatively impacted. 
        This is really frustrating! Can you help me?</p>`,
        "selected": "0",
        "choices": [
          {
            "content": `I am sorry that is not something I can help you with. Please call 999-999-9999 to speak 
            to a representative from the server team. `,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `I can understand the frustration. There has been a server outage and the server team is working on 
            fixing it. I’ve just sent them a message about your issue, and I am expecting to 
            hear back from them within a couple of hours, but either way, I’ll follow up with you by 2 pm with an update.`,
            "correct": "true",
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
        "content": `Hi, I am a Project Manager and I would like to cancel a project in Clarizen (project management software). 
        I’ve tried, but I cannot find where to do that. Can you explain how I can do that?`,
        "selected": "0",
        "choices": [
          {
            "content": `Sure, I will help you with that. Sometimes it is difficult to find these detailed instructions. 
            Project managers have access to cancel a project by updating the Project Execution Status to "Cancelled". 
            Here is what you need to do. First, open the project and then select "Actions" --> "Update Status" 
            then cancel. Why don’t you try it out to ensure this works for you?  `,
            "correct": "true",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `As a Project Manager, you can just update the status & if this does not work, review the PMO 
            documents for a job aid or please submit a General Issue Global IT ticket.`,
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
        "content": `Our systems have been down since this morning and we’re unable to process shipping from our plant. 
        Please Help!`,
        "selected": "0",
        "choices": [
          {
            "content": `Yes, there has been a system failure and the team is working on getting it resolved as soon as they can.`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `We are sorry for the inconvenience and we are working to restore service.  
            I do have an update I can share with you. We have replaced the hardware and 40% of the user 
            accounts have been restored and are back online. We are continuing to restore the remaining 
            accounts and we estimate they will be available by 3 pm.`,
            "correct": "true",
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
        "content": `Hi, I am not able to access any of my applications. I keep getting a weird 500 error each time. Can this be fixed?`,
        "selected": "0",
        "choices": [
          {
            "content": `Yes, and we are working to fix it. You will get a system notification once the servers are up and running.`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `Yes, those error messages can be confusing so let me help explain what is happening. We have 
            identified a problem with these applications and our team is hard at work in fixing the problem. We should 
            be up, in no more than 2 hours. We apologize for the inconvenience! Thank you for your patience!`,
            "correct": "true",
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
        "content": `Hi, I am a little confused about the ticket I submitted, and no one is calling me back. 
        Can you please let me know the status of ticket INC12345678?`,
        "selected": "0",
        "choices": [
          {
            "content": `You can actually do that yourself. Go to MyGlobal IT portal for further information on your ticket.`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `I apologize that no one has responded to you, but I am looking at your open ticket right now. 
            I can see that we will need to dig a bit deeper. I will contact the assigned analyst and ask them to get 
            back to you promptly.  `,
            "correct": "true",
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
        "content": `Hi, I am the Project Manager for one of the Manufacturing plants here in Cargill. We have
a scheduled outage this weekend that I need to get changes for. One of our customers put in a
last-minute order for product and we can no longer take the system down! How can we change
the outage window? If we don’t, we will lose money and customer loyalty!`,
        "selected": "0",
        "choices": [
          {
            "content": `I understand but am not sure if we can do anything. Last minute changes are really
difficult for us. Let me check with the project team and see where we are at with the testing.
However, we may just have to go ahead as planned. I will let you know as soon as possible`,
            "correct": "false",
            "feedback": [
              {
                "correct": "",
                "incorrect": ""
              }
            ]
          },
          {
            "content": `I understand, business needs always come first and don’t worry, I’ll check
right away to see where we are at with the upgrade plan. Either myself or a delegate will get
back to you to ensure we can change the outage window, so your customer is not impacted.`,
            "correct": "true",
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

  ngAfterViewInit(): void {
    this.show_question(0);
    //this.result_page = true;
    this.cdr.detectChanges();
  }

  show_choice(i) {
    this.selected_ques_no = i;
    this.selected_ques = this.quiz[i];
  }

  show_question(i) {
    this.current_ques_no = i;
    this.current_ques = this.quiz[i];
    this.ishidden = true;
    console.log(this.animText);
    if (this.animText !== undefined) {
      this.animText.animate();
    }
  }

  check(i) {
    this.current_ques.selected = i;
    this.ishidden = true;
    this.isnext = false;
    console.log(this.current_ques.selected)

  }
  getChoiceSelection(ans, i) {
    if (this.current_ques.selected == i && this.isnext) {
      console.log(ans)
      return ans.correct == 'false';
    }
    //console.log(ans.correct, this.current_ques.selected)

  }

  submit() {
    this.validateSingle(this.current_ques);
    this.isnext = true;
    this.ishidden = false;
    this.disabled = true;
    /*if (this.marks == 100) {
      document.getElementById("color").style.borderColor = "red";
    }*/
  }

  next() {
    this.current_ques_no++;
    if (this.current_ques_no < this.quiz.length) {
      this.current_no++;
      this.show_question(this.current_ques_no)
    } else {
      this.current_ques_no--;
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

    this.percentage = (this.marks / this.current_ques_no * 100) / 100;
    if (this.percentage == 100) {
      this.try = true;
      this.correct = true;
    }
    else {
      this.wrong = true
    }
  }

  validateSingle(current_ques) {

    if (this.current_ques.question.choices[this.current_ques.selected].correct == "true") {
      this.marks = this.marks + 100;
      this.current_ques.fullmark = true;
      this.current_ques.correct = true;
      this.feedback = this.response.empathic;
    }
    else {
      this.marks = this.marks + 50;
      this.current_ques.fullmark = false;
      this.current_ques.correct = false;
      this.feedback = this.response.normal;
    }
  }

  replay() {
    this.show_question(0);
    this.marks = 0;
    this.result_page = false;
    this.quiz.forEach(element => {
      element.fullmark = undefined;
      element.selected = undefined
    });
  }
}