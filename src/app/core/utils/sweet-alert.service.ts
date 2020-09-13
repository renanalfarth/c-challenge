import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class SweetAlertService {

    constructor() { }

    showMessage(params: any): void {
        Swal.fire(params);
    }

    showConfirmationDialog(params: any): any {
        const {
            icon,
            title,
            text,
            confirmButtonText,
        } = params;
        return Swal.fire({
            title,
            text,
            icon: icon || 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: confirmButtonText || 'Confirm',
        });
    }

    showError(message: string): any {
        this.showConfirmationDialog({
            icon: 'error',
            title: 'Oops...',
            text: `An error ocurred while retrieving information from the server: ${message}`,
        });
    }

    showSuccess(message: string): any {
        this.showConfirmationDialog({
            icon: 'success',
            title: 'Saved',
            text: message,
        });
    }

}
