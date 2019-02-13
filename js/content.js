
// remove sidebars

const showDetails = document.createElement('div');
showDetails.innerHTML =
    '<a id="show-details" class="d-inline-flex ai-center ws-nowrap s-btn s-btn__primary">Show Details</a>';
document.getElementById('question-header').appendChild(showDetails);

const page = document.querySelector('.question-page');
page.classList.add('minimal-stack-overflow');

// toggle show details

showDetails.addEventListener('click',function() {
    page.classList.toggle('minimal-stack-overflow');
    const showDetailsLink = document.getElementById('show-details');

    if (page.classList.contains('minimal-stack-overflow')) {
        showDetailsLink.innerHTML = "Show Details";
        return
    }
    showDetailsLink.innerHTML = "Hide Details";
});
