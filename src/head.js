function head() {
  const head = document.createElement('head');
  head.innerHTML = `
    <title>Little chef's</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css" />
  `;
  return head;
}

export default head;
