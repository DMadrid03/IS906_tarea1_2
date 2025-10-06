import { Contact } from "../models/Contact";

export class ContactView{

    constructor(){}
    public displayContacts(contacts: Contact[]): void{

        if(contacts.length === 0){
            console.log("")
            console.log("   ************************No hay contactos para mostrar.************************")
            console.log("")
            return;
        }
        console.log("")
        console.log("")
        console.log("************************Mostrando Lista de contactos************************")
        contacts.forEach(contacto => {
            console.log("--------------------------------------------------")
            console.log(`Identificador del contacto: ${contacto.id}`)
            console.log(`   Nombre:       ${contacto.nombre}`)
            console.log(`   Email:        ${contacto.email}`)
            console.log(`   Teléfono:     ${contacto.telefono}`)
        });
        console.log("************************Fin de la Lista de contactos************************")
        console.log("")
        console.log("")

    }

    public displayMessage(message: string): void{
        console.log(`i: ${message}`);
    }
}
