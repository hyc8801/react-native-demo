import Realm from "realm";
import user_table from "./user_table";


let realm = new Realm({ schema: [user_table] });


export default realm