export const seedData = [
    {
        id: 1,
        abbvName: 'CS3220',
        fullName: 'Web and Internet Programming',
        todos: [
          { description: 'Install Apache Tomcat', done: true, edit: false },
          { description: 'Install MySQL', done: true, edit: false },
          { description: 'Install Eclipse', done: false, edit: false }
        ],
        active: false
      },
      {
      id: 2,
      abbvName: 'CS4220',
      fullName: 'Current Trends in Web Design and Development',
      todos: [
        { description: 'Identify group members', done: true, edit: false },
        { description: 'Establish roles within group', done: false, edit: false },
        { description: 'Delegate work assignments', done: false, edit: false },
      ],
      active: true
    },
    {
        id: 3,
        abbvName: 'CS5660',
        fullName: 'Advanced Topics in Artificial Intelligence',
        todos: [
          { description: 'Re-Evaluate Life', done: true, edit: false },
          { description: 'Fight the Singularity', done: false, edit: false },
        ],
        active: false
      }
  ]
  