export default {
  groups: [
    {
      name: 'Interests',
      controls: [
        {
          type: 'select',
          options: [{ value: 0, label: 'Not interested' }, { value: 1, label: 'Interested' }, { value: 2, label: 'Experienced' }],
          label: 'Algorithms',
          name: 'algorithms'
        },
        {
          type: 'select',
          options: [{ value: 0, label: 'Not interested' }, { value: 1, label: 'Interested' }, { value: 2, label: 'Experienced' }],
          label: 'Scientific Modeling',
          name: 'modeling'
        },
        {
          type: 'select',
          options: [{ value: 0, label: 'Not interested' }, { value: 1, label: 'Interested' }, { value: 2, label: 'Experienced' }],
          label: 'Web Technologies',
          name: 'web'
        },
        {
          type: 'select',
          options: [{ value: 0, label: 'Not interested' }, { value: 1, label: 'Interested' }, { value: 2, label: 'Experienced' }],
          label: 'Mobile Technologies',
          name: 'mobile',
        },
        {
          type: 'select',
          options: [{ value: 0, label: 'Not interested' }, { value: 1, label: 'Interested' }, { value: 2, label: 'Experienced' }],
          label: 'Artificial Intelligence',
          name: 'ai',
        }
      ]
    },
    {
      name: 'Working format',
      controls: [
        {
          type: 'radio',
          options: [{ value: 0, label: 'More distance' }, { value: 1, label: 'Equal' }, { value: 2, label: 'More Face to Face' }],
          label: 'Meetings format',
          name: 'meetings',
        }
      ]
    },
    {
      name: 'Details',
      controls: [
        {
          type: 'input',
          // options:[{value:0,label:'More distance'},{value:1,label:'Equal'},{value:2,label:'More Face to Face'}],
          label: 'Name',
          name: 'name',
        },
        {
          type: 'input',
          // options:[{value:0,label:'More distance'},{value:1,label:'Equal'},{value:2,label:'More Face to Face'}],
          label: 'Surname',
          name: 'surname',
        },
      ],
    },
  ],
}
