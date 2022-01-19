module.exports = {
  async redirect() {
    return[
      {
        sorce: "/menu/pizzas",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};
