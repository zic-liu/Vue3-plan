import { Directive, DirectiveBinding } from "vue";
import MenuContext from "./index.vue";

const ownPermission = ["admin", "user"];
function toolPermission() {}

const permission: Directive = {};

export default permission;
