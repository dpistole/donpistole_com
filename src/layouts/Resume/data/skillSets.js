
export const frontEndSkillSet = {
  title: "Front End Web Development",
  skills: [
    {
      skill: "Javascript",
    },
    {
      skill: "React",
    },
    {
      skill: "Tooling",
      skills: [
        {
          skill: "NPM",
        },
        {
          skill: "Babel",
        },
        {
          skill: "Webpack",
        },
      ]
    },
  ]
};

export const backEndSkillSet = {
  title: "Back End Web Development",
  skills: [
    {
      skill: "Node JS"
    },
    {
      skill: "PHP",
      skills: [
        {
          skill: "Composer",
        },
        {
          skill: "Symfony",
        },
        {
          skill: "Laravel",
        }
      ]
    },
  ]
};

export const systemsAdministrationSkillSet = {
  title: "Systems Administrator",
  skills: [
    {
      skill: "Server Administration (Linux/Windows/OSX)",
    },
    {
      skill: "Amazon Web Services",
      skills: [
        {
          skill: 'EC2',
        },
        {
          skill: 'S3',
        },
        {
          skill: 'CloudFront',
        },
        {
          skill: 'API Gateway',
        },
        {
          skill: 'Lambda',
        },
      ]
    },
    {
      skill: "Desktop Support (Linux/Windows/OSX)"
    }
  ]
}

export default {
  frontEndSkillSet,
  backEndSkillSet,
  systemsAdministrationSkillSet,
};
