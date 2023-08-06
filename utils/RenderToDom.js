  //renders an element to the DOM upon specific CSS Id selector
  const renderToDom = (selectId, renderToHtml) => {
    const divId = document.querySelector(selectId);
    divId.innerHTML = renderToHtml;
  };

  export default renderToDom;
