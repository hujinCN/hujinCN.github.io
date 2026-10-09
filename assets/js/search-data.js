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
  },{id: "nav-research",
          title: "Research",
          description: "Generative evaluation and adaptive optimization for trustworthy visual and multimodal AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-published-by-tpami-2026-this-work-dynamicpae-investigates-and-addresses-the-training-challenges-inherent-in-the-end-to-end-conditional-generation-of-physical-adversarial-examples-paes-code-is-now-available-at-github",
          title: 'One paper published by TPAMI 2026. This work (DynamicPAE) investigates and addresses the...',
          description: "",
          section: "News",},{id: "news-two-co-authored-papers-on-the-3d-adversarial-attacks-submitted-to-acm-multimedia-2026",
          title: 'Two co-authored papers on the 3D adversarial attacks submitted to ACM Multimedia 2026....',
          description: "",
          section: "News",},{id: "news-we-co-organized-the-6th-advml-workshop-on-safety-of-vision-language-agents-at-cvpr-2026-held-on-june-4-in-denver-the-workshop-brought-together-research-on-reliable-visual-and-multimodal-systems",
          title: 'We co-organized the 6th AdvML Workshop on Safety of Vision-Language Agents at CVPR...',
          description: "",
          section: "News",},{id: "news-miugs-has-been-accepted-at-acm-multimedia-2026-the-work-studies-a-shared-3d-representation-for-adversarial-objects-observed-by-cameras-and-lidar-the-project-repository-is-available",
          title: 'MiuGS has been accepted at ACM Multimedia 2026. The work studies a shared...',
          description: "",
          section: "News",},{id: "news-a-co-authored-paper-has-been-accepted-for-an-oral-presentation-2-8-at-prcv-2026",
          title: 'A co-authored paper has been accepted for an oral presentation (2.8%) at PRCV...',
          description: "",
          section: "News",},{id: "news-one-first-author-paper-submitted-to-iclr-2027",
          title: 'One first-author paper submitted to ICLR 2027.',
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
