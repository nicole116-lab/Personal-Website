// ============================================================
// SHARED SITE DATA
// Both index.html (main site) and ideation.html (the standalone
// Ideation & Prototyping page) load THIS file for their project
// lists. Edit projects here ONCE and both pages update together —
// you never need to touch this in two places.
//
// Copy an existing { ... } block, paste it, and change the text
// to add a new project. tag is optional — leave it as "" to hide it.
//
// Two more OPTIONAL fields you can add to any project:
//   fullDesc: "A longer write-up..."   (else it reuses desc)
//   images: ["https://.../image1.jpg", "https://.../image2.jpg"]
//   link: "https://..."  (shows an external link button on the detail page)
// ============================================================

  const previousWork = [
    {
      year: "2024",
      title: "Project title",
      desc: "A short description of the project — what it is, what you made, and the role you played. Swap this out with your real previous work.",
      tag: "Category / medium",
      fullDesc: "The longer version shown on the detail page once someone clicks in — process, decisions, what you learned. Delete this line to just reuse desc instead.",
      images: [],
      link: ""
    },
    {
      year: "2023",
      title: "Project title 2",
      desc: "Another placeholder entry. Keep descriptions to a sentence or two — the work should speak for itself once images or links are added.",
      tag: "Category / medium",
      link: ""
    }
  ];

  const classWork = {
    ideation: [
      // { year: "2025", title: "Assignment name", desc: "What you made and why.", tag: "Ideation & Prototyping", link: "" },
    ],
    coding: [
      // { year: "2025", title: "Assignment name", desc: "What you made and why.", tag: "Creative Coding", link: "" },
    ],
    research: [
      {
        year: "2026",
        title: "Intellectual Bibliography",
        desc: "How a childhood conflict with my parents, a linguistics class, and a distaste for predatory app design led me into UX design.",
        tag: "Research Methods",
        fullDesc: `I have always been an observer for as long as I can remember. I can't stop watching the people around me, curious about "who they really are." By this, I mean what they are doing and why they are doing it. I'm dying to understand the logic behind their actions, to know what their inner world is like.

I still remember a chaotic period in my family when I was a teenager. During that time, I started to voice my own thinking and logic, which rarely matched my parents'. It turned into mental conflict, and we fought almost every day. Gradually, I grew tired of this and began to wonder: why was our relationship turning so intense? We used to get along fine, so what had changed? Coincidentally, I came across a theory in a magazine, which said that what lies behind conflict is usually unmet needs——I later figured out this was Marshall Rosenberg's Nonviolent Communication theory——and it gave me a hint. I tried to think about what my parents' needs truly were, and started adjusting the way I communicated with them, especially trying to make them happy in order to make them willingly give me what I wanted (which sounds a little scheming, but it was the smartest way a kid at that age could think of to get what she wanted). I would say this was the beginning, or even the "giant leap" of my "UX design."

Later, I went to college and majored in English. There, I encountered linguistics, which gave me another lens for understanding people's needs. This time not through conflict, but through words and the meanings behind them. It opened up a whole new world for me. It was the first time I learned that language could be analyzed with real structure, from words to context, and that every layer carried real meaning, because language is never purely about exchanging information, it is instrumental, social, and conventional. Behind every casual exchange lies an underlying structure of rules, negotiation, and intention. This echoed what I had stumbled onto as a teenager, and made me realize that communication and needs could be studied systematically and professionally, something I found myself genuinely excited to pursue further.

So I shifted into the field of interaction design, focusing mainly on user experience. I was drawn to practical projects, motivated to help different people meet different needs, and especially drawn to taking a concept all the way from observation and research to a final solution. At first, I worked on several projects on my own, researching whatever interested me, and it felt like swimming freely in an open ocean. It was also during that period that I began to think seriously about what kind of designer I wanted to become——or, put another way, what I wanted to bring into the world, and what kinds of problems I wanted to help people solve. I noticed that almost every Chinese app suffers from the same problem: an overload of splash ads. Users can be automatically redirected to another platform just by shaking their screen, and endless fake "close" buttons are deliberately designed to trick people into clicking. This unsettled me deeply. I saw it as a symptom of a toxic ecosystem——one spanning capital, designers, and users alike——whose influence runs far deeper than we tend to assume. I only wanted to be part of a healthier design ecosystem. Around that time, I read Mike Monteiro's Design Is a Job, in which he writes that designers should "carefully choose the projects you take on, you are responsible for the work you put into the world... and you are a part of a long lineage of designers who fought to be listened to and respected." That was when I realized my real goal, even to say, my belief, was to become a responsible, empathetic designer, and person.

Once I had figured out what kind of person I wanted to be, I started thinking about how to actually become that person, and quickly realized how shallow my foundation still was. I lacked a structured knowledge system: a coherent way of thinking, sufficient background knowledge, and a method for turning ideas into execution. That was when I decided to pursue graduate school in a field related to interaction design. Not only to sharpen my skills and gain more knowledge, but to explore a wider range of sub-fields and find where my real passion lies, since what I had been exposed to so far was mostly limited to user-related work.

Since coming to IDM, I've felt genuinely excited and satisfied with the program. I used to assume IDM would lean heavily toward art, but after arriving, I found that its curriculum and framework suit me very well. From foundational theory all the way to final execution, there's a corresponding course for nearly every step of the process: it's remarkably practical, which excites me and makes me feel like I'll learn a great deal here. I've also met people from many different backgrounds, which I find fascinating; even though we're all in the same broad program, everyone's background and direction turns out to be quite different once you look closely. That diversity has broadened my perspective, and everyone's sense of passion has kept me motivated too.

That said, I still feel my understanding of this field is quite limited, so I'm currently doing extensive reading to build up my foundational knowledge of interaction design. My plan is to first establish the necessary vocabulary and basic frameworks, and then fill them in with what I continue to learn.

In my first year at IDM, I hope to find the direction I'm genuinely interested in, build real strength in that area, and commit to it. Hopefully producing a few interesting projects that truly represent who I am. Ideally, I'd also find collaborators I can work alongside on meaningful work. Two or three years after graduating, I hope to have the ability to contribute meaningfully within a company. BTW I'm something of a workaholic, so I genuinely want to build a real career for myself.`,
        images: [],
        link: ""
      }
    ]
  };

  // ============================================================
  // ID + LOOKUP TABLE
  // Every project needs a unique id so a click can look it up later.
  // We generate it automatically from the title (spaces -> dashes,
  // lowercase). "My Poster Project" becomes "my-poster-project".
  // allProjects is a flat dictionary: { "my-poster-project": {...} }
  // so it doesn't matter which list a project lives in — clicking
  // any card can find it by id in one place.
  // ============================================================

  function slugify(text) {
    return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  const allProjects = {};
  function registerList(items) {
    (items || []).forEach((item, i) => {
      item.id = slugify(item.title) || `item-${i}`;
      // if two projects share a title, this keeps ids unique
      while (allProjects[item.id]) item.id += "-2";
      allProjects[item.id] = item;
    });
  }
  registerList(previousWork);
  registerList(classWork.ideation);
  registerList(classWork.coding);
  registerList(classWork.research);
