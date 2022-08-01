import { FormArray, FormBuilder, FormControl, Validators } from "@angular/forms";

export function formArray(){
  return new FormBuilder().group({
    playerName: new FormArray([new FormControl("", Validators.required )])
  }
  )
}
