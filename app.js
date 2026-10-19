const FOODS = [
  { id: "nasi", name: "印尼炒饭", en: "Nasi Goreng Ayam", price: 45000, mins: 25, score: 4.8, emoji: "🍛", bg: "#fff4e5" },
  { id: "sate", name: "沙爹鸡肉串", en: "Sate Ayam", price: 38000, mins: 25, score: 4.8, emoji: "🍢", bg: "#fff1f2" },
  { id: "bakso", name: "牛肉丸汤面", en: "Bakso Sapi", price: 28000, mins: 30, score: 4.8, emoji: "🍜", bg: "#f5f3ff" },
  { id: "ikan", name: "炸鱼", en: "Ikan Goreng", price: 32000, mins: 28, score: 4.7, emoji: "🐟", bg: "#ecfeff" },
  { id: "hainan", name: "海南鸡饭", en: "Nasi Hainan", price: 42000, mins: 22, score: 4.9, emoji: "🍗", bg: "#fefce8" },
  { id: "kwetiau", name: "香辣炒粿条", en: "Kwetiau Goreng", price: 36000, mins: 20, score: 4.6, emoji: "🍝", bg: "#f0fdf4" },
];

const SERVICES = [
  { id: "food", name: "外卖", sub: "点餐配送", emoji: "🍱", tint: "#fff7ed" },
  { id: "mart", name: "超市", sub: "商超配送", emoji: "🛒", tint: "#f0fdf4" },
  { id: "dine", name: "餐厅团购", sub: "套餐订座", emoji: "🍽️", tint: "#fff1f2" },
  { id: "trip", name: "旅游", sub: "日游门票", emoji: "✈️", tint: "#eff6ff" },
  { id: "lunch", name: "午餐", sub: "工作日套餐", emoji: "🥗", tint: "#fefce8" },
  { id: "rent", name: "租车", sub: "自驾包车", emoji: "🔑", tint: "#fff7ed" },
  { id: "ride", name: "打车", sub: "持牌车队", emoji: "🚕", tint: "#ecfeff" },
  { id: "visa", name: "签证", sub: "资料协助", emoji: "📄", tint: "#eef2ff" },
  { id: "med", name: "医疗", sub: "健康入口", emoji: "🩺", tint: "#f0fdf4" },
  { id: "home", name: "到家服务", sub: "保洁维修", emoji: "🏠", tint: "#fff1f2" },
];

const PAYS = [
  { id: "wechat", name: "微信支付", note: "使用中国账户支付", mark: "微" },
  { id: "alipay", name: "支付宝", note: "使用中国账户支付", mark: "支" },
];
const LOCALS = [
  { id: "gopay", name: "GoPay" },
  { id: "ovo", name: "OVO" },
  { id: "qris", name: "QRIS" },
  { id: "va", name: "银行转账 VA" },
  { id: "cod", name: "货到付款" },
];

const CATALOG = {
  mart: {
    lead: "中国超市、便利店、生鲜，雅加达当日达",
    items: [
      { id: "m1", name: "老干妈 + 挂面组合", shop: "南方超市 · Kemang", area: "南雅加达", price: 86000, unit: "1 份", score: 4.8, emoji: "🥫", bg: "#fff7ed", desc: "老干妈 280g、挂面 2 把、榨菜 1 袋。下午 4 点前下单，当晚送达。" },
      { id: "m2", name: "火锅底料家庭装", shop: "川味仓 · PIK", area: "北雅加达", price: 129000, unit: "3 包", score: 4.7, emoji: "🌶️", bg: "#fff1f2", desc: "牛油、清汤、菌汤各一。可备注不要太辣。冷藏配送。" },
      { id: "m3", name: "时令水果箱", shop: "鲜到家", area: "中雅加达", price: 98000, unit: "约 3kg", score: 4.6, emoji: "🍉", bg: "#f0fdf4", desc: "芒果、蛇皮果、龙眼按当日到货搭配，坏果可拒收。" },
      { id: "m4", name: "日用补给包", shop: "Indomaret 代买", area: "全雅加达", price: 65000, unit: "起送", score: 4.5, emoji: "🧻", bg: "#f8fafc", desc: "纸巾、洗衣液、矿泉水。备注品牌，骑手按货架价代买，差价原路退。" },
    ],
  },
  dine: {
    lead: "中餐馆套餐、代金券和今晚订座",
    items: [
      { id: "d1", name: "双人川菜套餐", shop: "蜀香 · Senopati", area: "南雅加达", price: 268000, unit: "2 人", score: 4.9, emoji: "🍲", bg: "#fff1f2", desc: "水煮鱼小份、干煸四季豆、米饭 2 碗、酸梅汤。到店核销，免预约金以外的消费另计。" },
      { id: "d2", name: "代金券 Rp 100.000", shop: "鼎泰丰雅加达", area: "中雅加达", price: 88000, unit: "到店抵用", score: 4.8, emoji: "🎫", bg: "#fff7ed", desc: "消费满 Rp 200.000 可用。周末晚餐需提前订位，券不找零。" },
      { id: "d3", name: "今晚 19:30 订座", shop: "南海渔村 · PIK", area: "北雅加达", price: 50000, unit: "订金", score: 4.7, emoji: "🪑", bg: "#eff6ff", desc: "4 人位，靠窗。到店后订金抵餐费。迟到超过 20 分钟座位不保留。" },
      { id: "d4", name: "午餐工作餐", shop: "海南鸡饭 · Sudirman", area: "中雅加达", price: 45000, unit: "1 人", score: 4.6, emoji: "🍱", bg: "#fefce8", desc: "鸡腿饭 + 例汤。11:00–14:00 自取或写字楼配送。" },
    ],
  },
  trip: {
    lead: "一日游、门票和机场接送，中文司导",
    items: [
      { id: "t1", name: "雅加达城市半日游", shop: "悟空地陪", area: "老城区", price: 450000, unit: "1–2 人", score: 4.8, emoji: "🏛️", bg: "#eff6ff", desc: "独立广场、鸡场清真寺、唐人街。含中文司导 4 小时，不含午餐和门票。" },
      { id: "t2", name: "千岛一日游", shop: "普兰岛船班", area: "北雅加达码头", price: 890000, unit: "每人", score: 4.7, emoji: "🏝️", bg: "#ecfeff", desc: "早 7 点码头集合，含快艇、浮潜、简易午餐。需护照或 KITAS 复印件。" },
      { id: "t3", name: "机场接机", shop: "悟空专车", area: "CGK 机场", price: 280000, unit: "单程", score: 4.9, emoji: "✈️", bg: "#fff7ed", desc: "苏加诺-哈达机场到市中心。航班号填写后司机会在到达厅举牌。含 60 分钟免费等候。" },
      { id: "t4", name: "海洋世界门票", shop: "Sea World Ancol", area: "Ancol", price: 175000, unit: "成人", score: 4.5, emoji: "🐠", bg: "#f0fdf4", desc: "电子票，入园扫码。儿童票下单时备注年龄。" },
    ],
  },
  rent: {
    lead: "自驾、包车，车辆和保险在供应商侧",
    items: [
      { id: "r1", name: "丰田 Avanza 日租", shop: "南山租车", area: "机场 / 市区取车", price: 450000, unit: "24 小时", score: 4.6, emoji: "🚗", bg: "#fff7ed", desc: "含基础险、无限里程市区。押金 Rp 1.000.000，还车验车后退。需国际或印尼驾照。" },
      { id: "r2", name: "包车含司机", shop: "悟空车队", area: "全雅加达", price: 750000, unit: "10 小时", score: 4.8, emoji: "🧑‍✈️", bg: "#eff6ff", desc: "中文或英语司机。超时每小时 Rp 80.000。适合拜访和市区转场。" },
      { id: "r3", name: "埃尔法商务", shop: "阿尔法专线", area: "PIK / SCBD", price: 1800000, unit: "10 小时", score: 4.9, emoji: "🚐", bg: "#f5f3ff", desc: "7 座，含司机、水、充电。适合接待。提前一天预订。" },
    ],
  },
  ride: {
    lead: "呼叫持牌车队，平台只做撮合",
    items: [
      { id: "c1", name: "经济型 · 市区", shop: "合作蓝鸟 / 网约车队", area: "Kemang → SCBD", price: 65000, unit: "预估", score: 4.7, emoji: "🚕", bg: "#ecfeff", desc: "约 8 公里、25 分钟。价格按实时路况浮动，司机接单后锁定。可在 App 里看车牌。" },
      { id: "c2", name: "舒适型", shop: "合作车队", area: "PIK → 机场", price: 220000, unit: "预估", score: 4.8, emoji: "🚙", bg: "#eff6ff", desc: "后备箱可放 2 个登机箱。建议提前 3 小时从北雅加达出发。" },
      { id: "c3", name: "中文司机", shop: "悟空合作车队", area: "南雅加达", price: 95000, unit: "起", score: 4.9, emoji: "🗣️", bg: "#fff7ed", desc: "司机会说中文。适合第一次来雅加达、需要路边讲解的行程。" },
    ],
  },
  visa: {
    lead: "资料整理和表格预审，正式签证仍由使领馆或移民局签发",
    items: [
      { id: "v1", name: "落地签材料预审", shop: "悟空签证协助", area: "可线上", price: 150000, unit: "1 人", score: 4.8, emoji: "📄", bg: "#eef2ff", desc: "核对护照有效期、返程机票、酒店订单和资金证明。24 小时内给出缺件清单。我们不发签证。" },
      { id: "v2", name: "KITAS 续签材料包", shop: "悟空签证协助", area: "南雅加达可面交", price: 850000, unit: "1 份", score: 4.7, emoji: "📁", bg: "#fff7ed", desc: "按担保公司类型整理表格、照片规格、住址证明。含一次修改。移民局面签和规费自理。" },
      { id: "v3", name: "商务邀请函格式", shop: "文书组", area: "线上", price: 250000, unit: "1 封", score: 4.6, emoji: "✉️", bg: "#f8fafc", desc: "按印尼公司信头整理英文邀请函草稿，给你们公司盖章。不代替政府出具批文。" },
      { id: "v4", name: "全家落地签核对", shop: "悟空签证协助", area: "机场前", price: 350000, unit: "2–4 人", score: 4.9, emoji: "👨‍👩‍👧", bg: "#f0fdf4", desc: "出发前一晚视频核对每个人的护照页、签证页和入境卡填写。适合带老人小孩。" },
    ],
  },
  med: {
    lead: "中文导诊和预约信息，诊疗由持证机构提供",
    items: [
      { id: "h1", name: "全科问诊预约", shop: "合作诊所 · Kemang", area: "南雅加达", price: 350000, unit: "含翻译", score: 4.8, emoji: "🩺", bg: "#f0fdf4", desc: "预约英文或中文翻译陪同的全科门诊。医生由诊所安排，平台只做时间和翻译。" },
      { id: "h2", name: "牙科洗牙", shop: "合作口腔", area: "SCBD", price: 500000, unit: "约 45 分钟", score: 4.7, emoji: "🦷", bg: "#eff6ff", desc: "工作日下午档。到店前 24 小时可免费改期一次。" },
      { id: "h3", name: "常用药代买", shop: "持证药店", area: "全雅加达", price: 25000, unit: "跑腿费", score: 4.6, emoji: "💊", bg: "#fff7ed", desc: "凭医生处方或药店允许的非处方药代买，药费另付。不销售处方药目录外的药品。" },
      { id: "h4", name: "儿童疫苗咨询", shop: "合作儿科", area: "中雅加达", price: 200000, unit: "咨询", score: 4.8, emoji: "👶", bg: "#fefce8", desc: "对照国内接种本，说明印尼可衔接的疫苗。接种在医院完成。" },
    ],
  },
  home: {
    lead: "保洁、维修、美甲，师傅上门，雅加达",
    items: [
      { id: "a1", name: "两居室保洁", shop: "净屋", area: "南雅加达", price: 280000, unit: "2 小时", score: 4.8, emoji: "🧹", bg: "#fff7ed", desc: "含厨房台面、卫生间、地面。自带工具。公寓需提前跟保安报备。" },
      { id: "a2", name: "空调清洗", shop: "冷气师傅", area: "全雅加达", price: 150000, unit: "1 台", score: 4.7, emoji: "❄️", bg: "#ecfeff", desc: "壁挂机标准清洗。加氟、换零件另报价。当天可约下午档。" },
      { id: "a3", name: "洗衣机不脱水", shop: "家电快修", area: "中雅加达", price: 120000, unit: "上门费", score: 4.6, emoji: "🔧", bg: "#f5f3ff", desc: "上门检测费。修好再报零件价，不修不收零件费。" },
      { id: "a4", name: "美甲到家", shop: "指尖", area: "PIK / Kemang", price: 220000, unit: "双手", score: 4.9, emoji: "💅", bg: "#fff1f2", desc: "纯色或简约款。色卡下单时选。晚 8 点后加 Rp 50.000。" },
      { id: "a5", name: "通下水道", shop: "家里修", area: "公寓 / 别墅", price: 180000, unit: "1 处", score: 4.5, emoji: "🚿", bg: "#f0fdf4", desc: "厨房或卫生间一处。疏通不通可改约，上门费可抵下次。" },
    ],
  },
};

const state = {
  tab: "home",
  view: "home",
  cart: {},
  pay: "wechat",
  orders: [],
  toast: "",
  service: null,
  item: null,
  merchant: null,
  cuisine: "全部",
};

const rp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");
const merchants = () => (typeof MERCHANTS === "undefined" ? [] : MERCHANTS);
const allItems = () => [
  ...FOODS,
  ...merchants().flatMap((m) => m.products),
  ...Object.values(CATALOG).flatMap((c) => c.items),
];
const findItem = (id) => allItems().find((x) => x.id === id);
const cartCount = () => Object.values(state.cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(state.cart).reduce((s, [id, n]) => s + findItem(id).price * n, 0);

function toast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => {
    if (state.toast === msg) {
      state.toast = "";
      render();
    }
  }, 1600);
}

function add(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  toast("已加入购物车");
}

function setQty(id, d) {
  const n = (state.cart[id] || 0) + d;
  if (n <= 0) delete state.cart[id];
  else state.cart[id] = n;
  render();
}

function go(view, tab) {
  state.view = view;
  if (tab) state.tab = tab;
  if (view === "home" || view === "orders" || view === "me" || view === "discover") state.tab = view === "discover" ? "discover" : view;
  render();
  window.scrollTo(0, 0);
}

function placeOrder() {
  if (!cartCount()) return;
  const id = "WK" + Date.now().toString().slice(-8);
  const payName = [...PAYS, ...LOCALS].find((p) => p.id === state.pay).name;
  state.orders.unshift({
    id,
    total: cartTotal(),
    pay: payName,
    items: Object.entries(state.cart).map(([id, n]) => `${findItem(id).name} x${n}`),
    at: new Date().toLocaleString("zh-CN", { hour12: false }),
  });
  state.cart = {};
  state.view = "done";
  state.tab = "orders";
  state.last = id;
  render();
}

function nav() {
  const items = [
    ["home", "首页", "⌂"],
    ["discover", "服务", "▦"],
    ["orders", "订单", "☰"],
    ["me", "我的", "☺"],
  ];
  return `<nav class="nav">${items
    .map(([id, name, ico]) => {
      const on = state.tab === id ? "on" : "";
      const badge = id === "orders" && cartCount() && state.view !== "cart" ? "" : "";
      const cartBadge = id === "home" ? "" : "";
      return `<button class="${on}" data-go="${id}" data-tab="${id}"><span class="n">${ico}</span>${name}${
        id === "orders" && state.orders.length ? "" : ""
      }</button>`;
    })
    .join("")}</nav>`;
}

function shopCard(m) {
  return `<button class="shop-card" data-merch="${m.id}">
    <img src="${m.cover}" alt="" loading="lazy" onerror="this.src='static/scenes/hero.jpg'">
    <div class="shop-shade">
      <span class="tag">${m.cuisine}</span>
      <b>${m.name}</b>
      <small>★ ${m.score} · ${m.mins} 分钟 · ${m.area}</small>
    </div>
  </button>`;
}

function spotCard(m) {
  const dish = m.products[0];
  return `<button class="spot" data-merch="${m.id}">
    <img src="${dish.img}" alt="" loading="lazy" onerror="this.src='static/logo.jpg'">
    <div><b>${m.name}</b><small>${m.cuisine} · ${rp(dish.price)} 起</small></div>
  </button>`;
}

function home() {
  const tiles = SERVICES.slice(0, 10).map(
    (s) => `<button class="tile" data-svc="${s.id}">
      <div class="ico">${s.emoji}</div><b>${s.name}</b></button>`
  ).join("");
  const list = merchants();
  return `<section class="screen">
    <div class="hero">
      <img class="hero-bg" src="static/scenes/hero.jpg" alt="">
      <div class="hero-mask"></div>
      <div class="hero-copy">
        <div class="brand-lock">
          <img class="logo-mark" src="static/logo.jpg" alt="悟空外卖">
          <div>
            <p class="eyebrow">WUKONG DELIVERY</p>
            <h1>悟空外卖</h1>
          </div>
        </div>
        <p>雅加达中文生活 · ${list.length} 家餐厅今夜可送</p>
      </div>
    </div>
    <div class="float-search">⌕ 搜索川菜、海南鸡、Kemang</div>
    <div class="loc-row"><span>雅加达 · 唐格朗可配送</span><b>今晚 18:00–23:30</b></div>
    <div class="pad">
      <div class="grid">${tiles}</div>
      <div class="section-h"><h3>主厨推荐</h3><button data-go="food" data-tab="home">全部商家</button></div>
      <div class="h-scroll">${list.slice(0, 8).map(spotCard).join("")}</div>
      <div class="section-h"><h3>附近餐厅</h3><span>${list.length} 家</span></div>
      <div class="shop-list">${list.slice(0, 6).map(shopCard).join("")}</div>
    </div>
  </section>`;
}

function discover() {
  return `<section class="screen">
    <header class="top">
      <p class="eyebrow">JAKARTA</p>
      <h1 class="title">生活服务</h1>
      <div class="sub">超市、订座、旅游、到家，和外卖在同一本账里</div>
    </header>
    <div class="pad">
      <div class="grid nine">${SERVICES.filter((s) => s.id !== "lunch")
        .slice(0, 9)
        .map(
          (s) => `<button class="tile" data-svc="${s.id}">
            <div class="ico" style="background:${s.tint}">${s.emoji}</div>
            <b>${s.name}</b><small>${s.sub}</small></button>`
        )
        .join("")}</div>
      <div class="promo">
        <div class="box a"><b>VIP 会员专享</b><span>黑金会员权益</span></div>
        <div class="box b"><b>折扣好礼</b><span>积分可兑换</span></div>
      </div>
    </div>
  </section>`;
}

function filteredMerchants() {
  const all = merchants();
  if (state.cuisine === "全部") return all;
  return all.filter((m) => m.cuisine === state.cuisine);
}

function foodList() {
  const cuisines = ["全部", ...new Set(merchants().map((m) => m.cuisine))];
  const list = filteredMerchants();
  return `<section class="screen">
    <div class="backbar"><button class="icon-btn" data-go="home" data-tab="home">‹</button><h1>雅加达餐厅</h1></div>
    <div class="chips">${cuisines
      .map((c) => `<button class="chip ${state.cuisine === c ? "on" : ""}" data-cuisine="${c}">${c}</button>`)
      .join("")}</div>
    <div class="pad"><div class="shop-list">${list.map(shopCard).join("")}</div>
      <p class="count-note">${list.length} 家餐厅 · 每家 ${list[0] ? list[0].products.length : 32} 道菜</p>
    </div>
    ${cartCount() ? `<button class="cta" data-go="cart" data-tab="orders">购物车 ${cartCount()} 件 · ${rp(cartTotal())}</button>` : ""}
  </section>`;
}

function menuView() {
  const m = merchants().find((x) => x.id === state.merchant) || merchants()[0];
  if (!m) return foodList();
  return `<section class="screen">
    <div class="menu-hero">
      <img src="${m.cover}" alt="" onerror="this.src='static/scenes/hero.jpg'">
      <button class="back-float" data-go="food" data-tab="home">‹</button>
    </div>
    <div class="menu-sheet">
      <span class="tag" style="color:#8f2d24;border-color:rgba(143,45,36,.35)">${m.cuisine}</span>
      <h1>${m.name}</h1>
      <div class="meta-line">★ ${m.score} · ${m.mins} 分钟 · 配送 ${rp(m.fee)} · ${m.area}</div>
      <p class="lead">${m.products.length} 道现做菜品。价格为印尼盾，演示不扣款。</p>
      ${m.products
        .map(
          (p) => `<div class="dish">
            <img src="${p.img}" alt="" loading="lazy" data-item="${p.id}" onerror="this.src='static/logo.jpg'">
            <div class="dish-body" data-item="${p.id}">
              <b>${p.name}</b><i>${p.en}</i>
              <div class="between"><span class="price">${rp(p.price)}</span>
                <button class="add" data-add="${p.id}">+</button></div>
            </div>
          </div>`
        )
        .join("")}
    </div>
    ${cartCount() ? `<button class="cta" data-go="cart" data-tab="orders">购物车 ${cartCount()} 件 · ${rp(cartTotal())}</button>` : ""}
  </section>`;
}

function offerRow(it) {
  const scene = `static/scenes/${state.service || "mart"}.jpg`;
  return `<button class="offer" data-item="${it.id}">
    <div class="photo sm"><img src="${it.img || scene}" alt="" onerror="this.src='static/logo.jpg'"></div>
    <div class="offer-body">
      <b>${it.name}</b>
      <div class="sub">${it.shop}</div>
      <div class="info">★ ${it.score} · ${it.area} · ${it.unit}</div>
      <div class="price">${rp(it.price)}</div>
    </div>
    <span class="chev">›</span>
  </button>`;
}

function serviceView() {
  const s = SERVICES.find((x) => x.id === state.service) || SERVICES[0];
  if (s.id === "food" || s.id === "lunch") return foodList();
  const cat = CATALOG[s.id];
  return `<section class="screen">
    <div class="backbar"><button class="icon-btn" data-go="discover" data-tab="discover">‹</button><h1>${s.name}</h1></div>
    <div class="pad"><p class="lead">${cat.lead}</p></div>
    <div class="offers">${cat.items.map(offerRow).join("")}</div>
    ${cartCount() ? `<button class="cta" data-go="cart" data-tab="orders">购物车 ${cartCount()} 件 · ${rp(cartTotal())}</button>` : ""}
  </section>`;
}

function detailView() {
  const it = findItem(state.item);
  if (!it) return state.merchant ? menuView() : serviceView();
  const back = it.img && String(it.id).includes("p") ? "menu" : "svc";
  const photo = it.img || `static/scenes/${state.service || "hero"}.jpg`;
  return `<section class="screen no-nav">
    <div class="backbar"><button class="icon-btn" data-go="${back}" data-tab="home">‹</button><h1>${it.name}</h1></div>
    <div class="hero-photo"><img src="${photo}" alt="" onerror="this.src='static/logo.jpg'"></div>
    <div class="card" style="margin-top:-28px;position:relative">
      <h3 style="font-size:22px">${it.name}</h3>
      <div class="sub">${it.en || ""} ${it.shop || ""} · ${it.area || ""}</div>
      <div class="between" style="margin-top:8px"><span class="price">${rp(it.price)}</span><span class="sub">${it.unit || "1 份"} · ★ ${it.score || ""}</span></div>
      <p>${it.desc || ""}</p>
    </div>
    <button class="cta" data-add="${it.id}" data-after="cart">加入结算</button>
  </section>`;
}

function cartView() {
  const rows = Object.keys(state.cart).map(findItem).filter(Boolean);
  if (!rows.length) {
    return `<section class="screen"><div class="backbar"><button class="icon-btn" data-go="food" data-tab="home">‹</button><h1>购物车</h1></div>
      <div class="empty">购物车是空的<br><button class="pill" style="margin-top:12px" data-go="food" data-tab="home">去点餐</button></div></section>`;
  }
  return `<section class="screen no-nav">
    <div class="backbar"><button class="icon-btn" data-go="food" data-tab="home">‹</button><h1>购物车</h1></div>
    <div class="card">${rows
      .map(
        (f) => `<div class="line-item">${f.img ? `<img src="${f.img}" alt="" onerror="this.src='static/logo.jpg'">` : `<span style="font-size:28px">${f.emoji || ""}</span>`}
          <div style="flex:1"><b>${f.name}</b><div class="price">${rp(f.price)}</div></div>
          <div class="qty"><button data-qty="${f.id}" data-d="-1">−</button><b>${state.cart[f.id]}</b>
          <button data-qty="${f.id}" data-d="1">+</button></div></div>`
      )
      .join("")}
      <div class="kv"><span>商品合计</span><b>${rp(cartTotal())}</b></div>
      <div class="kv"><span>配送费</span><b>Rp 0</b></div>
    </div>
    <button class="cta" data-go="pay" data-tab="orders">去结账 ${rp(cartTotal())}</button>
  </section>`;
}

function payView() {
  return `<section class="screen no-nav">
    <div class="backbar"><button class="icon-btn" data-go="cart" data-tab="orders">‹</button><h1>结账支付</h1></div>
    <p class="sub" style="text-align:center;margin:0">印尼悟空 · 雅加达</p>
    <div class="card"><h3>订单摘要</h3>
      <div class="kv"><span>件数</span><b>${cartCount()}</b></div>
      <div class="kv"><span>地址</span><b>雅加达示范地址</b></div>
      <div class="kv"><span>总计金额</span><b>${rp(cartTotal())}</b></div>
      <div class="kv"><span>配送时间</span><b>约 25–35 分钟</b></div>
    </div>
    <div class="card"><h3>选择支付方式</h3>
      <div class="pay-grid">${PAYS.map(
        (p) => `<button class="pay ${state.pay === p.id ? "on" : ""}" data-pay="${p.id}">
          <div class="t">${p.mark} ${p.name}</div><small>${p.note}</small></button>`
      ).join("")}</div>
      <h3 style="margin-top:14px">其他本地支付</h3>
      <div class="locals">${LOCALS.map(
        (p) => `<button class="chip ${state.pay === p.id ? "on" : ""}" data-pay="${p.id}">${p.name}</button>`
      ).join("")}</div>
      <p class="sheet-note">演示不会真实扣款。微信、支付宝与印尼本地支付都可点选。</p>
    </div>
    <button class="cta" data-order="1">确认支付 ${rp(cartTotal())}</button>
  </section>`;
}

function done() {
  return `<section class="screen">
    <div class="ok-hero"><div class="big">✓</div><h2>支付成功</h2>
      <p class="sub">订单 ${state.last} 已送给商家<br>这是手机演示，没有真实扣款</p></div>
    <button class="cta" data-go="orders" data-tab="orders">查看订单</button>
  </section>`;
}

function orders() {
  if (!state.orders.length) {
    return `<section class="screen"><header class="top"><h1 class="title">订单</h1></header>
      <div class="empty">还没有订单<br><button class="pill" style="margin-top:12px" data-go="food" data-tab="home">去点一份炒饭</button></div></section>`;
  }
  return `<section class="screen"><header class="top"><h1 class="title">订单</h1></header>
    ${state.orders
      .map(
        (o) => `<div class="card"><div class="between"><b>${o.id}</b><span class="price">已支付</span></div>
          <div class="sub" style="margin:6px 0">${o.items.join("、")}</div>
          <div class="kv"><span>${o.pay}</span><b>${rp(o.total)}</b></div>
          <div class="sub">${o.at} · 雅加达</div></div>`
      )
      .join("")}
  </section>`;
}

function me() {
  return `<section class="screen">
    <header class="top" style="text-align:center">
      <img src="static/logo.jpg" alt="" style="width:76px;height:76px;border-radius:22px;margin:8px auto;border:1px solid rgba(198,163,106,.6)">
      <p class="eyebrow">MEMBER</p>
      <h1 class="title">悟空行者</h1>
      <div class="sub">雅加达 · 黑金会员</div>
    </header>
    <div class="vip">
      <div class="between"><b>VIP</b><span>WUKONG 悟空外卖</span></div>
      <div class="gold">黑金会员</div>
      <small>尊享会员权益 · 积分可兑换</small>
    </div>
    <div class="points">
      <div class="between"><span class="sub">我的积分</span><span class="sub">黄金等级</span></div>
      <div class="big">58,200</div>
      <div class="bar"><i></i></div>
      <div class="between"><span class="sub">昨日 +250</span><button class="pill" data-toast="演示环境，积分暂不可兑换">去兑换</button></div>
    </div>
    <div class="menu" style="margin-top:12px">
      <button data-go="orders" data-tab="orders">我的订单 <span>›</span></button>
      <button data-toast="演示地址：雅加达">收货地址 <span>›</span></button>
      <button data-toast="客服将在正式版开通">联系客服 <span>›</span></button>
      <button data-go="about" data-tab="me">关于应用 <span>›</span></button>
    </div>
  </section>`;
}

function about() {
  return `<section class="screen">
    <div class="backbar"><button class="icon-btn" data-go="me" data-tab="me">‹</button><h1>关于应用</h1></div>
    <div class="card">
      <h3>悟空外卖 · 印尼悟空</h3>
      <p>面向在印尼的中文用户，一站式生活服务。可以点外卖、逛超市、看旅游和到家服务。界面是简体中文，价格是印尼盾。</p>
      <div class="kv"><span>运营主体</span><b>WUKONG TEKNOLOGI NUSANTARA</b></div>
      <div class="kv"><span>演示城市</span><b>雅加达</b></div>
      <p class="sheet-note">这是可在 iPhone Safari 打开的演示，不是应用商店正式版。</p>
    </div>
  </section>`;
}

function screen() {
  if (state.view === "food") return foodList();
  if (state.view === "menu") return menuView();
  if (state.view === "svc") return serviceView();
  if (state.view === "detail") return detailView();
  if (state.view === "cart") return cartView();
  if (state.view === "pay") return payView();
  if (state.view === "done") return done();
  if (state.view === "about") return about();
  if (state.tab === "discover" || state.view === "discover") return discover();
  if (state.tab === "orders" || state.view === "orders") return orders();
  if (state.tab === "me" || state.view === "me") return me();
  return home();
}

function render() {
  const hideNav = ["cart", "pay", "detail"].includes(state.view);
  document.getElementById("app").innerHTML =
    screen() + (hideNav ? "" : nav()) + (state.toast ? `<div class="toast">${state.toast}</div>` : "");
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => go(el.dataset.go, el.dataset.tab));
  });
  document.querySelectorAll("[data-add]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      add(el.dataset.add);
      if (el.dataset.after === "cart") go("cart", "orders");
    });
  });
  document.querySelectorAll("[data-merch]").forEach((el) => {
    el.addEventListener("click", () => {
      state.merchant = el.dataset.merch;
      state.view = "menu";
      state.tab = "home";
      render();
      window.scrollTo(0, 0);
    });
  });
  document.querySelectorAll("[data-cuisine]").forEach((el) => {
    el.addEventListener("click", () => {
      state.cuisine = el.dataset.cuisine;
      render();
    });
  });
  document.querySelectorAll("[data-svc]").forEach((el) => {
    el.addEventListener("click", () => {
      state.service = el.dataset.svc;
      state.view = "svc";
      state.tab = "discover";
      render();
    });
  });
  document.querySelectorAll("[data-item]").forEach((el) => {
    el.addEventListener("click", () => {
      state.item = el.dataset.item;
      state.view = "detail";
      render();
    });
  });
  document.querySelectorAll("[data-qty]").forEach((el) => {
    el.addEventListener("click", () => setQty(el.dataset.qty, Number(el.dataset.d)));
  });
  document.querySelectorAll("[data-pay]").forEach((el) => {
    el.addEventListener("click", () => {
      state.pay = el.dataset.pay;
      render();
    });
  });
  document.querySelectorAll("[data-order]").forEach((el) => {
    el.addEventListener("click", placeOrder);
  });
  document.querySelectorAll("[data-toast]").forEach((el) => {
    el.addEventListener("click", () => toast(el.dataset.toast));
  });
}

render();
