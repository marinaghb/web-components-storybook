customElements.define("my-paragraph",
  class extends HTMLElement {

    constructor() {
      super();

      //const template = document.getElementById("custom-paragraph");
      const template = document.createElement("template");
      template.innerHTML = `
      <style>
        p {
          color: black;
          background-color: ${this.dataset["bg"]};
          padding: 5px;
        }

        .paragraph--primary {
 font-weight: bold;
          color:#f61414;
        }

        .paragraph--secondary {
          font-weight: lighter;
          color:#8bc18b;
        }
        }
      </style>
      <p class="paragraph--${this.dataset["mode"]}">
        <slot name="my-text">My default text</slot>
        </p>`;
      template.attributes.id = "custom-paragraph";

      const templateContent = template.content;

      this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );

      console.log("constructor");
    }
  }
);


/** Primary UI component for user interaction */

export const MyParagraph = ({ primary, backgroundColor = null, text }) => {
  /* const mode = primary ? "paragraph--primary" : "paragraph--secondary";

   console.log('export');
   return `
     <template id="custom-paragraph">
       <style>
         p {
           color: white;
           background-color: ${backgroundColor};
           padding: 5px;
         }

         .paragraph--primary {
           font-weight: bold;
         }

         .paragraph--secondary {
           font-weight: lighter;
         }
         }
       </style>
       <p class="${mode}">
         <slot name="my-text">My default text</slot>
       </p>
     </template>

     <my-paragraph>
       <span slot="my-text">${text}!</span>
     </my-paragraph>

     <my-paragraph>
       <ul slot="my-text">
         <li>${text}!</li>
         <li>In a list!</li>
       </ul>
     </my-paragraph>
   `;*/
};
