/* 悟空外卖 · 印尼悟空 手机演示。数据来自 data.js（DATA）。三语：简体中文 / Bahasa Indonesia / English。不接真实支付。 */

const LANGS = [["zh", "简体中文"], ["id", "Bahasa Indonesia"], ["en", "English"]];
const LI = { zh: 0, en: 1, id: 2 }; // index inside [zh, en, id] triplets

const I18N = {
  // nav & services
  "nav.home": ["首页", "Home", "Beranda"], "nav.dine": ["到店团购", "Dine-in", "Makan di Tempat"], "nav.msgs": ["消息", "Messages", "Pesan"], "nav.me": ["我的", "Me", "Saya"],
  "svc.food": ["美食", "Food", "Makanan"], "svc.mart": ["超市便利", "Groceries", "Supermarket"], "svc.dine": ["到店团购", "Dine-in Deals", "Promo Resto"], "svc.fruit": ["水果生鲜", "Fresh Fruit", "Buah Segar"], "svc.vip": ["VIP会员", "VIP", "VIP"],
  "svc.home": ["家政按摩", "Home & Spa", "Rumah & Pijat"], "svc.topup": ["话费充值", "Top-up", "Pulsa"], "svc.trip": ["旅游", "Travel", "Wisata"], "svc.ride": ["即时叫车", "Ride", "Taksi"], "svc.free": ["免配专区", "Free Delivery", "Gratis Ongkir"],
  "svc.visa": ["签证", "Visa", "Visa"], "svc.med": ["医疗", "Medical", "Medis"], "svc.rent": ["租车", "Car Rental", "Sewa Mobil"], "svc.stay": ["民宿", "Stays", "Penginapan"], "svc.wallet": ["悟空钱包", "Wukong Wallet", "Dompet Wukong"],
  "quick.0": ["配送费减免", "Delivery discounts", "Diskon ongkir"], "quick.1": ["特价大餐", "Meal deals", "Promo makan"], "quick.2": ["上门保洁", "Home cleaning", "Bersih rumah"], "quick.3": ["巴厘按摩", "Balinese massage", "Pijat Bali"], "quick.4": ["签证协助", "Visa help", "Bantuan visa"],
  // home
  "city": ["雅加达", "Jakarta", "Jakarta"],
  "search.ph": ["琼州鸡饭 · 海南鸡饭 Rp 29.000 起", "Qiongzhou Chicken Rice · from Rp 29.000", "Nasi Ayam Hainan · mulai Rp 29.000"],
  "bn.recharge": ["充值送大红包", "Top up, get red packets", "Isi saldo, dapat angpao"], "bn.recharge.sub": ["充 Rp 500.000 送 Rp 50.000", "Top up Rp 500.000, get Rp 50.000", "Isi Rp 500.000, bonus Rp 50.000"], "bn.recharge.sub2": ["悟空钱包 · 持牌机构托管", "Wukong Wallet · held by a licensed institution", "Dompet Wukong · dikelola lembaga berizin"],
  "bn.mart": ["精选好物", "Top picks", "Pilihan terbaik"], "bn.mart.sub": ["华人超市 · 当日达", "Chinese grocers · same day", "Toko Tionghoa · hari yang sama"],
  "bn.deal.sub": ["特价大餐 · 吃饱吃好", "Meal deals · eat well", "Promo makan · kenyang"], "bn.dine": ["团购 7 折", "Deals 30% off", "Promo diskon 30%"], "bn.dine.sub": ["到店吃更划算", "Cheaper dining in", "Lebih hemat di tempat"],
  "lunch.title": ["雅加达午餐推荐", "Jakarta lunch picks", "Rekomendasi makan siang"], "more": ["更多 ›", "More ›", "Lainnya ›"],
  "tab.rec": ["推荐", "For you", "Rekomendasi"], "tab.deal": ["特优 Rp29K", "Deals Rp29K", "Hemat Rp29K"], "tab.free": ["免配 专区⁺", "Free delivery⁺", "Gratis ongkir⁺"], "tab.dist": ["距离", "Distance", "Jarak"],
  "exclusive": ["独家", "Exclusive", "Eksklusif"], "chain": ["连锁", "Chain", "Waralaba"], "brand": ["品牌", "Brand", "Merek"],
  "sold.mo": ["月销 {0}+", "{0}+ sold/mo", "{0}+ terjual/bln"], "fee.from": ["配送费 {0} 起", "Delivery from {0}", "Ongkir mulai {0}"], "fee.free": ["免配送费", "Free delivery", "Gratis ongkir"], "express": ["悟空专送", "Wukong Express", "Kurir Wukong"],
  "count.home": ["{0} 家商家 · 每家 32 道菜 · 已显示全部", "{0} merchants · 32 dishes each · all shown", "{0} merchant · 32 menu per toko · semua tampil"], "pickup": ["取餐中", "Picking up", "Diambil"],
  "food.all": ["全部餐厅", "All restaurants", "Semua restoran"], "all": ["全部", "All", "Semua"], "count.rest": ["{0} 家餐厅", "{0} restaurants", "{0} restoran"],
  // shop
  "platform.delivery": ["平台配送 {0}min", "Platform delivery {0} min", "Diantar platform {0} mnt"], "stab.menu": ["点菜", "Menu", "Menu"], "stab.reviews": ["评价", "Reviews", "Ulasan"], "stab.info": ["商家", "Info", "Info Toko"],
  "sec.sig": ["店铺招牌", "Signature", "Andalan"], "sec.hot": ["热销", "Best sellers", "Terlaris"], "sold.stock": ["月销 {0} | 库存充足", "{0} sold/mo | In stock", "{0} terjual/bln | Stok ada"],
  "cart.none": ["未选中商品", "No items selected", "Belum ada pilihan"], "cart.incl": ["（含配送费、打包费）", "(incl. delivery & packaging)", "(termasuk ongkir & kemasan)"], "cart.fee": ["另需配送费 {0}", "+ delivery {0}", "+ ongkir {0}"], "cart.n": ["已选 {0} 件", "{0} items", "{0} item"],
  "min.order": ["{0} 起送", "Min. order {0}", "Min. pesanan {0}"], "min.gap": ["差 {0} 起送", "Add {0} to order", "Kurang {0} lagi"], "checkout": ["去结算", "Checkout", "Bayar"],
  "info.delivery": ["配送服务：悟空专送 · 约 {0} 分钟", "Delivery: Wukong Express · about {0} min", "Pengiriman: Kurir Wukong · sekitar {0} menit"], "info.hours": ["营业时间：{0}", "Hours: {0}", "Jam buka: {0}"], "info.licence": ["食品许可和商家实景", "Food licence & store photos", "Izin pangan & foto toko"], "info.contact": ["联系商家", "Contact merchant", "Hubungi toko"], "reviews.total": ["共 {0} 条评价", "{0} reviews in total", "{0} ulasan"],
  "rv.0": ["味道很正，和国内一样。配送也快，骑手很有礼貌。", "Tastes just like home. Fast delivery and a polite rider.", "Rasanya otentik seperti di Tiongkok. Pengiriman cepat, kurir sopan."],
  "rv.1": ["姜葱酱绝了，连续点了一周。", "The ginger-scallion sauce is unreal; ordered it every day this week.", "Saus jahe daun bawangnya juara, pesan tiap hari seminggu ini."],
  "rv.2": ["分量足，两个人吃一份套餐刚好。包装结实没有洒。", "Generous portions, one set is enough for two. Sturdy packaging, nothing spilled.", "Porsinya banyak, satu paket cukup berdua. Kemasan kokoh, tidak tumpah."],
  "rv.3": ["老板会说中文，备注少辣真的做到了。", "The owner speaks Chinese and actually made it mild as requested.", "Pemiliknya bisa bahasa Mandarin, permintaan kurang pedas benar-benar dituruti."],
  "rv.4": ["晚上十点还能点到热乎的，雅加达难得。", "Hot food at 10 pm, rare in Jakarta.", "Jam 10 malam masih bisa pesan makanan hangat, langka di Jakarta."],
  "rv.5": ["价格比到店吃便宜，用了首单券更划算。", "Cheaper than dining in, and the first-order voucher made it a steal.", "Lebih murah daripada makan di tempat, apalagi pakai voucher pesanan pertama."],
  "rv.6": ["汤是现熬的，不是料包味。", "The broth is simmered fresh, not from a packet.", "Kuahnya direbus segar, bukan rasa bumbu instan."],
  "rv.7": ["朋友推荐的，没失望。下次试试烤鸭。", "A friend recommended it and it did not disappoint. Duck next time.", "Rekomendasi teman, tidak mengecewakan. Lain kali coba bebeknya."],
  // detail
  "add.cart": ["加入购物车", "Add to cart", "Tambah ke keranjang"], "buy.now": ["立即抢购", "Buy now", "Beli sekarang"], "book": ["预约并加入结算", "Book & checkout", "Pesan & bayar"],
  "merchant": ["商家", "Merchant", "Toko"], "delivery": ["配送", "Delivery", "Pengiriman"], "fee.n": ["配送费 {0}", "Delivery {0}", "Ongkir {0}"], "mins.n": ["{0} 分钟", "{0} min", "{0} menit"], "serving": ["1 份", "1 serving", "1 porsi"], "sold.n": ["月销 {0}", "{0} sold/mo", "{0} terjual/bln"],
  "note.deal": ["到店出示订单二维码核销，不可用于外卖。", "Show the order QR code in store to redeem. Not valid for delivery.", "Tunjukkan kode QR pesanan di tempat. Tidak berlaku untuk pesan antar."],
  "note.svc": ["服务由持证供应商提供，平台负责预约与客服。", "Service by licensed vendors; the platform handles booking and support.", "Layanan oleh penyedia berizin; platform menangani pemesanan dan layanan pelanggan."],
  "dish.desc": ["{0}现做的{1}（{2}）。{3}配送，大约 {4} 分钟送到。", "Freshly made {1} from {0}. Delivered in {3}, about {4} minutes.", "{1} buatan segar dari {0}. Diantar ke {3}, sekitar {4} menit."],
  "deal.desc": ["{0}的{1}。{2}。到店出示订单二维码核销。", "{1} at {0}. {2}. Show the order QR code in store.", "{1} di {0}. {2}. Tunjukkan kode QR pesanan di tempat."],
  "deal.set": ["双人{0}套餐", "{0} Set for Two", "Paket {0} untuk Dua"], "deal.voucher": ["Rp {0} 代金券", "Rp {0} Voucher", "Voucher Rp {0}"],
  "deal.buf.0": ["火锅自助晚餐", "Hotpot Dinner Buffet", "Prasmanan Hotpot Malam"], "deal.buf.1": ["烤肉自助晚餐", "BBQ Dinner Buffet", "Prasmanan Bakaran Malam"], "deal.buf.2": ["海鲜自助晚餐", "Seafood Dinner Buffet", "Prasmanan Hidangan Laut"],
  "deal.note.0": ["到店核销 · 周末可用", "Redeem in store · valid weekends", "Tukar di tempat · berlaku akhir pekan"], "deal.note.1": ["满额可用 · 不找零", "Minimum spend · no change given", "Min. belanja · tanpa kembalian"], "deal.note.2": ["每人 · 18:00–22:00", "Per person · 18:00–22:00", "Per orang · 18:00–22:00"],
  "kind.0": ["套餐", "Set", "Paket"], "kind.1": ["代金券", "Voucher", "Voucher"], "kind.2": ["自助", "Buffet", "Prasmanan"],
  // cart / pay / done
  "cart": ["购物车", "Cart", "Keranjang"], "cart.empty": ["购物车是空的", "Your cart is empty", "Keranjang kosong"], "browse": ["去逛逛", "Browse", "Jelajahi"],
  "subtotal": ["商品合计", "Subtotal", "Subtotal"], "fee": ["配送费", "Delivery fee", "Ongkir"], "pack": ["打包费", "Packaging", "Kemasan"], "total": ["应付", "Total", "Total"], "to.pay": ["去结账 {0}", "Checkout {0}", "Bayar {0}"],
  "confirm.order": ["确认订单", "Confirm order", "Konfirmasi pesanan"], "user": ["悟空行者", "Wukong user", "Pengguna Wukong"], "summary": ["订单摘要", "Order summary", "Ringkasan pesanan"], "items": ["件数", "Items", "Jumlah"],
  "delivery.time": ["配送时间", "Delivery time", "Waktu antar"], "asap": ["尽快送达 · 约 25–40 分钟", "ASAP · 25–40 min", "Secepatnya · 25–40 menit"], "sum.line": ["商品 + 配送 + 打包", "Items + delivery + packaging", "Barang + ongkir + kemasan"],
  "pay.method": ["支付方式", "Payment method", "Metode pembayaran"], "balance.avail": ["可用 {0}", "Balance {0}", "Saldo {0}"],
  "pay.wallet": ["悟空余额", "Wukong Balance", "Saldo Wukong"], "pay.wechat": ["微信支付", "WeChat Pay", "WeChat Pay"], "pay.alipay": ["支付宝", "Alipay", "Alipay"], "pay.va": ["银行转账 VA", "Bank transfer (VA)", "Transfer bank (VA)"], "pay.cod": ["货到付款", "Cash on delivery", "Bayar di tempat"],
  "pay.cn": ["中国账户 · 人民币结算", "Chinese account · settled in CNY", "Akun Tiongkok · dalam CNY"], "pay.qris": ["印尼银行与电子钱包扫码", "Scan with Indonesian banks & e-wallets", "Scan dengan bank & e-wallet Indonesia"], "pay.ew": ["印尼电子钱包", "Indonesian e-wallet", "E-wallet Indonesia"], "pay.cash": ["现金交给骑手", "Pay the rider in cash", "Bayar tunai ke kurir"],
  "pay.note": ["微信支付、支付宝走 2C2P 收单；QRIS 与本地钱包走 Xendit。演示不会真实扣款。", "WeChat Pay and Alipay via 2C2P; QRIS and local wallets via Xendit. No real charge in this demo.", "WeChat Pay dan Alipay lewat 2C2P; QRIS dan dompet lokal lewat Xendit. Demo ini tidak memotong saldo sungguhan."],
  "pay.confirm": ["确认支付 {0}", "Pay {0}", "Bayar {0}"],
  "done.title": ["支付成功", "Payment successful", "Pembayaran berhasil"], "done.sub": ["订单 {0} 已发给商家", "Order {0} sent to the merchant", "Pesanan {0} dikirim ke toko"], "done.demo": ["手机演示，没有真实扣款", "Phone demo, no real charge", "Demo ponsel, tanpa potongan nyata"],
  "view.orders": ["查看订单", "View orders", "Lihat pesanan"], "back.home": ["返回首页", "Back to home", "Kembali ke beranda"],
  // orders
  "orders": ["我的订单", "My orders", "Pesanan saya"], "ot.all": ["全部", "All", "Semua"], "ot.pending": ["等待付款", "Awaiting payment", "Menunggu pembayaran"], "ot.live": ["进行中", "In progress", "Diproses"], "ot.review": ["待评价", "To review", "Belum diulas"], "ot.done": ["已完成", "Completed", "Selesai"], "ot.refund": ["已退款", "Refunded", "Dikembalikan"],
  "st.rider": ["骑手已接单", "Rider assigned", "Kurir menerima"], "st.delivered": ["已送达", "Delivered", "Terkirim"], "st.accepting": ["商家接单中", "Waiting for merchant", "Menunggu toko"], "st.booked": ["服务已预约", "Booked", "Terjadwal"],
  "o.time": ["下单时间：{0}", "Ordered: {0}", "Dipesan: {0}"], "o.qty": ["数量：{0} 件 · {1}", "{0} items · {1}", "{0} item · {1}"], "o.paid": ["实付：{0}", "Paid: {0}", "Dibayar: {0}"], "o.platform": ["平台配送", "Platform delivery", "Diantar platform"], "o.onsite": ["到店 / 上门", "In store / at home", "Di tempat / ke rumah"],
  "o.track": ["查看进度", "Track", "Lacak"], "o.rider": ["联系骑手", "Call rider", "Hubungi kurir"], "o.again": ["再来一单", "Reorder", "Pesan lagi"], "o.review": ["去评价", "Review", "Ulas"], "o.pay": ["去支付", "Pay", "Bayar"], "empty": ["暂无数据", "Nothing here yet", "Belum ada data"],
  "t.track": ["骑手正在路上，约 18 分钟送达", "Rider on the way, about 18 min", "Kurir dalam perjalanan, sekitar 18 menit"], "t.rider": ["演示环境，正式版可与骑手通话", "Demo: calling the rider is in the full app", "Demo: telepon kurir tersedia di versi penuh"], "t.reviewed": ["感谢评价，+50 积分", "Thanks! +50 points", "Terima kasih! +50 poin"],
  // messages
  "msgs": ["消息", "Messages", "Pesan"], "read.all": ["全部已读", "Mark all read", "Tandai dibaca"], "support": ["联系客服", "Support", "Layanan pelanggan"],
  "m.group": ["订单群聊", "Order group chat", "Grup chat pesanan"], "m.group.p": ["[图片]", "[Photo]", "[Foto]"], "m.order": ["订单消息", "Order updates", "Info pesanan"], "m.order.p": ["外卖订单（单号 6728518）商家接单", "Delivery order 6728518 accepted by the merchant", "Pesanan antar 6728518 diterima toko"],
  "m.acct": ["账户通知", "Account notice", "Notifikasi akun"], "m.acct.p": ["余额变动：支付订单（ID 6728518）", "Balance change: paid order 6728518", "Perubahan saldo: bayar pesanan 6728518"],
  "m.welfare": ["悟空外卖福利官", "Wukong Perks", "Wukong Perks"], "m.welfare.p": ["❤️ 悟空美食好想你！Rp 150.000 红包已到账", "❤️ We miss you! Rp 150.000 in red packets credited", "❤️ Kami kangen! Angpao Rp 150.000 sudah masuk"],
  "m.shop.p": ["{0}红包已送达，独家优惠仅在悟空！", "Red packet from {0} delivered. Exclusive deals only on Wukong!", "Angpao dari {0} sudah sampai. Promo eksklusif hanya di Wukong!"],
  "m.officer": ["悟空福利官", "Wukong Rewards", "Wukong Rewards"], "m.officer.p": ["悟空外卖霸王餐开始啦！", "Free-meal giveaway is live!", "Makan gratis Wukong dimulai!"],
  "m.ontime": ["准时保", "On-time Guarantee", "Jaminan Tepat Waktu"], "m.ontime.p": ["超时赔付：超过承诺时间自动赔红包", "Late? You get a red packet automatically", "Terlambat? Angpao otomatis masuk"],
  "m.asst": ["悟空小助手", "Wukong Assistant", "Asisten Wukong"], "m.asst.p": ["悟空外卖登陆雅加达！邀请新人下单得大红包", "Wukong lands in Jakarta! Invite friends for big red packets", "Wukong hadir di Jakarta! Undang teman, dapat angpao besar"],
  "m.min": ["{0} 分钟前", "{0} min ago", "{0} mnt lalu"], "t.msg": ["演示环境，消息详情在正式版显示", "Demo: message details are in the full app", "Demo: detail pesan di versi penuh"],
  // me
  "edit": ["编辑", "Edit", "Ubah"], "balance": ["余额 (Rp)", "Balance (Rp)", "Saldo (Rp)"], "points": ["积分", "Points", "Poin"], "topup": ["充值", "Top up", "Isi saldo"], "dragon": ["悟空龙珠卡", "Wukong Dragon Card", "Kartu Naga Wukong"], "activate": ["立即开通", "Activate", "Aktifkan"],
  "me.coupons": ["红包卡券", "Red packets & vouchers", "Angpao & voucher"], "me.deals": ["优惠中心", "Deals centre", "Pusat promo"], "me.invite": ["邀请有礼", "Invite & earn", "Undang & dapat hadiah"], "me.tasks": ["任务中心", "Tasks", "Misi"],
  "me.orders.all": ["全部订单", "All orders", "Semua pesanan"], "me.pay": ["待付款", "Awaiting payment", "Menunggu pembayaran"], "me.profile": ["个人信息", "Account", "Akun"], "me.addr": ["收货地址", "Addresses", "Alamat"], "me.payset": ["支付设置", "Payment settings", "Pengaturan pembayaran"], "me.lang": ["语言", "Language", "Bahasa"], "me.about": ["关于应用", "About", "Tentang aplikasi"],
  "t.coupons": ["红包卡券：3 张可用", "3 vouchers available", "3 voucher tersedia"], "t.invite": ["邀请好友首单各得 Rp 20.000", "You and a friend each get Rp 20.000", "Anda dan teman masing-masing dapat Rp 20.000"], "t.tasks": ["今日任务：下 1 单得 200 积分", "Today: place 1 order for 200 points", "Hari ini: 1 pesanan dapat 200 poin"], "t.payset": ["默认支付：微信支付", "Default: WeChat Pay", "Default: WeChat Pay"], "t.support": ["客服将在正式版开通", "Support opens in the full app", "Layanan pelanggan hadir di versi penuh"],
  // dine
  "dine.search": ["团购 · 代金券 · 订座", "Deals · vouchers · reservations", "Promo · voucher · reservasi"], "d.top": ["优质团购", "Top deals", "Promo pilihan"], "d.food": ["悟空美食", "Wukong Food", "Kuliner Wukong"], "d.dessert": ["甜品下午茶", "Dessert & tea", "Dessert & teh"], "d.wok": ["小炒菜馆", "Stir-fry", "Tumisan"], "d.dinner": ["优质晚餐", "Fine dinner", "Makan malam"],
  "d.save": ["省钱用团购", "Save with deals", "Hemat dengan promo"], "d.flash": ["限时秒杀中", "Flash sale", "Flash sale"], "d.canto": ["粤菜到店吃", "Cantonese dine-in", "Makan Kanton di tempat"], "d.canto.sub": ["低至 7 折 · 63 道菜任选", "Up to 30% off · 63 dishes", "Diskon s.d. 30% · 63 menu"], "d.sig": ["招牌秒杀", "Signature flash sale", "Flash sale andalan"], "d.sig.sub": ["Rp 200.000 代金券 Rp 176.000", "Rp 200.000 voucher for Rp 176.000", "Voucher Rp 200.000 seharga Rp 176.000"],
  "d.buffet": ["优质自助餐", "Top buffets", "Prasmanan pilihan"], "d.buffet.sub": ["多人同行能省则省", "Save more in groups", "Lebih hemat beramai-ramai"], "d.rest": ["雅加达 | 餐厅", "Jakarta | Restaurant", "Jakarta | Restoran"],
  "q.0": ["菜品丰富不限量，平价畅吃火锅自由！", "Unlimited hotpot at a fair price!", "Hotpot sepuasnya dengan harga bersahabat!"], "q.1": ["炭火现烤，牛舌和五花随便加。", "Charcoal grill, endless tongue and pork belly.", "Bakar arang, lidah sapi dan samcan tambah terus."], "q.2": ["生蚝、大虾管够，晚餐人均不到二十万。", "All the oysters and prawns you want, under Rp 200.000 a head.", "Tiram dan udang sepuasnya, per orang di bawah Rp 200.000."], "q.3": ["包间可订，适合家庭聚会。", "Private rooms available, great for family gatherings.", "Ruang privat tersedia, cocok untuk kumpul keluarga."],
  "f.loc": ["位置 ▾", "Location ▾", "Lokasi ▾"], "f.cat": ["全部分类 ▾", "Category ▾", "Kategori ▾"], "f.sort": ["排序 ▾", "Sort ▾", "Urutkan ▾"], "f.filter": ["筛选 ▾", "Filter ▾", "Filter ▾"],
  "c.set": ["团购套餐", "Set deals", "Paket"], "c.voucher": ["代金券", "Vouchers", "Voucher"], "c.book": ["在线预约", "Reservations", "Reservasi"], "sold.deal": ["已售 {0}", "{0} sold", "{0} terjual"], "count.deal": ["{0} 个团购", "{0} deals", "{0} promo"],
  // services
  "free.title": ["免配专区", "Free Delivery", "Gratis Ongkir"], "free.lead": ["这些商家今天免配送费，下单满起送价即可。", "These merchants deliver free today once you reach the minimum order.", "Merchant ini gratis ongkir hari ini setelah mencapai minimum pesanan."], "count.free": ["{0} 家免配送费", "{0} merchants with free delivery", "{0} merchant gratis ongkir"],
  "vip.title": ["VIP 会员", "VIP Membership", "Keanggotaan VIP"], "vip.black": ["黑金会员", "Black Gold", "Black Gold"], "vip.perks": ["每月 8 张免配送券 · 全场 95 折 · 积分 1.5 倍", "8 free-delivery vouchers a month · 5% off everything · 1.5× points", "8 voucher gratis ongkir per bulan · diskon 5% semua · poin 1,5×"],
  "vip.p1": ["免配送", "Free delivery", "Gratis ongkir"], "vip.p1s": ["每月 8 次", "8 times a month", "8 kali sebulan"], "vip.p2": ["95 折", "5% off", "Diskon 5%"], "vip.p2s": ["全场商家", "All merchants", "Semua merchant"], "vip.p3": ["1.5 倍积分", "1.5× points", "Poin 1,5×"], "vip.p3s": ["可兑红包", "Redeem for red packets", "Tukar angpao"],
  "vip.month": ["月卡", "Monthly", "Bulanan"], "vip.month.v": ["Rp 49.000 / 月", "Rp 49.000 / month", "Rp 49.000 / bulan"], "vip.year": ["年卡", "Yearly", "Tahunan"], "vip.year.v": ["Rp 399.000 / 年 · 送 2 个月", "Rp 399.000 / year · 2 months free", "Rp 399.000 / tahun · gratis 2 bulan"], "vip.cta": ["立即开通 · Rp 49.000", "Activate · Rp 49.000", "Aktifkan · Rp 49.000"], "t.vip": ["演示环境，正式版可开通", "Demo: activation in the full app", "Demo: aktivasi di versi penuh"],
  "w.amount": ["充值金额", "Top-up amount", "Nominal isi saldo"], "w.bonus": ["送 {0} 红包", "+ {0} red packet", "Bonus angpao {0}"], "w.note": ["钱包资金由持牌机构托管，可用于全部商家与服务。", "Wallet funds are held by a licensed institution and work with every merchant and service.", "Dana dompet dikelola lembaga berizin dan berlaku untuk semua merchant dan layanan."],
  "w.recent": ["最近明细", "Recent activity", "Riwayat terakhir"], "w.paid": ["支付订单 {0}", "Paid order {0}", "Bayar pesanan {0}"], "w.bonus.line": ["充值送红包", "Top-up bonus", "Bonus isi saldo"], "t.topup": ["演示环境，正式版通过持牌支付机构充值", "Demo: top-ups go through a licensed payment provider in the full app", "Demo: isi saldo lewat penyedia pembayaran berizin di versi penuh"],
  // address
  "addr.title": ["选择地址", "Choose address", "Pilih alamat"], "addr.ph": ["请输入收货地址", "Enter a delivery address", "Masukkan alamat pengiriman"], "addr.cur": ["目前位置", "Current location", "Lokasi saat ini"], "addr.relocate": ["重新定位 ⊕", "Relocate ⊕", "Lokasi ulang ⊕"],
  "addr.yours": ["您的地址", "Your addresses", "Alamat Anda"], "addr.add": ["添加收货地址", "Add address", "Tambah alamat"], "addr.sugg": ["推荐地址", "Suggested", "Rekomendasi"], "tag.home": ["家", "Home", "Rumah"], "tag.office": ["公司", "Office", "Kantor"],
  "t.addr.switch": ["已切换收货地址", "Address switched", "Alamat diganti"], "t.addr.sel": ["已选择 {0}", "Selected {0}", "Memilih {0}"], "t.relocated": ["已重新定位", "Location updated", "Lokasi diperbarui"], "t.cur": ["已使用当前定位", "Using current location", "Menggunakan lokasi saat ini"], "t.addr.add": ["演示环境，正式版可新增地址", "Demo: adding addresses is in the full app", "Demo: tambah alamat tersedia di versi penuh"],
  // about / lang
  "about.title": ["关于应用", "About", "Tentang aplikasi"], "about.name": ["悟空外卖 · 印尼悟空", "Wukong Waimai · Wukong Indonesia", "Wukong Waimai · Wukong Indonesia"],
  "about.desc": ["面向在印尼的中文用户的一站式生活服务：外卖、超市、到店团购、旅游、到家服务、钱包与会员。界面支持简体中文、印尼语和英语，价格为印尼盾。", "One-stop daily services for Chinese speakers in Indonesia: food delivery, groceries, dine-in deals, travel, home services, wallet and membership. Available in Chinese, Indonesian and English; prices in rupiah.", "Layanan harian serba ada untuk penutur Mandarin di Indonesia: pesan antar, belanja, promo resto, wisata, layanan rumah, dompet, dan keanggotaan. Tersedia dalam bahasa Mandarin, Indonesia, dan Inggris; harga dalam rupiah."],
  "about.op": ["运营主体", "Operator", "Operator"], "about.city": ["演示城市", "Demo city", "Kota demo"], "about.ver": ["版本", "Version", "Versi"], "about.ver.v": ["演示版 0.4", "Demo 0.4", "Demo 0.4"],
  "about.note": ["这是可在 iPhone Safari 打开的演示，不是应用商店正式版，不发生真实扣款。", "This is a Safari demo, not the App Store release. No real payments are made.", "Ini demo untuk Safari, bukan versi App Store. Tidak ada pembayaran sungguhan."],
  "lang.title": ["语言", "Language", "Bahasa"], "lang.lead": ["界面文字、商家、菜品和服务说明都会切换。", "Interface text, merchants, dishes and service descriptions all switch.", "Teks antarmuka, merchant, menu, dan deskripsi layanan ikut berubah."], "t.lang": ["已切换为简体中文", "Switched to English", "Beralih ke Bahasa Indonesia"],
  // install hint
  "pwa.title": ["装到 iPhone 桌面", "Add to your iPhone", "Pasang di iPhone"],
  "pwa.ios": ["点 Safari 底部「分享」，再选「添加到主屏幕」，就能像 App 一样全屏打开。", "Tap Share at the bottom of Safari, then “Add to Home Screen”. It opens full screen like an app.", "Ketuk Bagikan di bawah Safari, lalu “Tambah ke Layar Utama”. Terbuka layar penuh seperti aplikasi."],
  "pwa.other": ["用手机浏览器打开后选「添加到主屏幕」，即可像 App 一样使用。", "Open in your phone browser and choose “Add to Home Screen” to use it like an app.", "Buka di browser ponsel lalu pilih “Tambahkan ke Layar Utama” untuk memakainya seperti aplikasi."],
  "pwa.close": ["知道了", "Got it", "Mengerti"],
  // toasts
  "t.added": ["已加入购物车", "Added to cart", "Ditambahkan ke keranjang"], "t.search": ["搜索本店菜品", "Search this menu", "Cari menu toko"], "t.saved": ["已收藏", "Saved", "Disimpan"], "t.share": ["分享链接已复制", "Link copied", "Tautan disalin"], "t.phone": ["演示环境，商家电话在正式版显示", "Demo: merchant phone shows in the full app", "Demo: nomor toko tampil di versi penuh"],
};

const SERVICES = ["food", "mart", "dine", "fruit", "vip", "home", "topup", "trip", "ride", "free", "visa", "med", "rent", "stay", "wallet"];
const SCENE_OF = {
  mart: "static/scenes/mart.jpg", trip: "static/scenes/trip.jpg", rent: "static/scenes/rent.jpg", ride: "static/scenes/ride.jpg", visa: "static/scenes/visa.jpg",
  med: "static/scenes/med.jpg", home: "static/scenes/home.jpg", fruit: "static/items/f2.jpg", topup: "static/banners/recharge.jpg", stay: "static/items/s2.jpg",
};
const QUICK = [["quick.0", "free"], ["quick.1", "deal"], ["quick.2", "home"], ["quick.3", "home"], ["quick.4", "visa"]];
const PAYS = [
  { id: "wallet", name: "pay.wallet", note: null, bg: "linear-gradient(135deg,#ff6a3a,#ff4322)", mark: "悟" },
  { id: "wechat", name: "pay.wechat", note: "pay.cn", bg: "#07c160", mark: "微" },
  { id: "alipay", name: "pay.alipay", note: "pay.cn", bg: "#1677ff", mark: "支" },
  { id: "qris", name: "QRIS", note: "pay.qris", bg: "#1f1a17", mark: "QR" },
  { id: "gopay", name: "GoPay", note: "pay.ew", bg: "#00aa13", mark: "G" },
  { id: "ovo", name: "OVO", note: "pay.ew", bg: "#4c2a86", mark: "O" },
  { id: "dana", name: "DANA", note: "pay.ew", bg: "#108ee9", mark: "D" },
  { id: "va", name: "pay.va", note: "BCA / Mandiri / BNI / BRI", bg: "#0a5bd3", mark: "VA" },
  { id: "cod", name: "pay.cod", note: "pay.cash", bg: "#8a8580", mark: "现" },
];
const ADDRESSES = [
  { id: "a1", name: "Casa Grande Residence Tower Montreal 12F", sub: "Kota Kasablanka, Jakarta Selatan 12870", tag: "tag.home" },
  { id: "a2", name: "Grand Indonesia West Mall Lt. 3", sub: "Jl. M.H. Thamrin No. 1, Jakarta Pusat 10310", tag: "tag.office" },
  { id: "a3", name: "Senayan Residence Tower 2 No. 1808", sub: "Jl. Patal Senayan, Jakarta Selatan 12210" },
  { id: "a4", name: "Ruko Kemang Raya No. 12", sub: "Kemang, Jakarta Selatan 12730" },
];
const SUGGESTED = ["Grand Indonesia", "PIK Avenue", "Kota Kasablanka", "Glodok", "Senayan City", "SCBD Pacific Place", "Kelapa Gading Mall", "Ancol"];
const REVIEW_NAMES = ["Li**", "Wang**", "陈**", "Jes**", "Ade**", "黄**", "Ru**", "Fit**"];
const ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-6h4v6"/></svg>',
  dine: '<svg viewBox="0 0 24 24"><path d="M4 9.5 5.2 5h13.6L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12.5V20h13v-7.5"/><path d="M10 20v-4.5h4V20"/></svg>',
  msgs: '<svg viewBox="0 0 24 24"><path d="M4 5.5h16v10.5H9l-4.5 3.5V16H4z"/><path d="M8 9h8M8 12.5h5"/></svg>',
  me: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M4 12v7h16v-7"/><path d="M12 15V4m-4 4 4-4 4 4"/></svg>',
};

/* ---------- state ---------- */
const state = {
  lang: (typeof localStorage !== "undefined" && localStorage.getItem("wk_lang")) || "zh",
  tab: "home", view: "home", hist: [],
  cart: {}, pay: "wechat", toast: "",
  service: null, merchant: null, item: null,
  cuisine: "all", listTab: "rec", dealChip: "all", orderTab: "ot.all", shopTab: "menu", sec: 0,
  address: ADDRESSES[0], balance: 480800, points: 1054657, orders: [], last: "",
};
if (!LI.hasOwnProperty(state.lang)) state.lang = "zh";

/* ---------- i18n helpers ---------- */
const tr = (arr) => (Array.isArray(arr) ? arr[LI[state.lang]] ?? arr[0] : arr);
const t = (key, ...args) => {
  const row = I18N[key];
  let s = row ? tr(row) : key;
  args.forEach((a, i) => { s = s.split(`{${i}}`).join(a); });
  return s;
};
const fmt = (n) => Math.round(n).toLocaleString("id-ID");
const rp = (n) => "Rp " + fmt(n);
const rpTag = (n) => `<span class="price"><small>Rp</small>${fmt(n)}</span>`;
const stars = (v) => "★".repeat(Math.round(v)) + "☆".repeat(5 - Math.round(v));

/* ---------- data access ---------- */
const DB = typeof DATA === "undefined" ? { merchants: [], deals: [], catalog: {}, dishes: [], areas: [], brands: [], kinds: [], cats: {}, catOrder: [], cuisines: {}, taglines: {}, promos: [] } : DATA;
DB.merchants.forEach((m) => m.products.forEach((p) => { p.m = m; p.img = `static/dishes/d${String(p.d).padStart(2, "0")}${p.v ? "b" : "a"}.jpg`; }));
const M = () => DB.merchants;
const D = () => DB.deals;
const C = () => DB.catalog;
const findShop = (id) => M().find((m) => m.id === id);
const allItems = () => [...M().flatMap((m) => m.products), ...D(), ...Object.values(C()).flatMap((c) => c.items)];
const findItem = (id) => allItems().find((x) => x.id === id);
const isDish = (it) => !!(it && it.m);
const isDeal = (it) => !!(it && /^g\d\d$/.test(it.id));

const mName = (m) => {
  const b = tr(DB.brands[m.b]);
  const k = tr(DB.kinds[m.k]);
  const bz = DB.brands[m.b][0];
  const kz = DB.kinds[m.k][0];
  const merged = bz.endsWith(kz[kz.length - 1]) || bz.includes(kz);
  let base;
  if (merged) base = b;
  else if (state.lang === "zh") base = b + k;
  else if (state.lang === "id") base = k + " " + b;
  else base = b + " " + k;
  if (!m.suffix) return base;
  return base + (state.lang === "zh" ? "·" : " · ") + tr(DB.areas[m.a].s);
};
const mArea = (m) => tr(DB.areas[m.a].n);
const mAddr = (m) => DB.areas[m.a].addr;
const mCuisine = (m) => tr(DB.cuisines[m.cuisine]);
const mTagline = (m) => tr(DB.taglines[m.cuisine]);
const mPromos = (m) => DB.promos[m.promo].map(tr);
const dishOf = (p) => DB.dishes[p.d];
const pName = (p) => tr(dishOf(p).n);
const pEn = (p) => dishOf(p).n[1];
const pDesc = (p) => t("dish.desc", mName(p.m), pName(p), pEn(p), mArea(p.m), p.mins);

const dealName = (d) => {
  const m = findShop(d.shopId);
  if (d.kind === 0) return t("deal.set", mCuisine(m));
  if (d.kind === 1) return t("deal.voucher", fmt(d.face));
  return t("deal.buf." + d.buf);
};
const dealImg = (d) => (d.img ? d.img : findShop(d.shopId).products[d.pidx].img);
const dealNote = (d) => t("deal.note." + d.kind);

const itemName = (it) => (isDish(it) ? pName(it) : isDeal(it) ? dealName(it) : tr(it.name));
const itemImg = (it) => (isDish(it) ? it.img : isDeal(it) ? dealImg(it) : it.img);
const itemShop = (it) => (isDish(it) ? mName(it.m) : isDeal(it) ? mName(findShop(it.shopId)) : tr(it.shop));
const itemArea = (it) => (isDish(it) ? mArea(it.m) : isDeal(it) ? mArea(findShop(it.shopId)) : tr(it.area));
const itemUnit = (it) => (isDish(it) || isDeal(it) ? t("serving") : tr(it.unit));
const itemDesc = (it) => (isDish(it) ? pDesc(it) : isDeal(it) ? t("deal.desc", itemShop(it), dealName(it), dealNote(it)) : tr(it.desc));
const itemSub = (it) => (isDish(it) ? pEn(it) : isDeal(it) ? t("kind." + it.kind) : "");

const shopOfItem = (id) => (/^s\d{3}p\d{2}$/.test(id) ? id.slice(0, 4) : null);
const cartCount = () => Object.values(state.cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(state.cart).reduce((s, [id, n]) => s + (findItem(id) || { price: 0 }).price * n, 0);
const cartShops = () => [...new Set(Object.keys(state.cart).map(shopOfItem).filter(Boolean))];
const deliveryFee = () => cartShops().reduce((s, sid) => s + (findShop(sid) || { fee: 0 }).fee, 0);
const packFee = () => Object.keys(state.cart).filter(shopOfItem).length * 2000;

function seedOrders() {
  const a = findShop("s006");
  const b = findShop("s001");
  if (!a || !b) return;
  state.orders = [
    { id: "WK26102009", shopId: a.id, status: "ot.live", st: "st.rider", items: a.products.slice(0, 2).map((p) => ({ id: p.id, n: 6 })), count: 12, total: 465000, pay: "pay.wallet", at: "2026-10-20 09:58:46", deliver: "o.platform" },
    { id: "WK26101919", shopId: b.id, status: "ot.done", st: "st.delivered", items: b.products.slice(2, 5).map((p) => ({ id: p.id, n: 1 })), count: 3, total: 128000, pay: "pay.wechat", at: "2026-10-19 19:12:08", deliver: "o.platform", reviewed: false },
  ];
}

/* ---------- navigation ---------- */
function toast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => { if (state.toast === msg) { state.toast = ""; render(); } }, 1600);
}
function snapshot() {
  const { view, tab, service, merchant, item, shopTab, orderTab } = state;
  return { view, tab, service, merchant, item, shopTab, orderTab };
}
function go(view, tab) {
  state.hist.push(snapshot());
  if (state.hist.length > 40) state.hist.shift();
  state.view = view;
  if (tab) state.tab = tab;
  render();
  window.scrollTo(0, 0);
}
function switchTab(id) {
  state.hist = [];
  state.view = id;
  state.tab = id;
  render();
  window.scrollTo(0, 0);
}
function back() {
  const s = state.hist.pop();
  if (s) Object.assign(state, s);
  else { state.view = "home"; state.tab = "home"; }
  render();
  window.scrollTo(0, 0);
}
function openService(id) {
  if (id === "dine") return switchTab("dine");
  if (id === "food") return go("food", "home");
  if (id === "deal") { state.listTab = "deal"; return switchTab("home"); }
  state.service = id;
  go("svc", state.tab);
}
function openShop(id) {
  state.merchant = id;
  state.shopTab = "menu";
  state.sec = 0;
  go("shop");
}
function setLang(code) {
  state.lang = code;
  try { localStorage.setItem("wk_lang", code); } catch (e) { /* private mode */ }
  document.documentElement.lang = code === "zh" ? "zh-CN" : code;
  back();
  toast(t("t.lang"));
}

/* ---------- cart ---------- */
function add(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  toast(t("t.added"));
}
function setQty(id, d) {
  const n = (state.cart[id] || 0) + d;
  if (n <= 0) delete state.cart[id];
  else state.cart[id] = n;
  render();
}
function placeOrder() {
  if (!cartCount()) return;
  const ids = Object.keys(state.cart);
  const sid = shopOfItem(ids[0]);
  const first = findItem(ids[0]);
  const id = "WK" + Date.now().toString().slice(-8);
  const total = cartTotal() + deliveryFee() + packFee();
  if (state.pay === "wallet") state.balance = Math.max(0, state.balance - total);
  state.orders.unshift({
    id,
    shopId: sid || (isDeal(first) ? first.shopId : null),
    shopName: sid || isDeal(first) ? null : itemShop(first),
    status: "ot.live",
    st: sid ? "st.accepting" : "st.booked",
    items: ids.map((x) => ({ id: x, n: state.cart[x] })),
    count: cartCount(),
    total,
    pay: PAYS.find((p) => p.id === state.pay).name,
    at: new Date().toLocaleString("zh-CN", { hour12: false }).replace(/\//g, "-"),
    deliver: sid ? "o.platform" : "o.onsite",
  });
  state.cart = {};
  state.last = id;
  state.hist = [];
  state.view = "done";
  state.tab = "me";
  render();
  window.scrollTo(0, 0);
}

/* ---------- shared pieces ---------- */
function nav() {
  return `<nav class="nav">${["home", "dine", "msgs", "me"]
    .map((id) => `<button class="${state.tab === id ? "on" : ""}" data-tab-go="${id}">${ICON[id]}${t("nav." + id)}${id === "msgs" ? '<span class="n-badge">8</span>' : ""}</button>`)
    .join("")}</nav>`;
}
const bar = (title, extra = "") => `<div class="bar"><button class="icon-btn" data-go="back">${ICON.back}</button><h1>${title}</h1>${extra}</div>`;
const tile = (s) => `<button class="tile" data-svc="${s}"><img src="static/icons/${s}.jpg" alt="" onerror="this.src='static/logo.jpg'"><b>${t("svc." + s)}</b></button>`;
const langPill = () => `<button class="lang-pill" data-go="lang">${state.lang === "zh" ? "中" : state.lang.toUpperCase()}</button>`;

function merchantCard(m) {
  return `<button class="mcard" data-merch="${m.id}">
    <div class="logo"><img src="${m.cover}" alt="" loading="lazy">${m.exclusive ? `<span class="ribbon">${t("exclusive")}</span>` : ""}</div>
    <div class="info">
      <div class="name">${m.chain ? `<span class="chain">${t("chain")}</span>` : ""}${m.brand ? `<span class="brandtag">${t("brand")}</span>` : ""}<span>${mName(m)}</span><span class="badge-send">${t("express")}</span></div>
      <div class="meta"><span class="star">★ ${m.score}</span><i class="sep"></i><span>${t("sold.mo", m.sales)}</span></div>
      <div class="fee">${m.fee ? `<span>${t("fee.from", rp(m.fee))}</span>` : `<span class="free">${t("fee.free")}</span>`}<span>${m.mins}min</span><span>≈${m.dist}km</span></div>
      <div class="chipline"><span class="tagline">${mTagline(m)}</span></div>
      <div class="chipline">${mPromos(m).map((p) => `<span class="promo-chip">${p}</span>`).join("")}</div>
    </div>
  </button>`;
}
function cartBar(lift) {
  const n = cartCount();
  const total = cartTotal();
  const shop = state.view === "shop" ? findShop(state.merchant) : null;
  const min = shop ? shop.minOrder : 0;
  const fee = shop ? shop.fee : deliveryFee();
  let btn = `<button class="go off">${t("min.order", rp(min))}</button>`;
  if (n) btn = total >= min ? `<button class="go" data-go="cart">${t("checkout")}</button>` : `<button class="go off">${t("min.gap", rp(min - total))}</button>`;
  return `<div style="height:${lift ? 72 : 84}px"></div><div class="cart-bar ${lift ? "lift" : ""}"><div class="inner">
    <div class="cart-ic"><img src="static/logo.jpg" alt="">${n ? `<span class="n">${n}</span>` : ""}</div>
    <div class="tx">${n
      ? `<b>${rp(total)}</b><small>${fee ? t("cart.fee", rp(fee)) : t("fee.free")} · ${t("cart.n", n)}</small>`
      : `<b style="color:#b5afaa;font-weight:500">${t("cart.none")}</b><small>${t("cart.incl")}</small>`}</div>
    ${btn}
  </div></div>`;
}
function qtyCtl(id) {
  const n = state.cart[id] || 0;
  if (!n) return `<button class="plus" data-add="${id}">+</button>`;
  return `<div class="qty"><button class="dec" data-qty="${id}" data-d="-1">−</button><b>${n}</b><button class="inc" data-qty="${id}" data-d="1">+</button></div>`;
}

/* ---------- home ---------- */
function filteredList() {
  const all = M();
  if (state.listTab === "deal") return all.filter((m) => m.products.some((p) => p.price <= 29000));
  if (state.listTab === "free") return all.filter((m) => m.fee === 0);
  if (state.listTab === "dist") return [...all].sort((a, b) => a.dist - b.dist);
  return all;
}
function home() {
  const list = filteredList();
  const active = state.orders.find((o) => o.status === "ot.live" && o.shopId);
  const activeShop = active && findShop(active.shopId);
  const lunch = M().slice(0, 10).map((m, i) => ({ m, p: m.products[(i * 5) % 32] }));
  return `<section class="screen">
    <header class="hd">
      <div class="row gap">
        <button class="addr" data-go="address"><span class="pin">📍</span><span class="txt">${t("city")} | ${state.address.name}</span><span class="caret">▾</span></button>
        ${langPill()}
      </div>
      <div class="search-bar" data-go="food"><span>${t("search.ph")}</span><i>⌕</i></div>
    </header>
    <div class="body">
      <div class="svc-card">
        <div class="svc-pages hide-scroll" style="display:flex;overflow-x:auto;scroll-snap-type:x mandatory">
          <div class="grid5" style="flex:0 0 100%;scroll-snap-align:start">${SERVICES.slice(0, 10).map(tile).join("")}</div>
          <div class="grid5" style="flex:0 0 100%;scroll-snap-align:start">${SERVICES.slice(10).map(tile).join("")}</div>
        </div>
        <div class="dots"><i class="on"></i><i></i></div>
      </div>
      <div class="quick hide-scroll">${QUICK.map(([k, s], i) => `<button data-svc="${s}"><em>${["%", "$", "✦", "♨", "✓"][i]}</em>${t(k)}</button>`).join("")}</div>
      <div class="banner" data-svc="wallet">
        <img src="static/banners/recharge.jpg" alt="" onerror="this.remove()">
        <div class="cap"><b class="y">${t("bn.recharge")}</b><small>${t("bn.recharge.sub")}<br>${t("bn.recharge.sub2")}</small></div>
      </div>
      <div class="promo2">
        <div class="banner big" data-svc="mart"><img src="static/banners/mart.jpg" alt="" onerror="this.remove()"><div class="cap"><b>${t("bn.mart")}</b><small>${t("bn.mart.sub")}</small></div></div>
        <div class="col">
          <div class="banner" data-svc="deal"><img src="static/banners/deal99.jpg" alt="" onerror="this.remove()"><div class="cap"><b class="y">Rp 29K</b><small>${t("bn.deal.sub")}</small></div></div>
          <div class="banner" data-svc="dine"><img src="static/banners/deal150.jpg" alt="" onerror="this.remove()"><div class="cap"><b>${t("bn.dine")}</b><small>${t("bn.dine.sub")}</small></div></div>
        </div>
      </div>
      <div class="sec"><h3>${t("lunch.title")}</h3><button data-go="food">${t("more")}</button></div>
      <div class="hcards hide-scroll">${lunch.map(({ m, p }) => `<div class="hcard">
        <div class="ph" data-merch="${m.id}"><img src="${p.img}" alt="" loading="lazy"><span class="tag">${mName(m)} · ${mCuisine(m)}</span></div>
        <div class="tx"><b>${pName(p)}</b><div class="between">${rpTag(p.price)}<button class="plus" data-add="${p.id}">+</button></div></div>
      </div>`).join("")}</div>
      <div class="ltabs">
        <button class="${state.listTab === "rec" ? "on" : ""}" data-list="rec">${t("tab.rec")}</button>
        <button class="flag a ${state.listTab === "deal" ? "on" : ""}" data-list="deal">${t("tab.deal")}</button>
        <button class="flag b ${state.listTab === "free" ? "on" : ""}" data-list="free">${t("tab.free")}</button>
        <span class="sp"></span>
        <button class="${state.listTab === "dist" ? "on" : ""}" data-list="dist">${t("tab.dist")}</button>
      </div>
      <div class="mlist">${list.map(merchantCard).join("")}</div>
      <p class="count-note">${t("count.home", list.length)}</p>
    </div>
    ${active ? `<button class="pickup" data-go="orders"><img src="${activeShop ? activeShop.cover : "static/logo.jpg"}" alt=""><span>${t("pickup")}</span></button>` : ""}
    ${cartCount() ? cartBar(true) : ""}
  </section>`;
}

/* ---------- all restaurants ---------- */
function foodList() {
  const cuisines = ["all", ...new Set(M().map((m) => m.cuisine))];
  const list = state.cuisine === "all" ? M() : M().filter((m) => m.cuisine === state.cuisine);
  return `<section class="screen no-nav">
    ${bar(t("food.all"))}
    <div class="quick hide-scroll" style="padding-top:10px">${cuisines
      .map((c) => `<button data-cuisine="${c}" style="${state.cuisine === c ? "background:#1f1a17;color:#fff" : ""}">${c === "all" ? t("all") : tr(DB.cuisines[c])}</button>`)
      .join("")}</div>
    <div class="mlist" style="padding-top:12px">${list.map(merchantCard).join("")}</div>
    <p class="count-note">${t("count.rest", list.length)}</p>
    ${cartCount() ? cartBar(false) : ""}
  </section>`;
}

/* ---------- shop ---------- */
function shopSections(m) {
  const ps = m.products;
  const secs = [{ name: t("sec.sig"), items: ps.slice(0, 4) }, { name: t("sec.hot"), items: ps.slice(4, 8) }];
  const rest = ps.slice(8);
  DB.catOrder.forEach((c) => {
    const it = rest.filter((p) => dishOf(p).cat === c);
    if (it.length) secs.push({ name: tr(DB.cats[c]), items: it });
  });
  return secs;
}
function itemRow(p) {
  return `<div class="item">
    <img src="${p.img}" alt="" loading="lazy" data-item="${p.id}">
    <div class="t"><div data-item="${p.id}"><b>${pName(p)}</b><br><small>${t("sold.stock", p.sold)}</small></div>
      <div class="between">${rpTag(p.price)}${qtyCtl(p.id)}</div></div>
  </div>`;
}
function shopReviews(m) {
  const idx = Number(m.id.slice(1));
  return `<div style="background:#fff">${[0, 1, 2, 3, 4, 5].map((k) => {
    const name = REVIEW_NAMES[(idx + k) % REVIEW_NAMES.length];
    const sc = 5 - (k % 3 === 2 ? 1 : 0);
    const pics = k % 2 ? m.products.slice(k, k + 2).map((p) => `<img src="${p.img}" alt="">`).join("") : "";
    return `<div class="review"><div class="av">${name[0]}</div><div class="t">
      <div class="between"><b>${name}</b><small>2026-10-${String(18 - k).padStart(2, "0")}</small></div>
      <div class="stars"><span class="s">${stars(sc)}</span><small class="muted">${pName(m.products[k])}</small></div>
      <p>${t("rv." + ((idx * 3 + k) % 8))}</p>${pics ? `<div class="pics">${pics}</div>` : ""}</div></div>`;
  }).join("")}<p class="count-note">${t("reviews.total", m.reviews)}</p></div>`;
}
function shopInfo(m) {
  return `<div style="background:#fff">
    <div class="info-row"><span class="ic">📍</span><span>${mAddr(m)}</span></div>
    <div class="info-row"><span class="ic">🛵</span><span>${t("info.delivery", m.mins)}</span></div>
    <div class="info-row"><span class="ic">🕙</span><span>${t("info.hours", m.hours)}</span></div>
    <div class="info-row"><span class="ic">📄</span><span>${t("info.licence")}</span></div>
    <div class="info-pics"><img src="${m.cover}" alt=""><img src="${m.products[0].img}" alt=""><img src="${m.products[9].img}" alt=""></div>
    <div class="info-row"><span class="ic">💬</span><button data-toast="t.phone" style="color:#ff4d2a;font-weight:600">${t("info.contact")}</button></div>
  </div>`;
}
function shopView() {
  const m = findShop(state.merchant) || M()[0];
  if (!m) return home();
  const secs = shopSections(m);
  let body = "";
  if (state.shopTab === "menu") {
    body = `<div class="menu-wrap">
      <div class="side">${secs.map((s, i) => `<button class="${state.sec === i ? "on" : ""}" data-sec="${i}">${s.name}</button>`).join("")}</div>
      <div class="items">${secs.map((s, i) => `<h4 id="sec-${i}">${s.name}</h4>${s.items.map(itemRow).join("")}`).join("")}</div>
    </div>`;
  } else if (state.shopTab === "reviews") body = shopReviews(m);
  else body = shopInfo(m);
  return `<section class="screen no-nav">
    <div class="shop-cover"><img src="${m.cover}" alt="">
      <div class="tools"><button data-go="back">${ICON.back}</button><span class="sp"></span><button data-toast="t.search">${ICON.search}</button><button data-toast="t.saved">${ICON.heart}</button><button data-toast="t.share">${ICON.share}</button></div>
    </div>
    <div class="shop-head">
      <div class="t"><h1>${mName(m)}</h1>
        <div class="meta"><span>${t("sold.mo", m.sales)}</span><span>· ${m.dist}km</span><span>· ${t("platform.delivery", m.mins)}</span></div>
        <div class="stars"><span class="s">${stars(m.score)}</span><span class="v">${m.score}</span><span class="tagline">${mTagline(m)}</span></div>
      </div>
      <img class="lg" src="${m.cover}" alt="">
    </div>
    <div class="stabs">
      <button class="${state.shopTab === "menu" ? "on" : ""}" data-stab="menu">${t("stab.menu")}</button>
      <button class="${state.shopTab === "reviews" ? "on" : ""}" data-stab="reviews">${t("stab.reviews")}<small>${m.reviews}</small></button>
      <button class="${state.shopTab === "info" ? "on" : ""}" data-stab="info">${t("stab.info")}</button>
    </div>
    ${body}
    ${cartBar(false)}
  </section>`;
}

/* ---------- detail ---------- */
function detailView() {
  const it = findItem(state.item);
  if (!it) return back();
  const dish = isDish(it);
  const deal = isDeal(it);
  const shop = dish ? it.m : deal ? findShop(it.shopId) : null;
  const cta = dish ? t("add.cart") : deal ? t("buy.now") : t("book");
  return `<section class="screen no-nav">
    <div class="hero-photo"><img src="${itemImg(it)}" alt=""><button class="back" data-go="back">‹</button></div>
    <div class="sheet">
      <h2>${itemName(it)}</h2>
      <div class="muted" style="margin-top:4px">${[itemSub(it), itemShop(it), itemArea(it)].filter(Boolean).join(" · ")}</div>
      <div class="between" style="margin-top:10px"><span class="price" style="font-size:22px"><small>Rp</small>${fmt(it.price)}${it.orig ? `<span style="color:#b8b2ac;text-decoration:line-through;font-size:12px;margin-left:6px;font-weight:500">Rp ${fmt(it.orig)}</span>` : ""}</span>
        <span class="muted">${itemUnit(it)}${it.sold ? " · " + t("sold.n", it.sold) : ""}${it.score ? " · ★ " + it.score : ""}</span></div>
      <p>${itemDesc(it)}</p>
      ${shop ? `<div class="kv" style="border-top:1px solid #f0ecea;margin-top:8px"><span>${t("merchant")}</span><b data-merch="${shop.id}" style="color:#ff4d2a">${mName(shop)} ›</b></div>
      <div class="kv"><span>${t("delivery")}</span><b>${shop.fee ? t("fee.n", rp(shop.fee)) : t("fee.free")} · ${t("mins.n", shop.mins)}</b></div>` : ""}
      ${dish ? "" : `<p class="sheet-note">${deal ? t("note.deal") : t("note.svc")}</p>`}
    </div>
    <div class="fixed-cta"><button class="cta" data-add="${it.id}" data-after="${dish ? "back" : "cart"}">${cta} · ${rp(it.price)}</button></div>
  </section>`;
}

/* ---------- cart / pay / done ---------- */
function cartView() {
  const rows = Object.keys(state.cart).map(findItem).filter(Boolean);
  if (!rows.length) {
    return `<section class="screen no-nav">${bar(t("cart"))}
      <div class="empty"><div class="box"></div>${t("cart.empty")}<br><button class="cta ghost" style="display:inline-block;width:auto;padding:10px 22px;margin-top:14px" data-tab-go="home">${t("browse")}</button></div></section>`;
  }
  const fee = deliveryFee();
  const pack = packFee();
  const total = cartTotal() + fee + pack;
  return `<section class="screen no-nav">${bar(t("cart"))}
    <div class="card">${rows.map((f) => `<div class="line-item"><img src="${itemImg(f)}" alt="">
      <div class="t"><b>${itemName(f)}</b><small>${itemShop(f)}</small><div class="price" style="margin-top:4px">${rp(f.price)}</div></div>
      <div class="qty"><button class="dec" data-qty="${f.id}" data-d="-1">−</button><b>${state.cart[f.id]}</b><button class="inc" data-qty="${f.id}" data-d="1">+</button></div></div>`).join("")}</div>
    <div class="card">
      <div class="kv"><span>${t("subtotal")}</span><b>${rp(cartTotal())}</b></div>
      <div class="kv"><span>${t("fee")}</span><b>${fee ? rp(fee) : t("fee.free")}</b></div>
      <div class="kv"><span>${t("pack")}</span><b>${rp(pack)}</b></div>
      <div class="kv" style="border-top:1px solid #f0ecea;font-size:15px"><span>${t("total")}</span><b class="price">${rp(total)}</b></div>
    </div>
    <div class="fixed-cta"><button class="cta" data-go="pay">${t("to.pay", rp(total))}</button></div>
  </section>`;
}
function payView() {
  const total = cartTotal() + deliveryFee() + packFee();
  return `<section class="screen no-nav">${bar(t("confirm.order"))}
    <button class="card" style="display:flex;gap:10px;width:calc(100% - 24px);align-items:center" data-go="address">
      <span style="font-size:20px">📍</span><div style="flex:1"><b style="font-size:15px">${state.address.name}</b><div class="muted">${state.address.sub} · ${t("user")} 62-****1519</div></div><span class="chev">›</span>
    </button>
    <div class="card"><h3>${t("summary")}</h3>
      <div class="kv"><span>${t("items")}</span><b>${cartCount()}</b></div>
      <div class="kv"><span>${t("delivery.time")}</span><b>${t("asap")}</b></div>
      <div class="kv"><span>${t("sum.line")}</span><b>${rp(total)}</b></div>
    </div>
    <div class="card"><h3>${t("pay.method")}</h3>
      ${PAYS.map((p) => `<button class="pay-opt" style="width:100%" data-pay="${p.id}">
        <span class="lg" style="background:${p.bg}">${p.mark}</span>
        <span class="t"><b>${t(p.name)}</b><small>${p.id === "wallet" ? t("balance.avail", rp(state.balance)) : t(p.note)}</small></span>
        <span class="radio ${state.pay === p.id ? "on" : ""}"></span></button>`).join("")}
      <p class="sheet-note">${t("pay.note")}</p>
    </div>
    <div class="fixed-cta"><button class="cta" data-order="1">${t("pay.confirm", rp(total))}</button></div>
  </section>`;
}
function doneView() {
  return `<section class="screen no-nav">
    <div class="ok-hero"><div class="big">✓</div><h2>${t("done.title")}</h2><p>${t("done.sub", state.last)}<br>${t("done.demo")}</p></div>
    <button class="cta" data-go="orders">${t("view.orders")}</button>
    <button class="cta ghost" data-tab-go="home">${t("back.home")}</button>
  </section>`;
}

/* ---------- orders ---------- */
const OTABS = ["ot.all", "ot.pending", "ot.live", "ot.review", "ot.done", "ot.refund"];
function orderShopName(o) {
  if (o.shopId) return mName(findShop(o.shopId));
  return o.shopName || t("svc.wallet");
}
function ordersView() {
  const tb = state.orderTab;
  const list = state.orders.filter((o) => {
    if (tb === "ot.all") return true;
    if (tb === "ot.review") return o.status === "ot.done" && !o.reviewed;
    return o.status === tb;
  });
  return `<section class="screen no-nav">${bar(t("orders"))}
    <div class="otabs hide-scroll">${OTABS.map((x) => `<button class="${tb === x ? "on" : ""}" data-otab="${x}">${t(x)}</button>`).join("")}</div>
    ${list.length ? list.map((o) => `<div class="ocard">
      <div class="between"><button class="shop" data-merch="${o.shopId || ""}">${o.shopId ? `<img src="${findShop(o.shopId).cover}" alt="">` : ""}${orderShopName(o)} ›</button><span class="st ${o.status === "ot.live" ? "live" : ""}">${t(o.st)}</span></div>
      <div class="thumbs">${o.items.slice(0, 4).map((i) => { const it = findItem(i.id); return it ? `<div><img src="${itemImg(it)}" alt=""><small>${itemName(it)}</small></div>` : ""; }).join("")}</div>
      <div class="l">${t("o.time", o.at)}</div>
      <div class="l">${t("o.qty", o.count, t(o.pay))}</div>
      <div class="paid"><span>${t("o.paid", rp(o.total))}</span><small>${t(o.deliver)}</small></div>
      <div class="acts">${o.status === "ot.live"
        ? `<button data-toast="t.track">${t("o.track")}</button><button class="pri" data-toast="t.rider">${t("o.rider")}</button>`
        : o.status === "ot.done"
          ? `<button data-merch="${o.shopId || ""}">${t("o.again")}</button>${o.reviewed ? "" : `<button class="pri" data-review="${o.id}">${t("o.review")}</button>`}`
          : `<button class="pri" data-go="pay">${t("o.pay")}</button>`}</div>
    </div>`).join("")
      : `<div class="empty"><div class="box"></div>${t("empty")}</div>`}
  </section>`;
}

/* ---------- messages ---------- */
function msgsView() {
  const m0 = M()[0];
  const m2 = M()[2];
  const list = [
    { title: t("m.group"), prev: t("m.group.p"), time: "2026-10-18 19:03", av: "💬", bg: "#e8f0ff", n: 8 },
    { title: t("m.order"), prev: t("m.order.p"), time: t("m.min", 9), av: "🧾", bg: "#e8f0ff" },
    { title: t("m.acct"), prev: t("m.acct.p"), time: t("m.min", 11), av: "👛", bg: "#fff4e0" },
    { title: t("m.welfare"), prev: t("m.welfare.p"), time: "2026-10-12 12:00", img: "static/logo.jpg" },
    { title: mName(m0), prev: t("m.shop.p", mName(m0)), time: "2026-08-29 10:00", img: m0.cover },
    { title: mName(m2), prev: t("m.shop.p", mName(m2)), time: "2026-06-27 10:00", img: m2.cover },
    { title: t("m.officer"), prev: t("m.officer.p"), time: "2026-05-10 16:00", img: "static/logo.jpg" },
    { title: t("m.ontime"), prev: t("m.ontime.p"), time: "2026-01-03 01:00", img: "static/logo.jpg" },
    { title: t("m.asst"), prev: t("m.asst.p"), time: "2025-12-04 10:00", av: "🪙", bg: "#fff4e0" },
  ];
  return `<section class="screen">
    <div class="page-title"><h1>${t("msgs")}</h1><span class="pill-soft">⌂ ${t("read.all")}</span><span class="sp"></span><button class="link" data-toast="t.support">🎧 ${t("support")}</button></div>
    ${list.map((x) => `<button class="msg" data-toast="t.msg">
      <div class="av" style="background:${x.bg || "#fff"}">${x.img ? `<img src="${x.img}" alt="">` : x.av}${x.n ? `<span class="n">${x.n}</span>` : ""}</div>
      <div class="t"><div class="between"><b>${x.title}</b><small>${x.time}</small></div><p>${x.prev}</p></div>
    </button>`).join("")}
  </section>`;
}

/* ---------- me ---------- */
function meView() {
  const live = state.orders.filter((o) => o.status === "ot.live").length;
  const toReview = state.orders.filter((o) => o.status === "ot.done" && !o.reviewed).length;
  const pending = state.orders.filter((o) => o.status === "ot.pending").length;
  const langName = LANGS.find((l) => l[0] === state.lang)[1];
  const row = (icon, label, attrs, right = "") => `<button ${attrs}><span class="ic">${icon}</span>${label}<span class="sp"></span>${right}<span class="chev">›</span></button>`;
  return `<section class="screen">
    <div class="me-top">
      <img class="wm" src="static/logo.jpg" alt="">
      <div class="tools"><button data-go="lang">文 ${langName}</button><button data-go="about">⚙</button></div>
      <div class="user"><img src="static/logo.jpg" alt=""><div><b>62-****1519</b><small>${t("edit")}</small></div></div>
      <div class="wallet">
        <div><div class="k">${t("balance")}</div><div class="v">${fmt(state.balance)}</div></div>
        <div><div class="k">${t("points")}</div><div class="v">${fmt(state.points)}</div></div>
        <div class="wside"><span class="crown">👑</span><button data-svc="wallet">${t("topup")}</button></div>
      </div>
      <div class="vipbar"><span>${t("dragon")}</span><button data-svc="vip">${t("activate")}</button></div>
    </div>
    <div class="menu">
      ${row("🧧", t("me.coupons"), 'data-toast="t.coupons"')}
      ${row("🏷️", t("me.deals"), 'data-svc="deal"')}
      ${row("🎁", t("me.invite"), 'data-toast="t.invite"')}
      ${row("✅", t("me.tasks"), 'data-toast="t.tasks"')}
    </div>
    <div class="menu">
      <div class="mh">${t("orders")}</div>
      ${row("📋", t("me.orders.all"), 'data-orders="ot.all"')}
      ${row("💳", t("me.pay"), 'data-orders="ot.pending"', pending ? `<span class="cnt">${pending}</span>` : "")}
      ${row("🕒", t("ot.live"), 'data-orders="ot.live"', live ? `<span class="cnt">${live}</span>` : "")}
      ${row("💬", t("ot.review"), 'data-orders="ot.review"', toReview ? `<span class="cnt">${toReview}</span>` : "")}
    </div>
    <div class="menu">
      <div class="mh gold">${t("me.profile")}</div>
      ${row("📍", t("me.addr"), 'data-go="address"', `<span class="val">${state.address.tag ? t(state.address.tag) : ""}</span>`)}
      ${row("💰", t("me.payset"), 'data-toast="t.payset"')}
      ${row("🌐", t("me.lang"), 'data-go="lang"', `<span class="val">${langName}</span>`)}
      ${row("🎧", t("support"), 'data-toast="t.support"')}
      ${row("ℹ️", t("me.about"), 'data-go="about"')}
    </div>
  </section>`;
}

/* ---------- dine / group buy ---------- */
function dineView() {
  const buffets = D().filter((d) => d.kind === 2).slice(0, 4);
  const chip = state.dealChip;
  const kindOf = { "c.set": 0, "c.voucher": 1, "c.book": 2 };
  const list = chip === "all" ? D() : D().filter((d) => d.kind === kindOf[chip]);
  return `<section class="screen">
    <div class="dtop"><div class="row" style="justify-content:center;position:relative"><div class="ttl">${t("nav.dine")}</div><span style="position:absolute;right:0;top:4px">${langPill()}</span></div><div class="dsearch">⌕ ${t("dine.search")}</div></div>
    <div class="dgrid">${[["dine", "d.top", "dine"], ["food", "d.food", "food"], ["dessert", "d.dessert", "dine"], ["wok", "d.wok", "dine"], ["dinner", "d.dinner", "dine"]]
      .map(([ic, k, go]) => `<button class="tile" data-svc="${go}"><img src="static/icons/${ic}.jpg" alt="" onerror="this.src='static/logo.jpg'"><b>${t(k)}</b></button>`).join("")}</div>
    <div class="sec"><h3>${t("d.save")}<small>${t("d.flash")}</small></h3></div>
    <div class="dbanners hide-scroll">
      <div class="banner" data-chip="c.set"><img src="static/banners/dimsum.jpg" alt="" onerror="this.remove()"><div class="cap"><b>${t("d.canto")}</b><small>${t("d.canto.sub")}</small></div></div>
      <div class="banner" data-chip="c.voucher"><img src="static/banners/duck.jpg" alt="" onerror="this.remove()"><div class="cap"><b class="y">${t("d.sig")}</b><small>${t("d.sig.sub")}</small></div></div>
    </div>
    <div class="sec"><h3>${t("d.buffet")}<small>${t("d.buffet.sub")}</small></h3></div>
    <div class="buffets hide-scroll">${buffets.map((d, i) => `<button class="bcard" data-item="${d.id}">
      <div class="ph"><img src="${dealImg(d)}" alt="" onerror="this.src='${findShop(d.shopId).cover}'"><span class="score">★ ${d.score}</span></div>
      <div class="tx"><b>${itemShop(d)} · ${dealName(d)}</b><small>${t("d.rest")} · ${itemArea(d)}</small><q>${t("q." + (d.buf === 0 && i >= 3 ? 3 : d.buf))}</q></div>
    </button>`).join("")}</div>
    <div class="filters"><button>${t("f.loc")}</button><button>${t("f.cat")}</button><button>${t("f.sort")}</button><button>${t("f.filter")}</button></div>
    <div class="chips">${["all", "c.set", "c.voucher", "c.book"].map((c) => `<button class="${chip === c ? "on" : ""}" data-chip="${c}">${c === "all" ? t("all") : t(c)}</button>`).join("")}</div>
    ${list.map((d) => `<button class="deal" data-item="${d.id}">
      <img src="${dealImg(d)}" alt="" loading="lazy" onerror="this.src='${findShop(d.shopId).cover}'">
      <div class="t"><div class="shop"><em>${t("kind." + d.kind)}</em>${itemShop(d)} · ${itemArea(d)}</div><b>${dealName(d)}</b>
        <div class="between"><span>${rpTag(d.price)}<span class="orig">Rp ${fmt(d.orig)}</span></span><span class="sold">${t("sold.deal", d.sold)}</span></div></div>
    </button>`).join("")}
    <p class="count-note">${t("count.deal", list.length)}</p>
    ${cartCount() ? cartBar(true) : ""}
  </section>`;
}

/* ---------- service pages ---------- */
function offerRow(it) {
  return `<button class="offer" data-item="${it.id}">
    <img src="${it.img}" alt="" loading="lazy" onerror="this.src='static/logo.jpg'">
    <div class="t"><b>${tr(it.name)}</b><div class="sub">${tr(it.shop)}</div><div class="meta">★ ${it.score} · ${tr(it.area)} · ${tr(it.unit)}</div><div class="price">${rp(it.price)}</div></div>
    <span class="chev">›</span>
  </button>`;
}
function serviceView() {
  const id = state.service;
  if (id === "free") {
    const list = M().filter((m) => m.fee === 0);
    return `<section class="screen no-nav">${bar(t("free.title"))}
      <p class="lead" style="margin-top:10px">${t("free.lead")}</p>
      <div class="mlist">${list.map(merchantCard).join("")}</div><p class="count-note">${t("count.free", list.length)}</p>${cartCount() ? cartBar(false) : ""}</section>`;
  }
  if (id === "vip") {
    return `<section class="screen no-nav">${bar(t("vip.title"))}
      <div class="vipcard"><div class="between"><b>${t("dragon")}</b><span>WUKONG</span></div><div class="g">${t("vip.black")}</div><small>${t("vip.perks")}</small></div>
      <div class="perks"><div class="perk"><div class="e">🛵</div><b>${t("vip.p1")}</b><small>${t("vip.p1s")}</small></div><div class="perk"><div class="e">🏷️</div><b>${t("vip.p2")}</b><small>${t("vip.p2s")}</small></div><div class="perk"><div class="e">⭐</div><b>${t("vip.p3")}</b><small>${t("vip.p3s")}</small></div></div>
      <div class="card"><div class="kv"><span>${t("vip.month")}</span><b>${t("vip.month.v")}</b></div><div class="kv"><span>${t("vip.year")}</span><b>${t("vip.year.v")}</b></div></div>
      <div class="fixed-cta"><button class="cta" data-toast="t.vip">${t("vip.cta")}</button></div></section>`;
  }
  if (id === "wallet") {
    return `<section class="screen no-nav">${bar(t("svc.wallet"))}
      <div class="wallet" style="margin-top:12px;border-radius:16px"><div><div class="k">${t("balance")}</div><div class="v">${fmt(state.balance)}</div></div><div><div class="k">${t("points")}</div><div class="v">${fmt(state.points)}</div></div><div class="wside"><span class="crown">👑</span></div></div>
      <div class="card"><h3>${t("w.amount")}</h3>
        <div class="perks" style="padding:0;grid-template-columns:1fr 1fr">${[[100000, 5000], [200000, 15000], [500000, 50000], [1000000, 120000]].map(([a, g]) => `<button class="perk" data-toast="t.topup"><b>${rp(a)}</b><small>${t("w.bonus", rp(g))}</small></button>`).join("")}</div>
        <p class="sheet-note">${t("w.note")}</p></div>
      <div class="card"><h3>${t("w.recent")}</h3>
        <div class="kv"><span>${t("w.paid", "WK26102009")}</span><b>- Rp 465.000</b></div><div class="kv"><span>${t("w.bonus.line")}</span><b>+ Rp 50.000</b></div><div class="kv"><span>${t("topup")}</span><b>+ Rp 500.000</b></div></div></section>`;
  }
  const cat = C()[id];
  if (!cat) return home();
  return `<section class="screen no-nav">${bar(tr(cat.name))}
    <div class="scene"><img src="${SCENE_OF[id] || "static/scenes/hero.jpg"}" alt="" onerror="this.remove()"><div class="cap"><b>${tr(cat.name)}</b><small>${tr(cat.lead)}</small></div></div>
    <div class="offers">${cat.items.map(offerRow).join("")}</div>
    ${cartCount() ? cartBar(false) : ""}
  </section>`;
}

/* ---------- address / language / about ---------- */
function addressView() {
  return `<section class="screen no-nav">${bar(t("addr.title"))}
    <div class="addr-search"><span class="city">📍 ${t("city")} ▾</span><span class="in">⌕ ${t("addr.ph")}</span></div>
    <div class="addr-sec"><span>${t("addr.cur")}</span><button data-toast="t.relocated">${t("addr.relocate")}</button></div>
    <div class="addr-list"><button data-toast="t.cur"><span class="pin">◎</span><span>15336, Tangerang Selatan, Banten, Indonesia</span></button></div>
    <div class="addr-sec"><span>${t("addr.yours")}</span><button data-toast="t.addr.add">${t("addr.add")} ⊕</button></div>
    <div class="addr-list">${ADDRESSES.map((a) => `<button class="${state.address.id === a.id ? "on" : ""}" data-addr="${a.id}"><span class="pin">⌂</span><span>${a.name}${a.tag ? ` <span class="pill-soft">${t(a.tag)}</span>` : ""}<small>${a.sub}</small></span></button>`).join("")}</div>
    <div class="addr-sec"><span>${t("addr.sugg")}</span></div>
    <div class="addr-list">${SUGGESTED.map((s) => `<button data-toast-text="${t("t.addr.sel", s)}"><span class="pin">⌖</span><span>${s}</span></button>`).join("")}</div>
    <div class="fixed-cta"><button class="cta" data-toast="t.addr.add">${t("addr.add")}</button></div>
  </section>`;
}
function langView() {
  return `<section class="screen no-nav">${bar(t("lang.title"))}
    <p class="lead" style="margin-top:12px">${t("lang.lead")}</p>
    <div class="menu">${LANGS.map(([code, name]) => `<button data-lang="${code}"><span class="ic">${code === "zh" ? "中" : code.toUpperCase()}</span>${name}<span class="sp"></span><span class="radio ${state.lang === code ? "on" : ""}"></span></button>`).join("")}</div>
  </section>`;
}
function aboutView() {
  return `<section class="screen no-nav">${bar(t("about.title"))}
    <div class="card" style="text-align:center"><img src="static/logo.jpg" alt="" style="width:84px;height:84px;border-radius:22px;margin:6px auto 10px"><h3>${t("about.name")}</h3>
      <p class="muted">${t("about.desc")}</p></div>
    <div class="card"><div class="kv"><span>${t("about.op")}</span><b>WUKONG TEKNOLOGI NUSANTARA</b></div><div class="kv"><span>${t("about.city")}</span><b>${t("city")}</b></div><div class="kv"><span>${t("about.ver")}</span><b>${t("about.ver.v")}</b></div><div class="kv"><span>${t("me.lang")}</span><b data-go="lang" style="color:#ff4d2a">${LANGS.find((l) => l[0] === state.lang)[1]} ›</b></div></div>
    <p class="sheet-note" style="margin:0 16px">${t("about.note")}</p>
  </section>`;
}

/* ---------- router ---------- */
function screen() {
  switch (state.view) {
    case "food": return foodList();
    case "shop": return shopView();
    case "detail": return detailView();
    case "cart": return cartView();
    case "pay": return payView();
    case "done": return doneView();
    case "orders": return ordersView();
    case "svc": return serviceView();
    case "address": return addressView();
    case "lang": return langView();
    case "about": return aboutView();
    case "dine": return dineView();
    case "msgs": return msgsView();
    case "me": return meView();
    default: return home();
  }
}
const NAV_VIEWS = ["home", "dine", "msgs", "me"];
const IS_IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const STANDALONE = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
let hintClosed = false;
try { hintClosed = localStorage.getItem("wk_hint") === "1"; } catch (e) { /* ignore */ }
const isPhone = () => window.matchMedia("(max-width: 480px)").matches;
function installHint() {
  if (STANDALONE || hintClosed || state.view !== "home" || !isPhone() || cartCount()) return "";
  return `<div class="install-tip">
    <img src="static/icon-192.png" alt="">
    <div class="t"><b>${t("pwa.title")}</b><small>${IS_IOS ? t("pwa.ios") : t("pwa.other")}</small></div>
    <button data-hint-close="1">${t("pwa.close")}</button>
  </div>`;
}

function render() {
  const y = window.scrollY;
  const html = screen();
  if (typeof html !== "string") return;
  document.getElementById("app").innerHTML = html + (NAV_VIEWS.includes(state.view) ? nav() : "") + installHint() + (state.toast ? `<div class="toast">${state.toast}</div>` : "");
  window.scrollTo(0, y);
  bind();
}

function bind() {
  const on = (sel, fn) => document.querySelectorAll(sel).forEach((el) => el.addEventListener("click", (e) => fn(el, e)));
  on("[data-tab-go]", (el) => switchTab(el.dataset.tabGo));
  on("[data-go]", (el, e) => { e.stopPropagation(); if (el.dataset.go === "back") back(); else go(el.dataset.go, el.dataset.tab); });
  on("[data-svc]", (el, e) => { e.stopPropagation(); openService(el.dataset.svc); });
  on("[data-merch]", (el, e) => { e.stopPropagation(); if (el.dataset.merch) openShop(el.dataset.merch); });
  on("[data-item]", (el, e) => { e.stopPropagation(); state.item = el.dataset.item; go("detail"); });
  on("[data-add]", (el, e) => {
    e.stopPropagation();
    add(el.dataset.add);
    if (el.dataset.after === "cart") go("cart");
    else if (el.dataset.after === "back") back();
  });
  on("[data-qty]", (el, e) => { e.stopPropagation(); setQty(el.dataset.qty, Number(el.dataset.d)); });
  on("[data-list]", (el) => { state.listTab = el.dataset.list; render(); });
  on("[data-chip]", (el, e) => { e.stopPropagation(); state.dealChip = el.dataset.chip; render(); });
  on("[data-otab]", (el) => { state.orderTab = el.dataset.otab; render(); });
  on("[data-orders]", (el) => { state.orderTab = el.dataset.orders; go("orders"); });
  on("[data-stab]", (el) => { state.shopTab = el.dataset.stab; render(); });
  on("[data-sec]", (el) => {
    state.sec = Number(el.dataset.sec);
    render();
    const target = document.getElementById("sec-" + state.sec);
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 46, behavior: "smooth" });
  });
  on("[data-pay]", (el) => { state.pay = el.dataset.pay; render(); });
  on("[data-order]", () => placeOrder());
  on("[data-addr]", (el) => { state.address = ADDRESSES.find((a) => a.id === el.dataset.addr); back(); toast(t("t.addr.switch")); });
  on("[data-cuisine]", (el) => { state.cuisine = el.dataset.cuisine; render(); });
  on("[data-lang]", (el) => setLang(el.dataset.lang));
  on("[data-review]", (el) => {
    const o = state.orders.find((x) => x.id === el.dataset.review);
    if (o) o.reviewed = true;
    state.points += 50;
    toast(t("t.reviewed"));
  });
  on("[data-toast]", (el, e) => { e.stopPropagation(); toast(t(el.dataset.toast)); });
  on("[data-toast-text]", (el, e) => { e.stopPropagation(); toast(el.dataset.toastText); });
  on("[data-hint-close]", () => {
    hintClosed = true;
    try { localStorage.setItem("wk_hint", "1"); } catch (e) { /* ignore */ }
    render();
  });
  const pages = document.querySelector(".svc-pages");
  if (pages) {
    pages.addEventListener("scroll", () => {
      const idx = Math.round(pages.scrollLeft / pages.clientWidth);
      document.querySelectorAll(".dots i").forEach((d, i) => d.classList.toggle("on", i === idx));
    }, { passive: true });
  }
}

document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
seedOrders();
render();
