export type TPortfolio = {
  name: string;
  description: string;
  link: string;
  technologies: Array<{
    id: string;
    title: string;
  }>;
  image: {
    url: string;
  };
};

export type TQualification = {
  id: string;
  direction: "left" | "right";
  type: "education" | "experience";
  startdate: string;
  enddate: string;
  title: string;
  subtitle: string;
  link: string;
  technologies: Array<{
    id: string;
    title: string;
  }>;
};

export type TTechnology = {
  id: string;
  title: string;
  description: string;
  type: "tech" | "tool";
  picture: {
    image: {
      url: string;
    };
    alternative: string;
  };
};

export type TAuthor = {
  name: string;
  title: string;
  resume: string;
  about: {
    html: string;
  };
  pictures: Array<{
    alternative: string;
    image: {
      url: string;
    };
  }>;
};

export type TPost = {
  title: string;
  excerpt: string;
  createdAt: string;
  slug: string;
  coverImage: {
    url: string;
  };
  author: {
    pictures: Array<{
      alternative: string;
      image: {
        url: string;
      };
    }>;
    name: string;
    title: string;
  };
};
