import { Contact } from "../models/Contact";

export class ContactView{

    public displayContacts(contacts: Contact[]): void{

        console.log("************************Mostrando Lista de contactos************************")
        contacts.forEach(contacto => {
            console.log(`Identificador del contacto: ${contacto.id}`)
            console.log(`Nombre:       ${contacto.nombre}`)
            console.log(`Email:        ${contacto.email}`)
            console.log(`Teléfono:     ${contacto.telefono}`)
        });
        console.log("************************Fin de la Lista de contactos************************")

    }

    public displayMessage(message: string): void{
        console.log(`i: ${message}`);
    }
}
