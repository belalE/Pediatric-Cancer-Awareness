const typesBar = document.querySelector('#typesBar');
const barItems = document.querySelectorAll('.barItem');

const title = document.querySelector('#title');
const percentage = document.querySelector('#percentage');
const diseaseLocation = document.querySelector('#location');
const ageGroup = document.querySelector('#ageGroup');

const leukemia = {title: 'Leukemia', percentage: 28, diseaseLocation: 'blood and bone marrow', ageGroup: 'children of all ages'};
const cns = {title: 'Brain and CNS Tumors', percentage: 26, diseaseLocation: 'brain and spine (central nervous system)', ageGroup: 'children of all ages'};
const lymphomas = {title: 'Lymphomas', percentage: 8, diseaseLocation: 'lymph nodes and other lymph tissues (tonsils/thymus)', ageGroup: 'young children older than 3 years old and adults or children above the age of 5 for Non-Hodgkin and Hodgkin lymphomas, respectively'};
const neuroblastoma = {title: 'Neuroblastoma', percentage: 6, diseaseLocation: 'nerve cells from fetus and embryo', ageGroup: 'infants and young children less than 10 years old'};
const wilms = {title: 'Wilms Tumor', percentage: 5, diseaseLocation: '1 or both kidneys', ageGroup: '3 or 4 year olds'};
const rhabdomyosarcoma = {title: 'Rhabdomyosarcoma', percentage: 3, diseaseLocation: 'cells that develop into skeletal muscles', ageGroup: 'young children less than 10 years old'};
const bonecancer = {title: 'Bone Cancer', percentage: 3, diseaseLocation: 'bones', ageGroup: 'older children and teenagers'};
const retinoblastoma = {title: 'Retinoblastoma', percentage: 2, diseaseLocation: 'the retina in the eyes', ageGroup: 'young children around 2 years old'};
const other = {title: 'Other', percentage: 19, diseaseLocation: '', ageGroup: ''};

const diseaseDict = {'leukemia': leukemia, 'cns' : cns, 'lymphomas': lymphomas,'neuroblastoma': neuroblastoma, 'wilms': wilms, 'rhabdomyosarcoma' : rhabdomyosarcoma, 'bonecancer' : bonecancer, 'retinoblastoma' : retinoblastoma, 'other' : other};


for (barItem of barItems) {
    const id = barItem.id;
    barItem.addEventListener('mouseover', () => {
        updatePage(id)
    })
}

function updatePage(id) {
    const disease = diseaseDict[id];
    for (item of barItems) {
        item.classList.remove('selected');
    }
    title.textContent = disease.title;
    percentage.textContent = `${disease.percentage}% of all childhood cancer`;
    if (id == 'other') {
        diseaseLocation.classList.add('hidden');
        ageGroup.classList.add('hidden');
    } else {
        diseaseLocation.classList.remove('hidden');
        ageGroup.classList.remove('hidden');
    }
    diseaseLocation.textContent = `Occurs in ${disease.diseaseLocation}`;
    ageGroup.textContent = `Most common in ${disease.ageGroup}`
    const div = document.querySelector(`#${id}`);
    div.classList.add('selected');
}