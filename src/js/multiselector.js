

function getOptions(isFilter) {
    return {
        enableFiltering: isFilter,
        enableCaseInsensitiveFiltering: isFilter,
        filterPlaceholder: 'Search ...',
        nonSelectedText: 'Check an option!',
        numberDisplayed: 0,
        maxHeight: 400,
        includeSelectAllOption: true,
        onDropdownHidden: function(event) {
            console.log('Dropdown closed.');
        },
        onSelectAll: function() {
            console.log('onSelectAll triggered!');
        }
    }
}

$(document).ready(function() {
    $('#DDLState').multiselect(getOptions(true));
});