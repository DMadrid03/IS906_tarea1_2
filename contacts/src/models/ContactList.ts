import { Contact } from "./Contact";

export class ContactList{

    constructor(
        private contacts: Contact[] = []

    ){}

    public getContacts(): Contact[]{
        return this.contacts;
    }

    public addContact(nombre:string, email: string, telefono: string): Contact{
        //obtener el último id
        let id = (this.contacts[this.contacts.length - 1]?.id || 0 ).toString();
        id = (parseInt(id) + 1).toString();

        const newContact = new Contact(id, nombre, email, telefono);
        this.contacts.push(newContact);
        return newContact;
    }

    public deleteContact(id: string): boolean{
        const index = this.contacts.findIndex(contact => contact.id === id);        
        if(index !== -1)
        {
            this.contacts.splice(index,1)
            return true
        }
        return false;
    }
}
