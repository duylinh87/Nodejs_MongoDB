class NewController {
  // [GET]/news
  index(req, res) {
    res.render("news");
  }

  // vể sau trang news sẽ chia làm các trang nhỏ
  // của nó nữa nên ta phải cấu hình trang nhỏ
  // [GET]/news/:slug cú pháp theo thư viện express mục router
  show(req, res) {
    res.send("news........");
  }
}
module.exports = new NewController();
//xuat doi tuong khoi tao
