import { Directive, DirectiveBinding } from "vue";

const ownPermission = ["admin", "user"];
function toolPermission(el: HTMLElement, permission: string) {
    if (permission && !ownPermission.includes(permission)) {
        el.parentNode && el.parentNode.removeChild(el)
    }
}

const permission: Directive = {
    mounted(el, binding: DirectiveBinding) {
        toolPermission(el, binding.value)
    },
    updated(el, binding) {
        toolPermission(el, binding.value)
    }
};

export default permission;