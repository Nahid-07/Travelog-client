import React from "react";
import useTitle from "../hook/useTitle";

const Blog = () => {
  useTitle("blog");
  return (
    <div>
      <div className="bg-slate-200 p-4">
        <h1 className="text-3xl font-bold text-orange-300 text-center">
          Difference between SQL and NoSQL
        </h1>
        <div>
          <p className="text-xl text-slate-500">
            <span className="text-2xl text-slate-400 mb-4">What is Sql ?</span>{" "}
            <br />
            Sql database is a realtional database. A collecttion of data
            table.Where eacj row have user data. Relational databases are built
            using the structured query language (SQL) to create, store, update,
            and retrieve data. SQL database server stores and organizes data in
            tables. In RDBMS, tables are fundamental database objects logically
            designed to collect data in rows and columns format. While rows
            reflect entities, columns define the attributes of each entity. For
            instance, in a customer data table, each row reflects a record for a
            specific customer, and each table column contains corresponding
            customer information, like the customer’s name and address. The
            following are key elements of the SQL database table. <br />
            <span className="text-2xl text-slate-400 block my-4">
              Some benefits of SQL database system
            </span>
            <ul className="ml-5">
              <li className="list-disc">Higher Flexibility</li>
              <li className="list-disc">Better Data Consistency</li>
              <li className="list-disc">Minimum Redundancy</li>
              <li className="list-disc">Performance Optimizatio</li>
              <li className="list-disc">Ease of Maintenance</li>
            </ul>
          </p>
        </div>
        <div>
          <p className="text-xl text-slate-500 mt-5">
            <span className="text-2xl text-slate-400 mb-4">
              What is NoSql ?
            </span>{" "}
            <br />
            NoSQL databases are non-tabular databases and store data differently
            than relational tables. NoSQL databases come in a variety of types
            based on their data model. The main types are document, key-value,
            wide-column, and graph. They provide flexible schemas and scale
            easily with large amounts of data and high user loads. <br />
            <span className="text-2xl text-slate-400 block my-4">
              Some benefits of SQL database system
            </span>
            <ul className="ml-5">
              <li className="list-disc">Highly Functional.</li>
              <li className="list-disc">Better Data Consistency</li>
              <li className="list-disc"> less code</li>
              <li className="list-disc">Performance Optimizatio</li>
              <li className="list-disc">Ease of Maintenance</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="bg-slate-200 p-4 mt-5">
        <h1 className="text-3xl font-bold text-orange-300 text-center pt-4">
          What is JWT, and how does it work?
        </h1>
        <p className="text-xl text-slate-500 mt-5">
          JWT which is stand for json web token <br />
          This token use for security parpouse.JSON Web Token (JWT) is an open
          standard (RFC 7519) for securely transmitting information between
          parties as JSON object.
        </p>
        <p className="text-xl text-slate-500 mt-5">
          Now that you understand JSON as a data text format, you may be
          wondering What are tokens? To put it simply, a token is a string of
          data that represents something else, such as an identity. In the case
          of authentication, a non-JWT based token is a string of characters
          that allow the receiver to validate the sender’s identity. The
          important distinction here is lack of meaning within the characters
          themselves.
        </p>
        <h1 className="text-2xl font-semibold text-slate-500">
          How does it work actually ?
        </h1>
        <p className="text-xl text-slate-500 mt-5">
          So besically it is use for authantication.if the use is valid then the
          use can can access the site. It is vary on programer functionality.or
          the website ability. every website has its some Api to load data. if
          jwt token do no added is the website data may leak. When we add jwt
          JWT giv us a token. when we get token on our storage with that token
          jwt verify that use is really valid or not..
        </p>
      </div>
      <div className="bg-slate-200 p-4 mt-5">
        <h1 className="text-3xl font-bold text-orange-300 text-center">
          Difference between SQL and NoSQL
        </h1>
        <div>
          <p className="text-xl text-slate-500">
            <span className="text-2xl text-slate-400 mb-4">
              What is the difference between javascript and NodeJS?
            </span>{" "}
            <br />
            javascript is a Programmig language.. nodeJS is server run time
            environment. Node js use for backend, javascript Programmig language
            can make monile app a website and so many things,
            <ul className="ml-5">
              <li className="list-disc">
                1. JavaScript is a client-side scripting language that is
                lightweight, cross-platform, and interpreted. Both Java and HTML
                include it. Node.js, on the other hand, is a V8-based
                server-side programming language. As a result, it is used to
                create network-centric applications. It's a networked system
                made for data-intensive real-time applications. If we compare
                node js vs. python, it is clear that node js will always be the
                preferred option.
              </li>
              <li className="list-disc">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language. It requires
                libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.
              </li>
              <li className="list-disc">
                5. The critical benefits of JavaScript include a wide choice of
                interfaces and interactions and just the proper amount of server
                contact and direct visitor input. Node.js, on the other hand,
                offers node package management with over 500 modules and the
                capacity to handle many requests at the same time. It also
                offers the unique ability to enable microservice architecture
                and the Internet of Things. Even when comparing node js vs.
                react js, node js always wins.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="bg-slate-200 p-4 mt-5">
        <h1 className="text-3xl font-bold text-orange-300 text-center">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p className="text-xl text-slate-500">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-loop
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. We know NodeJS application
          is single-threaded. Say, if processing involves request A that takes
          10 seconds, it does not mean that a request which comes after this
          request needs to wait 10 seconds to start processing because NodeJS
          event loops are only single-threaded. The entire NodeJS architecture
          is not single-threaded.Explanation: If your system has 8 CPU then 8
          NodeJS instances will be created and every instance has its own
          independent event loop. Now NodeJS can process all request parallelly.
          They are all share same port (PORT 3000) but not state. The master
          process listens on a port, accepts new connections and distributes
          them across the workers in a round-robin fashion, with some built-in
          smarts to avoid overloading a worker process.Node is a runtime, and no
          it is not single threaded, nor is is multithreaded. Confusing? Yes,
          but true. JavaScript is single threaded. The Node runtime is not. By
          default, Node only executes one JavaScript instance unless instructed
          to use more.
        </p>
      </div>
    </div>
  );
};

export default Blog;
