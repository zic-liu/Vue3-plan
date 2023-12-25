import { Directive, DirectiveBinding } from "vue";

const copy: Directive = {
  beforeMount(el, binding) {
    // const success = binding.arg; // 指令参数
    el.targetContent = binding.value.toString();
    el.addEventListener("click", () => {
      if (!el.targetContent) return console.log("没有要复制的内容");
      const textarea = document.createElement("textarea");
      textarea.readOnly = true;
      textarea.style.position = "fixed";
      textarea.style.top = "-99999px";
      // 把复制目标赋给 textarea
      textarea.value = el.targetContent;
      document.body.appendChild(textarea);
      textarea.select();
      const res = document.execCommand("Copy");
      res && console.log("复制成功：", el.targetContent);
      // res && success
      //   ? success(el.targetContent)
      //   : console.log("复制成功：", el.targetContent);
      document.body.removeChild(textarea);
    });
  },
  updated(el, binding) {
    el.targetContent = binding.value;
  },
  unmounted(el) {
    el.removeEventListener("click");
  },
};

export default copy;
