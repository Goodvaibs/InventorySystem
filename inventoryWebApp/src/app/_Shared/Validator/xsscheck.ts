import { FormGroup } from '@angular/forms';
    
export function Xsscheck(controlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if (control.value.includes('<script>') || control.value.includes('</script>')) {
            control.setErrors({ xss_check: true });
        } else {
            control.setErrors(null);
        }
    }
}