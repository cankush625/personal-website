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
      name: "FoundationDB: A Distributed Unbundled Transactional Key Value Store",
      description:
        "Foundation DBs architecture and design decisions and implementation details",
      authors: "Jingyu Zhou, Meng Xu, Bala Namasivayam & others",
      image:
        "https://drive.google.com/thumbnail?id=1pmAyGpSnOu0mJ45UWmncwFkFIRU5b_EV&sz=w900-h900",
      readDate: "Jul 06, 2025",
      link: "https://www.foundationdb.org/files/fdb-paper.pdf",
      summary: {
        "title": "FoundationDB: A Distributed Unbundled Transactional Key Value Store",
        "summary": `
          <p>
            FoundationDB is an open-source transactional key-value store meant for OLTP data processing. It combines the 
            flexibility and scalability of NoSQL architectures with the power of ACID transactions.
          </p>
          <h3>Design Principles</h3>
          <p>
            The main design principles of FDB are:
          </p>
          <ul>
            <li><strong>Divide and conquer</strong>: FDB decouples write path from read path and scales them independently.</li>
            <li><strong>Make failure a common case</strong>: The transaction management system of FDB handles all failures through the recovery path.</li>
            <li><strong>Fail fast and recover fast</strong>: To improve availability, FDB minimizes Mean-Time-To-Recovery (MTTR).</li>
            <li><strong>Simulation testing</strong>: FDB has a randomized, deterministic simulation framework for testing the correctness of DB.</li>
          </ul>
          <h3>Architecture Overview</h3>
          <p>
            FDB adopts an unbundled architecture that comprises a control plane and a data plane.
          </p>
          <ul>
            <li><strong>Control Plane</strong></li>
              <ul>
                <li>Handles metadata, cluster configuration (via Paxos), coordination.</li>
              </ul>
            <li><strong>Data Plane</strong></li>
              <ul>
                <li><strong>Transaction System</strong> – manages OCC + MVCC, write conflict resolution.</li>
                <li><strong>Storage System</strong> – serves range reads/writes.</li>
                <li><strong>Log Servers & Proxies/Resolvers</strong> for fault-tolerant, distributed request handling.</li>
              </ul>
          </ul>
          <p>
            Read paths vs. write paths scaled separately; control plane also scales independently.
          </p>
          <h3>Transaction Management</h3>
          <ul>
            <li><strong>End-to-end transaction processing</strong></li>
            <li><strong>Strict Serializability</strong>: Achieved via OCC for write conflict detection and MVCC for versioned reads.</li>
            <li><strong>Transaction System Recovery</strong>: Transaction servers proactively shut down when anomalies detected. 
              Failures are funnelled into a unified recovery path with MTTR typically <5 seconds in production.
            </li>
            <li><strong>Logging Protocol</strong>: Unlike traditional systems coupling redo/undo logs with storage, 
              FoundationDB splits logging out to dedicated log servers—enabling fast recovery by avoiding on-the-fly 
              redo/undo processing.
            </li>
          </ul>
          <h3>Simulation Testing</h3>
          <ul>
            <li><strong>Deterministic, fault-injection simulation</strong>: Every code path (especially failure and recovery) is reliably 
              exercised through a simulation framework. It provides deterministic reproducibility for varied fault scenarios.
            </li>
            <li><strong>Enhanced reliability</strong>: This approach yields high system stability and confidence in correctness.</li>
            <li><strong>Latency to Bug Discovery</strong>: 
              <ul>
                <li><strong>Bugs need to surface fast</strong> - ideally before production, and immediately after a commit—so 
                  engineers can easily trace them back
                </li>
                <li><strong>Discrete-event simulation</strong> - FoundationDB simulator can fast‑forward through periods of inactivity, 
                  it runs much faster than real time, allowing long-running, time-dependent bugs to surface rapidly—by 
                  orders of magnitude—compared to real-world end‑to‑end tests.
                </li>
                <li><strong>Parallel Simulations</strong> - Bugs can be found faster simply by running more simulations in parallel.</li>
                <li><strong>Limitations</strong> - 
                  <ul>
                    <li>Simulation is not able to reliably detect performance issues, such as an imperfect load balancing algorithm.</li>
                    <li>It is also unable to test third-party libraries or dependencies, or even first-party code not implemented in Flow</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>Evaluation & Deployment</h3>
          <ul>
            <li><strong>Performance</strong>: Efficient horizontal scaling, low latency, fault tolerance—all 
              demonstrated under real-world OLTP workloads.
            </li>
            <li><strong>Production adoption</strong>: Used at scale by Apple, Snowflake, and others for mission-critical services.</li>
          </ul>
        `
      },
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
