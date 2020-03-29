import { Component, OnInit } from '@angular/core'; 
import { FormControl ,FormBuilder, FormGroup,Validators} from '@angular/forms';  
import { MustMatch } from './must-match.validator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fname:['',Validators.required],
        age: ['',Validators.required],
        mno:['',Validators.required, Validators.minLength[10]],
        password: ['',Validators.required,Validators.minLength[6]],
        acceptTerms: [false, Validators.requiredTrue]
      
      },
      );
  }

  get f()
  {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if(this.registerForm.invalid)
    {
      return;
    }

    alert('SUCCESS !! :- \n\n' +JSON.stringify(this.registerForm.value, null,4 ));

  }

  OnReset()
  {
    this.submitted = false;
    this.registerForm.reset();
  }
}
