class SiteController {
  // [GET]/news
  index(req, res) {
    res.render("home");
  }

  // vể sau trang news sẽ chia làm các trang nhỏ
  // của nó nữa nên ta phải cấu hình trang nhỏ
  // [GET]/news/:slug cú pháp theo thư viện express mục router
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
//xuat doi tuong khoi tao
