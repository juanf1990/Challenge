const projects = [
    'single-price-grid-component-master',
    'fylo-landing-page-with-two-column-layout-master',
    'challenge-3',
    'challenge-4'
];

const list=document.getElementById('list');
console.log(list)
projects.forEach((project, i) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${project}/index.html`;
    link.innerText = `${i + 1}.${formatProjectName(project)}`;

    const img = document.createElement('img');
    img.src = `${project}/design/desktop-design.jpg`;

    link.prepend(img);
    listItem.appendChild(link);
    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
}