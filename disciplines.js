/**
 * ChainGrade — Shared Discipline Options
 * Single source of truth for all course/discipline selects.
 * Rendered dynamically into any <select> with data-discipline-select attribute.
 */

var DISCIPLINES = [
    {
        label: 'Science & Technology',
        options: [
            { value: 'cs',    label: 'Computer Science' },
            { value: 'se',    label: 'Software Engineering' },
            { value: 'it',    label: 'Information Technology' },
            { value: 'dsai',  label: 'Data Science & Artificial Intelligence' },
            { value: 'cyber', label: 'Cybersecurity & Digital Forensics' },
            { value: 'math',  label: 'Mathematics & Applied Mathematics' },
            { value: 'stat',  label: 'Statistics & Actuarial Science' },
            { value: 'phys',  label: 'Physics' },
            { value: 'chem',  label: 'Chemistry' },
            { value: 'bio',   label: 'Biology & Biochemistry' },
            { value: 'envs',  label: 'Environmental Science' },
            { value: 'agri',  label: 'Agriculture & Food Science' },
            { value: 'geo',   label: 'Geography & Earth Science' }
        ]
    },
    {
        label: 'Engineering',
        options: [
            { value: 'ee',   label: 'Electrical & Electronics Engineering' },
            { value: 'me',   label: 'Mechanical Engineering' },
            { value: 'ce',   label: 'Civil & Structural Engineering' },
            { value: 'che',  label: 'Chemical Engineering' },
            { value: 'ae',   label: 'Aerospace Engineering' },
            { value: 'bme',  label: 'Biomedical Engineering' },
            { value: 'enve', label: 'Environmental Engineering' },
            { value: 'te',   label: 'Telecommunication Engineering' },
            { value: 'mfg',  label: 'Manufacturing & Industrial Engineering' },
            { value: 'pet',  label: 'Petroleum Engineering' },
            { value: 'eng',  label: 'General Engineering' }
        ]
    },
    {
        label: 'Health Sciences',
        options: [
            { value: 'med',    label: 'Medical Sciences & Medicine' },
            { value: 'nhs',    label: 'Nursing & Health Sciences' },
            { value: 'pharm',  label: 'Pharmacy & Pharmaceutical Sciences' },
            { value: 'pubh',   label: 'Public Health & Epidemiology' },
            { value: 'dent',   label: 'Dentistry & Oral Health' },
            { value: 'vet',    label: 'Veterinary Science' },
            { value: 'nutri',  label: 'Nutrition & Dietetics' },
            { value: 'physio', label: 'Physiotherapy & Rehabilitation' },
            { value: 'mlt',    label: 'Medical Laboratory Technology' }
        ]
    },
    {
        label: 'Business & Economics',
        options: [
            { value: 'biz',  label: 'Business Administration & Management' },
            { value: 'acct', label: 'Accounting & Finance' },
            { value: 'mkt',  label: 'Marketing & Advertising' },
            { value: 'hrm',  label: 'Human Resource Management' },
            { value: 'scl',  label: 'Supply Chain & Logistics' },
            { value: 'econ', label: 'Economics' },
            { value: 'ib',   label: 'International Business' },
            { value: 'ent',  label: 'Entrepreneurship & Innovation' },
            { value: 'bank', label: 'Banking & Insurance' },
            { value: 're',   label: 'Real Estate & Property Management' }
        ]
    },
    {
        label: 'Social Sciences & Law',
        options: [
            { value: 'law',   label: 'Law & Legal Studies' },
            { value: 'pols',  label: 'Political Science & Governance' },
            { value: 'ir',    label: 'International Relations & Diplomacy' },
            { value: 'psych', label: 'Psychology' },
            { value: 'soc',   label: 'Sociology & Anthropology' },
            { value: 'sw',    label: 'Social Work & Community Development' },
            { value: 'edu',   label: 'Education & Teaching' },
            { value: 'hist',  label: 'History' },
            { value: 'phil',  label: 'Philosophy & Ethics' },
            { value: 'ling',  label: 'Linguistics & Language Studies' },
            { value: 'dev',   label: 'Development Studies' }
        ]
    },
    {
        label: 'Arts, Media & Design',
        options: [
            { value: 'arch',    label: 'Architecture & Urban Planning' },
            { value: 'arts',    label: 'Fine Arts & Visual Design' },
            { value: 'media',   label: 'Media, Journalism & Communication' },
            { value: 'film',    label: 'Film, Theatre & Performing Arts' },
            { value: 'music',   label: 'Music & Musicology' },
            { value: 'fashion', label: 'Fashion Design & Textile' },
            { value: 'gd',      label: 'Graphic & Digital Design' }
        ]
    },
    {
        label: 'Other Disciplines',
        options: [
            { value: 'tour',  label: 'Tourism, Hospitality & Events' },
            { value: 'sport', label: 'Sports Science & Physical Education' },
            { value: 'lis',   label: 'Library & Information Science' },
            { value: 'rel',   label: 'Religious Studies & Theology' },
            { value: 'mil',   label: 'Military & Security Studies' },
            { value: 'other', label: 'Other / Interdisciplinary' }
        ]
    }
];

/**
 * Populate a <select> element with discipline optgroups.
 * @param {HTMLSelectElement} selectEl   - the target select element
 * @param {boolean}           addBlank   - whether to prepend a blank placeholder option
 * @param {string}            blankLabel - text for the blank option
 */
function populateDisciplineSelect(selectEl, addBlank, blankLabel) {
    selectEl.innerHTML = '';
    if (addBlank) {
        var blank = document.createElement('option');
        blank.value = '';
        blank.textContent = blankLabel || '-- Filter by Course --';
        selectEl.appendChild(blank);
    }
    DISCIPLINES.forEach(function (group) {
        var og = document.createElement('optgroup');
        og.label = group.label;
        group.options.forEach(function (opt) {
            var o = document.createElement('option');
            o.value = opt.value;
            o.textContent = opt.label;
            og.appendChild(o);
        });
        selectEl.appendChild(og);
    });
}

/** Auto-render all selects that declare data-discipline-select */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-discipline-select]').forEach(function (el) {
        var hasBlank = el.dataset.disciplineSelect === 'filter';
        populateDisciplineSelect(el, hasBlank, el.dataset.blankLabel || undefined);
    });
});
