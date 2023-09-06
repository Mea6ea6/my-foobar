// const ↓
const tools = document.querySelector('.tools__row');
const toolTemplate = document.querySelector('#tool-template').content.querySelector('.tools__block');

// function ↓
function createTool({link, img}) {
  const tool = toolTemplate.cloneNode(true);
  const toolLink = tool.querySelector('.tools__link');
  const toolImage = tool.querySelector('.tools__image');

  toolLink.setAttribute('href', link);
  toolImage.setAttribute('src', img);

  return tool;
}

function renderTool(data, position = 'append') {
  switch (position) {
    case 'append':
      tools.append(createTool(data));
      break;
    case 'prepend':
      tools.prepend(createTool(data));
      break;
    default:
      break;
  };
};