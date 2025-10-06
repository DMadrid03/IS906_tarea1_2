import { ContactList } from "./models/ContactList"; //Modelo
import { ContactView } from "./views/ContactView"; //Vista
import { ContactController } from "./controllers/ContactController";  //y controlador

//instancias
const contactos = new ContactList();
const vista = new ContactView();
const cont = new ContactController(contactos,vista);


cont.showContacts();
cont.add("Daniel Sánchez","danielmadrid@unah.hn","99502036")
cont.add("Kenneth Ramírez","karamirezm@unah.hn","99502037")
cont.showContacts();
cont.remove("1")
cont.showContacts();
cont.remove("5")
cont.showContacts();
