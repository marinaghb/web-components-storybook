import "./my-paragraph";


export default {
  title: "Components/My-paragraph",
  parameters: { layout: "centered" },
  render: (args) =>{
    return `<my-paragraph data-mode="${args.mode}" data-bg="${args.backgroundColor}">
              <span slot="my-text">${args.text}</span>
            </my-paragraph>`
  },
};

export const Primary = {
  args: {
    mode:'primary',
    text: 'Some text for primary paragraph',
    backgroundColor: '#ccc'
  },
};


export const Secondary = {
  args: {
    mode:'secondary',
    text: 'Some text for secondary paragraph',
    backgroundColor: '#555'
  },
};
