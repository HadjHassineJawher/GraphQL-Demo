const skills = [
  {
    id: 1,
    language: "JavaScript",
    experience: 3,
    Student: {
      _id: 1,
      name: "Jawher",
      lastname: "Hadj Hassine",
      Skills: {
        id: 1,
        language: "JavaScript",
        experience: 3,
      },
    },
  },
  {
    id: 2,
    language: "Java",
    experience: 1,
    Student: {
      _id: 1,
      name: "Mohammed Aziz",
      lastname: "Hannafi",
      Skills: {
        id: 2,
        language: "Java",
        experience: 3,
      },
    },
  },
];

module.exports = {
  hello: () => "Hello world!",
  // query
  getSkills: async () => {
    try {
      return skills;
    } catch (err) {
      throw err;
    }
  },

  postSkill: async (args, req) => {
    try {
      let skill = {
        id: args.input.id,
        language: args.input.language,
        experience: args.input.experience,
      };
      skills.push(skill);
      return skill;
    } catch (err) {
      throw err;
    }
  },
};
