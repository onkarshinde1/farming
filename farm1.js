function openPage(pageUrl) {
    // Open a new page
    var newPage = window.open(pageUrl);

    // Add some information to the new page
    // This example adds a simple message
    newPage.onload = function () {
        newPage.document.body.innerHTML += '<div class="info"><p>This is some additional information about the product.</p></div>';
    };
}
