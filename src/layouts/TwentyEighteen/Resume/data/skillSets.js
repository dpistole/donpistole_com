export const frontEndSkills = {
  JAVASCRIPT: "Javascript",
  REACT: "React",
  ANGULARJS: "AngularJS (1.x)",
  NPM: "NPM",
  BABEL: "Babel",
  WEBPACK: "Webpack",
  HTMLCSS: "HTML5 / CSS3",
  SASS: "Sass",
};


export const frontEndSkillSet = {
  title: "Front End Web Development",
  skills: [
    {
      skill: frontEndSkills.JAVASCRIPT,
    },
    {
      skill: frontEndSkills.REACT,
    },
    {
      skill: frontEndSkills.ANGULARJS,
    },
    {
      skill: frontEndSkills.NPM,
      skills: [
        {
          skill: frontEndSkills.BABEL,
        },
        {
          skill: frontEndSkills.WEBPACK,
        },
      ]
    },
    {
      skill: frontEndSkills.HTMLCSS,
    },
    {
      skill: frontEndSkills.SASS,
    },
  ]
};

export const backEndSkills = {
  NODEJS: "Node JS",
  PHP: "PHP",
  COMPOSER: "Composer",
  SYMFONY: "Symfony",
  LARAVEL: "Laravel",
};

export const backEndSkillSet = {
  title: "Back End Web Development",
  skills: [
    {
      skill: backEndSkills.NODEJS,
    },
    {
      skill: backEndSkills.PHP,
      skills: [
        {
          skill: backEndSkills.COMPOSER,
        },
        {
          skill: backEndSkills.SYMFONY,
        },
        {
          skill: backEndSkills.LARAVEL,
        }
      ]
    },
  ]
};

const systemsAdministratorSkills = {
  SERVERADMIN: "Server Administration (Linux/Windows/OSX)",
  AWS: "Amazon Web Services",
  AWS_EC2: "EC2",
  AWS_S3: "S3",
  AWS_CLOUDFRONT: "CloudFront",
  AWS_APIGATEWAY: "API Gateway",
  AWS_LAMBDA: "Lambda",
}

export const systemsAdministrationSkillSet = {
  title: "Systems Administration",
  skills: [
    {
      skill: systemsAdministratorSkills.SERVERADMIN,
    },
    {
      skill: systemsAdministratorSkills.AWS,
      skills: [
        {
          skill: systemsAdministratorSkills.AWS_EC2,
        },
        {
          skill: systemsAdministratorSkills.AWS_S3,
        },
        {
          skill: systemsAdministratorSkills.AWS_CLOUDFRONT,
        },
        {
          skill: systemsAdministratorSkills.AWS_APIGATEWAY,
        },
        {
          skill: systemsAdministratorSkills.AWS_LAMBDA,
        },
      ]
    },
  ]
}

export default {
  frontEndSkillSet,
  backEndSkillSet,
  systemsAdministrationSkillSet,
};
