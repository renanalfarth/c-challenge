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
            cancelButtonText
        } = params;
        return Swal.fire({
            title: title,
            text: text,
            icon: icon || 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtonText || 'Confirmar',
            cancelButtonText: cancelButtonText || 'Cancelar'
        });
    }

}
