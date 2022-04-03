var App = {
  data: function () {
    return {
      message: "My Products",
      products: [],
      productName: "",
      productPrice: 0,
      productDesc: "",
      productImgUrl: "",
    };
  },
  created: function () {
    this.productIndex();
  },
  methods: {
    productIndex: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        this.products = response.data;
      });
    },
    createProduct: function () {
      var params = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDesc,
        image_url: this.productImgUrl,
      };
      axios.post("http://localhost:3000/products", params).then((response) => {
        console.log(response.data);
        this.products.push(response.data);
      });
    },
    deleteProduct(product_id) {
      axios.delete(`http://localhost:3000/products/${product_id}`).then((response) => {
        console.log(response);
      });
    },
  },
};

Vue.createApp(App).mount("#app");
