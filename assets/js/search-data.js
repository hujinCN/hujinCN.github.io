// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-are-organizing-the-workshop-the-6th-workshop-of-adversarial-machine-learning-on-computer-vision-safety-of-vision-language-agents-at-cvpr-2026-june-3-or-june-4-the-workshop-will-feature-distinguished-paper-awards-and-competition-prizes-we-warmly-welcome-your-attention-and-submissions",
          title: 'We are organizing the workshop The 6th Workshop of Adversarial Machine Learning on...',
          description: "",
          section: "News",},{id: "news-one-paper-published-by-tpami-2026-stemming-from-my-first-research-project-as-the-lead-author-this-work-dynamicpae-investigates-and-addresses-the-training-challenges-inherent-in-the-end-to-end-conditional-generation-of-physical-adversarial-examples-code-is-now-available-at-https-github-com-hujincn-dynamicpae",
          title: 'One paper published by TPAMI 2026. Stemming from my first research project as...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%6A%69%6E@%62%75%61%61.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hujinCN", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NonPRYwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
