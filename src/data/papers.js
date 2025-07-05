let papers = {
  read: [
    {
      name: "Zanzibar: Google's Consistent, Global Authorization System",
      description: "Building scalable, consistent and Global Auth system",
      authors: "Ruoming Pang, Ramón Cáceres & others",
      image:
        "https://drive.google.com/thumbnail?id=1_noGJ3iJV1Pwl79oD06F4fdiAACt00Ja&sz=w900-h900",
      readDate: "Mar 24, 2024",
      link: "https://storage.googleapis.com/gweb-research2023-media/pubtools/pdf/10683a8987dbf0c6d4edcafb9b4f05cc9de5974a.pdf",
    },
    {
      name: "How not to structure your database-backed web applications: a study of performance bugs in the wild",
      description:
        "Talks about the data access related bugs and performance issues when using ORMs",
      authors: "Junwen Yang, Pranav Subramaniam & others",
      image:
        "https://drive.google.com/thumbnail?id=1vltsh4DGdCUCVZmCnQz9injUmTvMATI8&sz=w900-h900",
      readDate: "Jun 07, 2025",
      link: "http://hyperloop.cs.uchicago.edu/220-HowNotStructure.pdf",
      summary: {
        "title": "How not to structure your database-backed web applications: a study of performance bugs in the wild",
        "summary": `
          <p>
            Many applications use ORMs to develop database backed backends. Developing efficient ORM applications is challenging,
            as the ORM framework hides the underlying database query generation and execution. This problem becomes more severe when these
            applications having to process large amount of persistent data. So, this paper talks about common performance anti-patterns in
            the real-world applications, how they affect application performance and remedies for them.
          </p>
          <p>
            This paper talks about causes of inefficiencies due to ORMs like ORM API misuse, Database Design problems, Application design
            trade-offs, etc.
          </p>
        `
      },
    },
    {
      name: "Attention Is All You Need",
      description:
        "Talks about self-attention mechanism in machine translation tasks",
      authors: "Ashish Vaswani, Noam Shazeer & others",
      image:
        "https://drive.google.com/thumbnail?id=1qu51PyAGB8KxcTT6f3YRbIKC1kTA0z7d&sz=w900-h900",
      readDate: "Oct 16, 2023",
      link: "https://arxiv.org/pdf/1706.03762.pdf",
    },
  ],
  written: [
    {
      name: "NeuraIC: Neural Image Caption Generator for Assistive Vision",
      description: "Image caption generator",
      authors: "Ankush Chavan, Kuldeepsingh Rajpurohit & others",
      image: "",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-7985-8_62",
      writtenDate: "Apr 16, 2021"
    },
  ],
};

export default papers;
