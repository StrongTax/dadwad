export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6275ddac0732531ae7193db9",
                  title: "Sanity Studio",
                  name: "dadwad-studio",
                  apiId: "4149a860-da67-4640-aa41-b4f8508a273d",
                },
                {
                  buildHookId: "6275ddac1bdbbd1ee7829ad9",
                  title: "Blog Website",
                  name: "dadwad",
                  apiId: "c1a49cb0-c698-4ad4-9b91-06382446b196",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/StrongTax/dadwad",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://dadwad.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
