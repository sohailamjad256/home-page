import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
   //  name: any= null;
   //  email: any= null;
   // engines: any[]= [];
   // notes: any = null;


  engineLsit: string[] =  [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]



  constructor() {

  }

  ngOnInit() {
  }
  onRegnForm(): void {
          Swal.fire( {
            icon: 'success',
            title: 'Saved',
            allowOutsideClick: false
            })
  }


  // showMe() : void {
  //   Swal.fire({
  //     title: 'Do you want to see more?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: `Save`,
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire('Saved!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //     }
  //   })
  // }

  onSignUp() : void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
      width: '500px',
      allowOutsideClick: false


    })
  }

}
