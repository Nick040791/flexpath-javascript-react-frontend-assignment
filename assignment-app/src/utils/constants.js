export const FILTER_TYPE_OPTIONS =
[
    {
        value:'', 
        label: 'All', 
    },
    {
        value: 'gender',
        label: 'Gender',
    },
        {
        value:'operatingSystem',
        label: 'Operating System', 
    },
    {
        value: 'model',
        label: 'Model',
    },
        {
        value: 'behaviorclass',
        label: 'Behavior Class',
    },
];

export const VALID_FILTER_TYPES = new Set ([
    '', 'gender', 'operatingSystem', 'model', 'behaviorclass',
]);

export const METRIC_FIELDS = [
    {
        key: 'App Usage Time (min/day)',
        title: 'App Usage Time',
        unit: 'Minutes',
    },
    {
       key: 'Screen On Time (hours/day)',
       title: 'Screen On Time',
       unit: 'Hours',
    },
    {
        key: 'Number of Apps Installed',
        title: 'Number of Apps',
        unit: 'Apps',
    },
    {
        key: 'Age',
        title: 'Age',
        unit: 'Years',
    },
];



