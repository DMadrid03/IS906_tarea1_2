import { ContactList } from "../models/ContactList";
import { ContactView } from "../views/ContactView";

export class ContactController{

    constructor(public contactos: ContactList,public vista: ContactView){}

    public add(nombre:string, email:string, telefono:string):void{
        this.vista.displayMessage("Añadiendo contacto nuevo...")
        this.contactos.addContact(nombre,email,telefono)
        this.vista.displayMessage("¡Contacto añadido con éxito!")        
    }

    public remove(id:string):void{
        this.vista.displayMessage("Eliminando contacto:" + id)
        const success = this.contactos.deleteContact(id)
        if(success){
            this.vista.displayMessage("Contacto encontrado.")
            this.vista.displayMessage("¡Contacto eliminado con éxito!")
        }else{
            this.vista.displayMessage("No se encontró el contacto con id: " + id)
        }
    }

    public showContacts():void{
        const contacts = this.contactos.getContacts();
        this.vista.displayContacts(contacts);
    }
    
}